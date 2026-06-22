// Defence Guesser Service Worker
const CACHE_NAME = 'defence-guesser-v230';

// App shell only. Equipment / medal / symbol images are NOT pre-cached — they are
// cached on demand by the fetch handler the first time they're shown (the practice
// hub and game both lazy-load images). This keeps the first install small and means
// new assets never need to be added here.
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './data.js',
    './manifest.json',
    './firebase-config.js',
    './assets/geo-data.js',
    './assets/countries.geo.json',
    './assets/DG_Logo.png'
];

// Install event - cache files
self.addEventListener('install', event => {
    console.log('[SW] Installing Service Worker...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[SW] Caching app shell...');
                // Cache what we can, don't fail if some assets are missing
                return Promise.allSettled(
                    urlsToCache.map(url =>
                        cache.add(url).catch(err => {
                            console.warn(`[SW] Failed to cache: ${url}`, err);
                        })
                    )
                );
            })
            .then(() => {
                console.log('[SW] Install complete');
                return self.skipWaiting();
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    console.log('[SW] Activating Service Worker...');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[SW] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('[SW] Activation complete');
            return self.clients.claim();
        })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;

    // Skip external URLs (like map tiles, external images)
    const url = new URL(event.request.url);
    if (url.origin !== location.origin) {
        // For external resources, try network first, then cache
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    // Cache external resources for offline use
                    if (response.ok) {
                        const responseClone = response.clone();
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, responseClone);
                        });
                    }
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
        return;
    }

    // For local resources, try cache first, then network (and cache on demand)
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    // Found in cache
                    return response;
                }

                // Not in cache, fetch from network
                return fetch(event.request)
                    .then(response => {
                        // Don't cache non-successful responses
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clone the response
                        const responseToCache = response.clone();

                        // Add to cache (runtime caching — covers all images on first view)
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    });
            })
    );
});

// Handle messages from the app
self.addEventListener('message', event => {
    if (event.data === 'skipWaiting') {
        self.skipWaiting();
    }
});
