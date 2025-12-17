// Defence Guesser Service Worker
const CACHE_NAME = 'defence-guesser-v15';

// Files to cache for offline use
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './data.js',
    './assets/geo-data.js',
    './manifest.json',
    // Add your local asset images here
    './assets/m1_abrams_1765118350420.jpg',
    './assets/m1_abrams_bravo.jpg',
    './assets/leopard2_17655118389229.jpg',
    './assets/Leopard_2A7_bravo.jpg',
    './assets/challenger2_1765118411349.jpg',
    './assets/Challenger_2_Bravo.jpg',
    './assets/t90_1765118367473.jpg',
    './assets/T90MS_Bravo.jpg',
    './assets/merkava4_1765118431134.jpg',
    './assets/Merkava_Mk4_bravo.jpg',
    './assets/type99a_tank.jpg',
    './assets/Type_99a_bravo.jpg',
    './assets/k2_black_panther.jpg',
    './assets/K2_black_panther_bravo.jpg',
    './assets/pokpung_ho.jpg',
    './assets/zulfiqar_3.jpg',
    './assets/Zulfiqar_3_bravo.jpg',
    './assets/arjun_mk2.jpg',
    './assets/Arjun_Mk2_Bravo.jpg',
    './assets/leclerc.jpg',
    './assets/Leclerc_bravo.jpg',
    './assets/type_10.jpg',
    './assets/Type10_bravo.jpg',
    './assets/f35.jpg',
    './assets/F16.jpg',
    './assets/F16_Bravo.jpg',
    './assets/A10_Thunderbolt_2.jpg',
    './assets/A10_Thunderbolt2_bravo.jpg',
    './assets/gripen_1765118486549.jpg',
    './assets/f22_raptor.png',
    './assets/su57_felon.jpg',
    './assets/uss_ford_carrier.jpg',
    './assets/s400_1765118527696.jpg',
    './assets/caesar_1765118550941.jpg',
    './assets/bayraktar_1765118506987.jpg',
    './assets/m4a1_carbine.jpg',
    './assets/ak74m_rifle.png',
    './assets/DG_Logo.png',
    './assets/IRIAF F_14.jpg',
    './assets/MiG_29.jpg',
    './assets/J_20_Mighty_Dragon.jpg',
    './assets/Rafale.jpg',
    './assets/Eurofighter_Typhoon.jpg',
    './assets/Qaher_313.jpg',
    './assets/Type_055_Destroyer.jpg',
    './assets/Kirov_Class_Battlecruiser.jpg',
    './assets/QE.jpg',
    './assets/Delta_IV.jpg',
    './assets/Patriot.jpg',
    './assets/IronDome.jpg',
    './assets/Bavar_373.jpg',
    './assets/HQ_9.jpg',
    './assets/M270_MLRS.jpg',
    './assets/2S19_MSTA.jpg',
    './assets/K9_Thunder.jpg',
    './assets/M1989.jpg',
    './assets/MQ_9_Reaper.jpg',
    './assets/Shahed_136.png',
    './assets/Wing_Loong2.jpg',
    './assets/QBZ_95.jpg',
    './assets/KH-2002.jpg',
    './assets/Type_88.jpg',
    './assets/ZBD_04.jpg',
    './assets/ZBL_08.jpg',
    './assets/ZSD_89.jpg',
    './assets/BTR_82a.jpg',
    './assets/BMP_3.jpg',
    './assets/BTR_90.jpg',
    './assets/Rakhsh.jpg',
    './assets/Boragh.jpg',
    './assets/Type_05.jpg',
    './assets/MTU_72.jpg',
    './assets/TMM_6.jpg',
    './assets/B_2_Spirit.jpg',
    './assets/B_52.jpg',
    './assets/HIMARS.jpg',
    './assets/Tornado_S.png',
    './assets/Apache.jpg',
    './assets/Bradley_Fighting_Vehicle.jpg',
    './assets/T_14.jpg',
    './assets/T14_bravo.jpg',
    './assets/Olifant.png',
    './assets/Olifant_bravo.jpg',
    './assets/Boxer.jpg',
    './assets/AJAX.jpg',
    './assets/AK47.jpg',
    './assets/FN_SCAR.png',
    './assets/FAMAS.jpg',
    './assets/IWI_Tavor.jpg',
    './assets/SA80.jpg',
    './assets/Bushmaster.jpg',
    './assets/G36.jpg',
    './assets/FX_05.jpg',
    './assets/Krasukha_2.jpg',
    './assets/BMP_2.jpg',
    './assets/Black_Hawk.jpg',
    './assets/Chinook.jpg',
    './assets/Puma.jpg',
    './assets/TOS_1a.jpg',
    './assets/T72.jpg',
    './assets/T72_Bravo.jpg',
    './assets/SU_25.jpg',
    './assets/MQ_1C.jpg',
    './assets/Pantsir_S1.jpg',
    './assets/Stryker.jpg',
    './assets/SS_21.jpg',
    './assets/R_145BM.jpg',
    './assets/Eleron_3SW.jpg',
    './assets/MI_24.jpg',
    './assets/SA_13.jpg',
    './assets/TOR_M1_SA_15.jpg',
    './assets/Buk_SA_17.jpg',
    './assets/Orlan_10.jpg',
    './assets/BMR_3M.jpg',
    './assets/GMZ_3.jpg',
    './assets/HUMVEE.jpg',
    './assets/Foxhound.jpg',
    './assets/Jackal.jpg',
    './assets/NAMER.jpg',
    './assets/VT_1A.jpg',
    './assets/Al_Khalid_Bravo.jpg',
    './assets/Oshkosh.jpg',
    './assets/BAE_ACV.jpg',
    './assets/Ghost_Bat.jpg',
    './assets/MiG_31.jpg',
    './assets/Sukhoi_Su_30.jpg',
    './assets/AK_203.png',
    './assets/M27.jpg',
    './assets/KS_1.jpg',
    './assets/Steyr_AUG.jpg',
    './assets/CZ_BREN.jpg',
    './assets/Daewoo_K2.jpg',
    './assets/Sako_TRG_M10.jpg',
    './assets/Dragunov.jpg',
    './assets/MCMILLAN_TAC_50.png',
    './assets/L115A3.jpg',
    './assets/FGM_148_Javelin.jpg',
    './assets/EA_18G.jpg',
    './assets/C_5M_Super_Galaxy.jpg',
    './assets/A_50_Mainstay.jpg',
    './assets/A50_Mainstay_bravo.jpg',
    './assets/Boeing_E3_Sentry.jpg',
    './assets/KJ2000.jpg',
    './assets/USS_Zumwalt.jpg',
    './assets/Glock17.jpg',
    './assets/Glock17_bravo.jpg',
    './assets/Makarov_PM.jpg',
    './assets/Makarov_PM_bravo.jpg',
    './assets/Sig_Sauer_P320.jpg',
    './assets/SIG_Sauer_P320_bravo.jpg',
    './assets/QSZ_92.jpg',
    './assets/Super_Tucano.jpg',
    './assets/Super_Tucano_Bravo.jpg',
    './assets/Beretta_92.jpg',
    './assets/Ka-52_Alligator.jpg',
    './assets/Ka_52_Alligator_bravo.jpg',
    './assets/MP5.jpg',
    './assets/Mirage_2000D.jpg',
    './assets/Mirage_2000_Bravo.jpg',
    './assets/Type_96_ZTZ_96.jpg',
    './assets/Type_96_Bravo.jpg',
    './assets/AKM.jpg',
    './assets/AKM_Bravo.jpg',
    './assets/M16.jpg',
    './assets/M16_Bravo.jpg',
    './assets/Benelli_M4.jpg',
    './assets/Benelli_M4_Bravo.jpg'
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

    // For local resources, try cache first, then network
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

                        // Add to cache
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
