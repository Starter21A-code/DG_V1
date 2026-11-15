// ============================================================
// Defence Guesser — Analytics cookie consent
// Google Analytics (gtag.js) is only loaded after the player accepts. The
// loader itself (window.loadAnalytics) lives inline in <head> so a returning
// player who already accepted is counted from the very first page view.
// ============================================================

(function () {
    const CONSENT_KEY = 'dg_analytics_consent'; // 'granted' | 'denied' | absent = not asked yet

    function getConsent() {
        try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
    }

    function setConsent(value) {
        try { localStorage.setItem(CONSENT_KEY, value); } catch (e) { /* storage blocked */ }
    }

    // Remove any _ga / _ga_* cookies. GA sets them on the widest domain it can,
    // so try the host and every parent domain.
    function deleteAnalyticsCookies() {
        const names = document.cookie.split(';')
            .map(c => c.split('=')[0].trim())
            .filter(n => n === '_ga' || n.startsWith('_ga_') || n === '_gid' || n === '_gat');
        if (!names.length) return;
        const parts = location.hostname.split('.');
        const domains = ['', '; domain=' + location.hostname];
        for (let i = 0; i < parts.length; i++) domains.push('; domain=.' + parts.slice(i).join('.'));
        const expired = '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        names.forEach(n => domains.forEach(d => { document.cookie = n + expired + d; }));
    }

    const banner = document.getElementById('cookie-banner');
    if (!banner) return;
    const current = document.getElementById('cookie-banner-current');

    function showBanner(fromSettings) {
        const state = getConsent();
        if (current) {
            current.classList.toggle('hidden', !fromSettings || !state);
            current.textContent = state === 'granted'
                ? 'Current choice: analytics cookies accepted.'
                : 'Current choice: analytics cookies declined.';
        }
        banner.classList.remove('hidden');
    }

    function hideBanner() {
        banner.classList.add('hidden');
    }

    document.getElementById('cookie-accept-btn')?.addEventListener('click', () => {
        setConsent('granted');
        if (typeof window.loadAnalytics === 'function') window.loadAnalytics();
        hideBanner();
    });

    document.getElementById('cookie-decline-btn')?.addEventListener('click', () => {
        setConsent('denied');
        // If analytics was running this session, stop it sending anything more
        if (window.GA_MEASUREMENT_ID) window['ga-disable-' + window.GA_MEASUREMENT_ID] = true;
        deleteAnalyticsCookies();
        hideBanner();
    });

    document.getElementById('cookie-banner-terms')?.addEventListener('click', e => {
        e.preventDefault();
        const terms = document.getElementById('terms-modal');
        if (!terms) return;
        terms.classList.remove('hidden');
        // Jump to the analytics section
        const heading = [...terms.querySelectorAll('h4')].find(h => /Analytics/i.test(h.textContent));
        if (heading) heading.scrollIntoView({ block: 'start' });
    });

    // Help menu → Cookie settings: reopen the banner to change the choice
    document.getElementById('help-cookies-btn')?.addEventListener('click', () => {
        document.getElementById('help-menu-modal')?.classList.add('hidden');
        showBanner(true);
    });

    // Declined earlier → make sure no stale cookies linger from before
    if (getConsent() === 'denied') deleteAnalyticsCookies();
    if (!getConsent()) showBanner(false);

    window.openCookieSettings = () => showBanner(true);
})();
