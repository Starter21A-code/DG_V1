// Game State
const equipmentData = window.equipmentData;

// Country Name Normalization Mapping
const COUNTRY_ALIASES = {
    "United States": ["United States of America", "USA", "United States", "US"],
    "United Kingdom": ["United Kingdom", "Great Britain", "UK", "Britain"],
    "Russia": ["Russian Federation", "Russia"],
    "Turkey": ["Turkey", "Türkiye", "Republic of Turkey"],
    "Israel": ["Israel", "State of Israel"],
    "France": ["France", "French Republic"],
    "Germany": ["Germany", "Federal Republic of Germany"],
    "Sweden": ["Sweden", "Kingdom of Sweden"],
    "China": ["China", "People's Republic of China"],
    "India": ["India", "Republic of India"],
    "United Kingdom / France": ["United Kingdom", "Great Britain", "UK", "Britain", "France", "French Republic"],
    "United Kingdom / Sweden": ["United Kingdom", "Great Britain", "UK", "Britain", "Sweden", "Kingdom of Sweden"],
    "China / Pakistan": ["China", "People's Republic of China", "Pakistan", "Islamic Republic of Pakistan"],
    "United States / United Kingdom": ["United States of America", "USA", "United States", "US", "United Kingdom", "Great Britain", "UK", "Britain"],
    "Germany / United Kingdom / Italy / Spain": ["Germany", "Federal Republic of Germany", "United Kingdom", "Great Britain", "UK", "Britain", "Italy", "Italian Republic", "Spain", "Kingdom of Spain"],
    "Germany/Italy": ["Germany", "Federal Republic of Germany", "Italy", "Italian Republic"]
};

// ── Country flag emoji helper ────────────────────────────────────────────────
// Maps every equipment origin name to its ISO 3166-1 alpha-2 code.
const COUNTRY_TO_ISO = {
    'Argentina':              'AR',
    'Australia':              'AU',
    'Austria':                'AT',
    'Belgium':                'BE',
    'Brazil':                 'BR',
    'Canada':                 'CA',
    'China':                  'CN',
    'Czech Republic':         'CZ',
    'Finland':                'FI',
    'France':                 'FR',
    'Germany':                'DE',
    'India':                  'IN',
    'Indonesia':              'ID',
    'Iran':                   'IR',
    'Israel':                 'IL',
    'Italy':                  'IT',
    'Japan':                  'JP',
    'Lithuania':              'LT',
    'Mexico':                 'MX',
    'North Korea':            'KP',
    'Norway':                 'NO',
    'Pakistan':               'PK',
    'Poland':                 'PL',
    'Russia':                 'RU',
    'Singapore':              'SG',
    'South Africa':           'ZA',
    'South Korea':            'KR',
    'Spain':                  'ES',
    'Sweden':                 'SE',
    'Switzerland':            'CH',
    'Taiwan':                 'TW',
    'Turkey':                 'TR',
    'Ukraine':                'UA',
    'United Kingdom':         'GB',
    'United States':          'US'
};

// Converts an ISO 3166-1 alpha-2 code to a small flag <img> tag using flagcdn.com.
// flagcdn.com is a free, reliable CDN — the same internet connection used for
// the Leaflet map tiles is sufficient.
function isoToFlagImg(iso) {
    const code = iso.toLowerCase();
    return `<img src="https://flagcdn.com/20x15/${code}.png"
                 alt="${iso}"
                 style="height:14px;vertical-align:middle;margin-right:3px;border-radius:1px;display:inline-block;"
                 onerror="this.style.display='none'">`;
}

// Returns flag <img> HTML for an origin string.
// Handles simple names ('Turkey' → 🇹🇷 img) and multi-country origins
// ('United States / United Kingdom' → two flag imgs).
function getCountryFlagHTML(origin) {
    if (!origin) return '';
    const parts = origin.split(/\s*\/\s*/);
    const imgs = parts
        .map(p => p.trim())
        .map(p => COUNTRY_TO_ISO[p])
        .filter(Boolean)
        .map(isoToFlagImg);
    return imgs.join(' ');
}

let state = {
    score: 0,
    round: 1,
    maxRounds: 5,
    currentEquipment: null,
    userGuess: null,
    selectedCountry: null,
    hoveredCountry: null,
    map: null,
    bgLayer: null,
    marker: null,
    actualMarker: null,
    geoJsonLayer: null,
    mapDataLoaded: false,
    bonusSubmitted: false,
    roundResults: [],
    currentRoundResult: null,
    isDailyMode: false,
    playerName: '',
    isHardMode: false,
    frostRevealPercentage: 0,
    triviaSubmitted: false,
    currentTriviaQuestion: null,
    dailyRoundStartTime: null,
    dailyTimerInterval: null,
    dailyTimeMultiplier: 100,
    // ── Speedrun state ──
    speedrunTimeRemaining: 60,
    speedrunTimerInterval: null,
    speedrunResults: [],          // [{name, imageSrc, correct, points, origin}]
    consecutiveCorrect: 0,        // Current correct streak for combo
    comboMultiplier: 1.0,         // 1.0 or 1.5
    bestCombo: 0,                 // Best combo streak this run
    targetsCleared: 0,            // Targets completed in speedrun
    speedrunScoreProgression: []  // Cumulative score after each target
};

// Sound System using Web Audio API
let soundEnabled = localStorage.getItem('soundEnabled') !== 'false'; // Default: enabled
let audioContext = null;

function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
}

function playTone(frequency, duration, type = 'sine', volume = 0.3) {
    if (!soundEnabled) return;

    try {
        const ctx = initAudioContext();
        if (ctx.state === 'suspended') {
            ctx.resume();
        }

        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

        gainNode.gain.setValueAtTime(volume, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + duration);
    } catch (e) {
        console.warn('Sound playback failed:', e);
    }
}

function playCorrectSound() {
    // Pleasant ascending two-tone chord
    playTone(523.25, 0.15, 'sine', 0.25); // C5
    setTimeout(() => playTone(659.25, 0.2, 'sine', 0.25), 100); // E5
}

function playIncorrectSound() {
    // Descending minor tone
    playTone(311.13, 0.25, 'sine', 0.2); // Eb4
    setTimeout(() => playTone(261.63, 0.3, 'sine', 0.2), 150); // C4
}

function playBonusCorrectSound() {
    // Three-note ascending fanfare
    playTone(523.25, 0.1, 'triangle', 0.3); // C5
    setTimeout(() => playTone(659.25, 0.1, 'triangle', 0.3), 80); // E5
    setTimeout(() => playTone(783.99, 0.2, 'triangle', 0.3), 160); // G5
}

function playBonusIncorrectSound() {
    // Single low tone
    playTone(196.00, 0.3, 'sine', 0.2); // G3
}

function playGameOverSound() {
    // Final fanfare
    playTone(392.00, 0.15, 'triangle', 0.25); // G4
    setTimeout(() => playTone(523.25, 0.15, 'triangle', 0.25), 100); // C5
    setTimeout(() => playTone(659.25, 0.15, 'triangle', 0.25), 200); // E5
    setTimeout(() => playTone(783.99, 0.3, 'triangle', 0.3), 300); // G5
}

function playClickSound() {
    if (!soundEnabled) return;
    playTone(800, 0.05, 'sine', 0.1);
}

function playTickSound() { playTone(880, 0.06, 'square', 0.08); }

// ── Speedrun Timer ──────────────────────────────────────────────
function startSpeedrunTimer() {
    state.speedrunTimeRemaining = 60;
    updateSpeedrunTimerDisplay();
    document.getElementById('speedrun-timer')?.classList.remove('hidden');
    state.speedrunTimerInterval = setInterval(() => {
        state.speedrunTimeRemaining--;
        updateSpeedrunTimerDisplay();
        if (state.speedrunTimeRemaining <= 10 && state.speedrunTimeRemaining > 0) playTickSound();
        if (state.speedrunTimeRemaining <= 0) { stopSpeedrunTimer(); endSpeedrun(); }
    }, 1000);
}
function stopSpeedrunTimer() {
    if (state.speedrunTimerInterval) { clearInterval(state.speedrunTimerInterval); state.speedrunTimerInterval = null; }
    document.getElementById('speedrun-timer')?.classList.add('hidden');
}
function addSpeedrunTimePenalty(secs) {
    state.speedrunTimeRemaining = Math.max(0, state.speedrunTimeRemaining - secs);
    updateSpeedrunTimerDisplay();
    if (state.speedrunTimeRemaining <= 0) { stopSpeedrunTimer(); endSpeedrun(); }
}
function updateSpeedrunTimerDisplay() {
    const el = document.getElementById('speedrun-timer');
    const val = document.getElementById('speedrun-timer-value');
    if (!el || !val) return;
    val.textContent = state.speedrunTimeRemaining;
    el.classList.remove('speedrun-high','speedrun-medium','speedrun-low','speedrun-critical');
    const t = state.speedrunTimeRemaining;
    if (t > 30) el.classList.add('speedrun-high');
    else if (t > 15) el.classList.add('speedrun-medium');
    else if (t > 5) el.classList.add('speedrun-low');
    else el.classList.add('speedrun-critical');
}

// ── Combo Display ────────────────────────────────────────────
function updateComboDisplay() {
    const el = document.getElementById('combo-indicator');
    const cnt = document.getElementById('combo-streak-count');
    if (!el || !cnt) return;
    el.classList.remove('hidden');
    cnt.textContent = state.consecutiveCorrect;
    el.classList.toggle('combo-active', state.consecutiveCorrect >= 4);
}
function hideComboDisplay() { document.getElementById('combo-indicator')?.classList.add('hidden'); }

// ── Speedrun Feedback Overlay ─────────────────────────────────
function showSpeedrunFeedback(isCorrect, points, penaltySecs) {
    const fb = document.getElementById('speedrun-feedback'); if (!fb) return;
    const badge = document.getElementById('sf-result-badge');
    badge.textContent = isCorrect ? '✓ ON TARGET' : '✗ MISSED';
    badge.className = 'sf-result-badge ' + (isCorrect ? 'correct' : 'incorrect');
    const ptsEl = document.getElementById('sf-points');
    ptsEl.textContent = '+' + points.toLocaleString();
    ptsEl.style.color = isCorrect ? '#00ff88' : '#ff6600';
    fb.className = 'speedrun-feedback ' + (isCorrect ? 'correct-fb' : 'incorrect-fb');
    const penEl = document.getElementById('sf-penalty');
    if (penaltySecs > 0) { penEl.textContent = `⏱ -${penaltySecs}s PENALTY`; penEl.classList.remove('hidden'); } else penEl.classList.add('hidden');
    const comboEl = document.getElementById('sf-combo');
    const streak = state.consecutiveCorrect;
    if (streak >= 4) { comboEl.textContent = '🔥 COMBO ×1.5'; comboEl.classList.remove('hidden'); }
    else if (streak > 0) { comboEl.textContent = `${streak} streak`; comboEl.classList.remove('hidden'); }
    else comboEl.classList.add('hidden');
    fb.classList.remove('hidden','animating'); void fb.offsetWidth; fb.classList.add('animating');
    setTimeout(() => fb.classList.add('hidden'), 1500);
}

// ── Replay Reel ─────────────────────────────────────────────
function showReplayReel() {
    const modal = document.getElementById('replay-reel-modal');
    const grid = document.getElementById('replay-reel-grid');
    if (!modal || !grid) { endGame(); return; }
    grid.innerHTML = '';
    state.speedrunResults.forEach(r => {
        const item = document.createElement('div');
        item.className = 'reel-item ' + (r.correct ? 'reel-correct' : 'reel-incorrect');
        item.title = `View ${r.name} in Practice Hub`;
        item.innerHTML = `<img src="${r.imageSrc}" alt="${r.name}" loading="lazy"><div class="reel-item-badge">${r.correct?'✓':'✗'}</div><div class="reel-item-name">${r.name}</div>`;
        item.addEventListener('click', () => {
            const equipment = equipmentData.find(e => e.name === r.name);
            if (!equipment) return;
            openPracticeModal(equipment);
        });
        grid.appendChild(item);
    });
    const correct = state.speedrunResults.filter(r => r.correct).length;
    document.getElementById('reel-targets').textContent = state.speedrunResults.length;
    document.getElementById('reel-correct').textContent = correct;
    document.getElementById('reel-best-combo').textContent = state.bestCombo;
    document.getElementById('reel-score').textContent = state.score.toLocaleString();
    const btn = document.getElementById('replay-reel-continue-btn');
    if (btn) btn.onclick = () => { modal.classList.add('hidden'); endGame(); };
    modal.classList.remove('hidden');
}
function endSpeedrun() {
    stopSpeedrunTimer(); state.guessSubmitted = true;
    hideEquipmentPopup();
    dom.equipmentThumbnail.classList.add('hidden');
    hideComboDisplay();
    showReplayReel();
}
function getSpeedrunRating(score) {
    if (score >= 120000) return 'God of War';   if (score >= 90000) return 'John Rambo';
    if (score >= 70000)  return 'John Matrix (Commando)'; if (score >= 55000) return 'Maj Richard Sharpe';
    if (score >= 40000)  return 'Maj Winters';   if (score >= 30000) return 'Johnny Rico';
    if (score >= 20000)  return 'Lt Aldo Rain';  if (score >= 12000) return 'Pte Gump';
    if (score >= 6000)   return 'Capt Sobel';    if (score >= 2000)  return 'Gen Melchett';
    if (score >= 500)    return 'Pte Baldrick';  return 'LIZZARD';
}

// ── Speedrun Archetype Detection ────────────────────────────────────────────
const ARCHETYPES = [
    {
        id: 'sniper',
        name: 'The Sniper',
        subtitle: 'Designated Marksman',
        card: 'A♦',
        cardLabel: 'Ace of Diamonds',
        img: 'Archetypes/AceOfDiamonds.png',
        caption: "One shot, one kill. You spent 45 seconds staring at a single piece of tank track, but hey — you got it right.",
        detect: (r, targets, accuracy) => accuracy >= 90 && targets <= 6 && targets > 0
    },
    {
        id: 'tier1',
        name: 'Tier 1 Operator',
        subtitle: 'The Ace',
        card: 'A♠',
        cardLabel: 'Ace of Spades',
        img: 'Archetypes/AceOfSpades.png',
        caption: "Fast, lethal, and suspiciously accurate. The CIA would like to know your location.",
        detect: (r, targets, accuracy) => targets >= 9 && accuracy >= 90
    },
    {
        id: 'suppression',
        name: 'Suppressing Fire',
        subtitle: 'The Machine Gunner',
        card: 'J♣',
        cardLabel: 'Jack of Clubs',
        img: 'Archetypes/JackOfClubs.png',
        caption: "Accuracy by volume! You couldn't hit the broad side of a barn, but you definitely scared it.",
        detect: (r, targets, accuracy) => targets >= 9 && accuracy < 45
    },
    {
        id: 'brokenarrow',
        name: 'Broken Arrow',
        subtitle: 'Last Stand',
        card: 'K♥',
        cardLabel: 'King of Hearts',
        img: 'Archetypes/KingOfHearts.png',
        caption: "You spent the first 30 seconds getting your teeth kicked in, then woke up and chose violence. A legendary comeback.",
        detect: (r, targets) => {
            if (targets < 6) return false;
            const mid = Math.floor(r.length / 2);
            const firstHalf = r.slice(0, mid);
            const secondHalf = r.slice(mid);
            const acc1 = firstHalf.length ? firstHalf.filter(x => x.correct).length / firstHalf.length : 1;
            const acc2 = secondHalf.length ? secondHalf.filter(x => x.correct).length / secondHalf.length : 0;
            return acc1 < 0.4 && acc2 >= 0.75;
        }
    },
    {
        id: 'shocker',
        name: 'Shock Trooper',
        subtitle: 'Point Man',
        card: 'J♠',
        cardLabel: 'Jack of Spades',
        img: 'Archetypes/JackOfSpades.png',
        caption: "You kicked the door down like a hero, then tripped over the rug and panicked for the last 15 seconds.",
        detect: (r, targets) => {
            if (targets < 6) return false;
            const mid = Math.floor(r.length / 2);
            const firstHalf = r.slice(0, mid);
            const secondHalf = r.slice(mid);
            const acc1 = firstHalf.length ? firstHalf.filter(x => x.correct).length / firstHalf.length : 0;
            const acc2 = secondHalf.length ? secondHalf.filter(x => x.correct).length / secondHalf.length : 1;
            return acc1 >= 0.75 && acc2 < 0.4;
        }
    },
    {
        id: 'loosecannon',
        name: 'Loose Cannon',
        subtitle: 'FUBAR',
        card: '🃏',
        cardLabel: 'The Joker',
        img: 'Archetypes/Joker.png',
        caption: "You instantly identified a prototype drone, then missed a globally famous tank. Your strategy is a coin flip with extra steps.",
        detect: (r, targets, accuracy) => accuracy >= 40 && accuracy <= 65 && targets >= 5
    },
    {
        id: 'rookie',
        name: 'The Rookie',
        subtitle: 'Shell Shocked',
        card: '2♣',
        cardLabel: 'Two of Clubs',
        img: 'Archetypes/TwoOfClubs.png',
        caption: "The lads have been informed. They've agreed not to bring it up. Much.",
        detect: (r, targets) => targets <= 4
    },
    {
        id: 'firemission',
        name: 'Fire Mission',
        subtitle: 'The Artillery',
        card: 'K♦',
        cardLabel: 'King of Diamonds',
        img: 'Archetypes/KingOfDiamonds.png',
        caption: "No rushing, no hesitation. Just the cold, mechanical clicking of a sociopath. Are you a metronome?",
        detect: () => true  // Fallback — steady, methodical
    }
];

function detectSpeedrunArchetype() {
    const r = state.speedrunResults;
    const targets = r.length;
    const correct = r.filter(x => x.correct).length;
    const accuracy = targets > 0 ? Math.round((correct / targets) * 100) : 0;
    return ARCHETYPES.find(a => a.detect(r, targets, accuracy)) || ARCHETYPES[ARCHETYPES.length - 1];
}

function showArchetypeCard(archetype) {
    const section = document.getElementById('archetype-section');
    if (!section) return;
    section.classList.remove('hidden');

    // Card label and values
    document.getElementById('archetype-name').textContent = archetype.name;
    document.getElementById('archetype-subtitle').textContent = archetype.subtitle;
    document.getElementById('archetype-card-label').textContent = archetype.cardLabel;
    document.getElementById('archetype-caption').textContent = archetype.caption;

    // Card image (front face)
    const img = document.getElementById('archetype-card-img');
    if (img) {
        img.src = archetype.img;
        img.alt = archetype.cardLabel;
        img.onerror = () => {
            // Image not yet created — show card symbol as text fallback
            img.style.display = 'none';
            const fallback = document.getElementById('archetype-card-symbol');
            if (fallback) { fallback.textContent = archetype.card; fallback.classList.remove('hidden'); }
        };
    }

    // Trigger the flip animation after a short delay for drama
    const cardEl = document.getElementById('archetype-card-flip');
    if (cardEl) {
        cardEl.classList.remove('flipped');
        void cardEl.offsetWidth; // force reflow
        setTimeout(() => cardEl.classList.add('flipped'), 800);
    }
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem('soundEnabled', soundEnabled);
    updateSoundIcon();
    if (soundEnabled) {
        playClickSound();
    }
}

function updateSoundIcon() {
    const soundBtn = document.getElementById('sound-toggle');
    if (soundBtn) {
        soundBtn.textContent = soundEnabled ? '🔊' : '🔇';
        soundBtn.title = soundEnabled ? 'Sound: ON' : 'Sound: OFF';
    }
}

// DOM Elements
const screens = {
    start: document.getElementById('start-screen'),
    practice: document.getElementById('practice-screen'),
    game: document.getElementById('game-screen'),
    result: document.getElementById('result-screen'),
    gameOver: document.getElementById('game-over-screen')
};

const dom = {
    score: document.getElementById('score'),
    round: document.getElementById('round'),
    image: document.getElementById('equipment-image'),
    guessBtn: document.getElementById('guess-btn'),
    equipmentPopup: document.getElementById('equipment-popup'),
    closeEquipmentBtn: document.getElementById('close-equipment'),
    equipmentThumbnail: document.getElementById('equipment-thumbnail'),
    thumbnailImage: document.getElementById('thumbnail-image'),
    resultDetails: {
        origin: document.getElementById('actual-origin'),
        distance: document.getElementById('distance-error'),
        points: document.getElementById('points-awarded')
    },
    finalScore: document.getElementById('final-score'),
    bonus: {
        section: document.getElementById('bonus-section'),
        choices: document.getElementById('bonus-choices'),
        result: document.getElementById('bonus-result')
    },
    summary: {
        section: document.getElementById('equipment-summary'),
        year: document.getElementById('summary-year'),
        status: document.getElementById('summary-status'),
        users: document.getElementById('summary-users')
    },
    trivia: {
        section: document.getElementById('trivia-section'),
        questionText: document.getElementById('trivia-question-text'),
        choices: document.getElementById('trivia-choices'),
        result: document.getElementById('trivia-result')
    }
};

// Initialization
function init() {
    setupEventListeners();
    initMap();
    setupLeaderboardModal();
    setupCallsignModal();
    setupCallsignSubmitModal();
    setupReviewPromptModal();
    setupSoundToggle();
    initImageZoom();
    registerServiceWorker();
    console.log("Defence Guesser Initialized");
}

function setupSoundToggle() {
    const soundBtn = document.getElementById('sound-toggle');
    if (soundBtn) {
        soundBtn.addEventListener('click', toggleSound);
        updateSoundIcon();
    }
}

// PWA Service Worker Registration
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(registration => {
                    console.log('[PWA] Service Worker registered:', registration.scope);
                })
                .catch(error => {
                    console.warn('[PWA] Service Worker registration failed:', error);
                });
        });
    }
}

// PWA Install Prompt (optional - for custom install button)
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    console.log('[PWA] Install prompt available');
});

function setupEventListeners() {
    document.getElementById('start-btn').addEventListener('click', showGameOptionsModal);
    setupGameOptionsModal();
    document.getElementById('guess-btn').addEventListener('click', submitGuess);
    document.getElementById('next-btn').addEventListener('click', nextRound);
    document.getElementById('restart-btn').addEventListener('click', () => {
        if (state.isDailyMode) {
            switchScreen('start');
        } else {
            startGame(false, gameFilters);
        }
    });
    document.getElementById('menu-btn').addEventListener('click', () => {
        switchScreen('start');
    });

    // View daily stats button (on mission debrief)
    const viewDailyStatsBtn = document.getElementById('view-daily-stats-btn');
    if (viewDailyStatsBtn) {
        viewDailyStatsBtn.addEventListener('click', () => {
            // Open the daily leaderboard modal to view personal stats
            const leaderboardModal = document.getElementById('daily-leaderboard-modal');
            if (leaderboardModal) {
                updateLeaderboardModal();
                lbSwitchToTab('stats');
                leaderboardModal.classList.remove('hidden');
            }
        });
    }

    // View daily leaderboard button (on mission debrief)
    const viewDailyLeaderboardBtn = document.getElementById('view-daily-leaderboard-btn');
    if (viewDailyLeaderboardBtn) {
        viewDailyLeaderboardBtn.addEventListener('click', () => {
            viewDailyLeaderboardBtn.classList.remove('btn-pulse-cta');
            // If a daily score was just earned and hasn't been submitted, prompt for callsign first
            if (state.isDailyMode && state.score > 0 && !hasSubmittedDailyScoreToday()) {
                openCallsignSubmitModal();
                return;
            }
            openDailyLeaderboardOnGlobal();
        });
    }

    // Share buttons
    document.getElementById('share-x-btn').addEventListener('click', shareToX);
    document.getElementById('share-whatsapp-btn').addEventListener('click', shareToWhatsApp);
    document.getElementById('share-copy-btn').addEventListener('click', copyShareText);

    // Equipment popup minimize/maximize
    dom.closeEquipmentBtn.addEventListener('click', minimizeEquipment);
    dom.equipmentThumbnail.addEventListener('click', maximizeEquipment);

    // Result screen image preview (view equipment image from results)
    const resultImagePreview = document.getElementById('result-image-preview');
    if (resultImagePreview) {
        resultImagePreview.addEventListener('click', () => {
            showEquipmentPopup();
        });
    }

    // Practice Hub event listeners
    setupPracticeHub();

    // Help System (Terms & Conditions + How to Play)
    setupHelpSystem();

    // Daily Challenge setup
    setupDailyChallenge();

    // Quit game button setup
    setupQuitGame();

    // First-time tutorial tooltip
    setupFirstTimeTutorial();
}

// Quit Game functionality
function setupQuitGame() {
    const quitBtn = document.getElementById('quit-game-btn');
    const quitModal = document.getElementById('quit-modal');
    const quitConfirmBtn = document.getElementById('quit-confirm-btn');
    const quitCancelBtn = document.getElementById('quit-cancel-btn');

    if (quitBtn) {
        quitBtn.addEventListener('click', showQuitModal);
    }

    if (quitConfirmBtn) {
        quitConfirmBtn.addEventListener('click', () => {
            hideQuitModal();
            quitGame();
        });
    }

    if (quitCancelBtn) {
        quitCancelBtn.addEventListener('click', hideQuitModal);
    }

    // Close modal on background click
    if (quitModal) {
        quitModal.addEventListener('click', (e) => {
            if (e.target === quitModal) {
                hideQuitModal();
            }
        });
    }
}

function showQuitModal() {
    const quitModal = document.getElementById('quit-modal');
    if (quitModal) {
        quitModal.classList.remove('hidden');
    }
}

function hideQuitModal() {
    const quitModal = document.getElementById('quit-modal');
    if (quitModal) {
        quitModal.classList.add('hidden');
    }
}

function quitGame() {
    stopDailyTimer();
    stopSpeedrunTimer();
    hideComboDisplay();
    // Reset round display label safely (no innerHTML — preserves dom.round reference)
    const roundLabel = document.getElementById('round-label');
    if (roundLabel) roundLabel.textContent = 'ROUND: ';
    dom.round.textContent = '1';

    state.score = 0;
    state.round = 1;
    state.currentEquipment = null;
    state.userGuess = null;
    state.selectedCountry = null;
    state.bonusSubmitted = false;
    state.roundResults = [];
    state.currentRoundResult = null;

    hideEquipmentPopup();
    dom.equipmentThumbnail.classList.add('hidden');

    if (state.marker) { state.map.removeLayer(state.marker); state.marker = null; }
    if (state.actualMarker) { state.map.removeLayer(state.actualMarker); state.actualMarker = null; }
    if (state.line) { state.map.removeLayer(state.line); state.line = null; }

    switchScreen('start');
}


// Equipment Popup Controls
function minimizeEquipment() {
    resetImageZoom(); // Reset zoom when minimizing
    hideEquipmentPopup();
    // Only show game thumbnail if on game screen
    if (!screens.game.classList.contains('hidden')) {
        dom.equipmentThumbnail.classList.remove('hidden');

        // Apply blur to thumbnail in Hard Mode to prevent cheating
        if (state.isHardMode) {
            dom.equipmentThumbnail.classList.add('hard-mode-blur');
        } else {
            dom.equipmentThumbnail.classList.remove('hard-mode-blur');
        }
    }
}

function maximizeEquipment() {
    showEquipmentPopup();
    dom.equipmentThumbnail.classList.add('hidden');
    dom.equipmentThumbnail.classList.remove('hard-mode-blur');
}

function showEquipmentPopup() {
    dom.equipmentPopup.classList.remove('hidden');
    dom.equipmentPopup.classList.remove('minimized');

    // Show first-time tutorial if user hasn't seen it
    if (!hasSeenTutorial() && !screens.game.classList.contains('hidden')) {
        showFirstTimeTutorial();
    }
}

function hideEquipmentPopup() {
    resetImageZoom();
    dom.equipmentPopup.classList.add('hidden');

    // Also hide the tutorial tooltip when closing
    hideFirstTimeTutorial();
}

// First-time tutorial tooltip functions
function hasSeenTutorial() {
    return localStorage.getItem('hasSeenMinimizeTutorial') === 'true';
}

function markTutorialAsSeen() {
    localStorage.setItem('hasSeenMinimizeTutorial', 'true');
}

function showFirstTimeTutorial() {
    const tooltip = document.getElementById('first-time-tooltip');
    if (tooltip && !hasSeenTutorial()) {
        tooltip.classList.remove('hidden');
    }
}

function hideFirstTimeTutorial() {
    const tooltip = document.getElementById('first-time-tooltip');
    if (tooltip) {
        tooltip.classList.add('hidden');
        markTutorialAsSeen();
    }
}

function setupFirstTimeTutorial() {
    const dismissBtn = document.getElementById('tooltip-dismiss-btn');
    if (dismissBtn) {
        dismissBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            hideFirstTimeTutorial();
        });
    }

    // Hard Mode tutorial dismiss button
    const hmDismissBtn = document.getElementById('hard-mode-tutorial-dismiss');
    if (hmDismissBtn) {
        hmDismissBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            hideHardModeTutorial();
        });
    }
}

// Hard Mode first-time tutorial functions
function hasSeenHardModeTutorial() {
    return localStorage.getItem('hasSeenHardModeTutorial') === 'true';
}

function markHardModeTutorialSeen() {
    localStorage.setItem('hasSeenHardModeTutorial', 'true');
}

function showHardModeTutorial() {
    const tutorial = document.getElementById('hard-mode-tutorial');
    if (tutorial && !hasSeenHardModeTutorial()) {
        tutorial.classList.remove('hidden');
        // Pause frost interactions while tutorial is visible
        removeFrostInteractions();
    }
}

function hideHardModeTutorial() {
    const tutorial = document.getElementById('hard-mode-tutorial');
    if (tutorial) {
        tutorial.classList.add('hidden');
        markHardModeTutorialSeen();
        // Resume frost interactions after dismissing tutorial
        setupFrostInteractions();
    }
}

// ===========================
// HARD MODE - FROST CANVAS SYSTEM
// ===========================

// Frost state
let frostState = {
    canvas: null,
    ctx: null,
    image: null,
    revealZones: [],  // Array of { x, y, radius, startTime }
    activeTouches: new Map(),  // Map of touch/mouse ID to { x, y, startTime }
    animationId: null,
    isInitialized: false,
    blurAmount: 20,  // pixels of blur
    maxRevealRadius: 80,  // max radius in pixels
    revealDuration: 5000,  // 5 seconds to full reveal
    totalRevealedArea: 0,
    canvasArea: 0,
    totalRevealTime: 0,  // Total milliseconds spent actively revealing
    lastAnimationTime: 0,  // For tracking delta time
    gracePeriod: 4000,  // 4 seconds before multiplier starts dropping
    // Fixed reference area used to normalise the reveal percentage so that
    // the multiplier drop is the same regardless of the actual image/canvas size.
    // Chosen as a typical mid-size display canvas (~600×350 px).
    REFERENCE_AREA: 210000
};

function initFrostCanvas() {
    const canvas = document.getElementById('frost-canvas');
    const container = document.getElementById('image-zoom-container');
    const equipmentImage = document.getElementById('equipment-image');

    if (!canvas || !container || !equipmentImage) return;

    frostState.canvas = canvas;
    frostState.ctx = canvas.getContext('2d');
    frostState.image = equipmentImage;

    // Wait for image to load before initializing
    if (equipmentImage.complete && equipmentImage.naturalWidth > 0) {
        setupFrostCanvasSize();
    } else {
        equipmentImage.addEventListener('load', setupFrostCanvasSize, { once: true });
    }
}

function setupFrostCanvasSize() {
    const canvas = frostState.canvas;
    const container = document.getElementById('image-zoom-container');

    if (!canvas || !container) return;

    // Match canvas to container size
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    frostState.canvasArea = rect.width * rect.height;

    frostState.isInitialized = true;

    // Draw initial fully frosted state
    drawFrostOverlay();
}

function showFrostOverlay() {
    const canvas = document.getElementById('frost-canvas');
    const multiplier = document.getElementById('frost-multiplier');

    if (canvas) canvas.classList.remove('hidden');
    if (multiplier) multiplier.classList.remove('hidden');

    // Reset frost state for new round
    frostState.revealZones = [];
    frostState.activeTouches.clear();
    frostState.totalRevealedArea = 0;
    frostState.totalRevealTime = 0;
    frostState.lastAnimationTime = 0;
    state.frostRevealPercentage = 0;

    // Initialize if needed
    if (!frostState.isInitialized) {
        initFrostCanvas();
    } else {
        setupFrostCanvasSize();
    }

    // Setup interactions
    setupFrostInteractions();

    // Update multiplier display
    updateMultiplierDisplay();

    // Start animation loop
    startFrostAnimation();

    // Show hard mode tutorial on first play
    if (!hasSeenHardModeTutorial()) {
        // Small delay so frost is visually rendered before overlay appears
        setTimeout(() => showHardModeTutorial(), 200);
    }
}

function hideFrostOverlay() {
    const canvas = document.getElementById('frost-canvas');
    const multiplier = document.getElementById('frost-multiplier');

    if (canvas) canvas.classList.add('hidden');
    if (multiplier) multiplier.classList.add('hidden');

    // Stop animation
    if (frostState.animationId) {
        cancelAnimationFrame(frostState.animationId);
        frostState.animationId = null;
    }

    // Remove event listeners
    removeFrostInteractions();
}

function setupFrostInteractions() {
    const canvas = frostState.canvas;
    if (!canvas) return;

    // Mouse events
    canvas.addEventListener('mousedown', onFrostPointerDown);
    canvas.addEventListener('mousemove', onFrostPointerMove);
    canvas.addEventListener('mouseup', onFrostPointerUp);
    canvas.addEventListener('mouseleave', onFrostPointerUp);

    // Touch events
    canvas.addEventListener('touchstart', onFrostTouchStart, { passive: false });
    canvas.addEventListener('touchmove', onFrostTouchMove, { passive: false });
    canvas.addEventListener('touchend', onFrostTouchEnd);
    canvas.addEventListener('touchcancel', onFrostTouchEnd);
}

function removeFrostInteractions() {
    const canvas = frostState.canvas;
    if (!canvas) return;

    canvas.removeEventListener('mousedown', onFrostPointerDown);
    canvas.removeEventListener('mousemove', onFrostPointerMove);
    canvas.removeEventListener('mouseup', onFrostPointerUp);
    canvas.removeEventListener('mouseleave', onFrostPointerUp);

    canvas.removeEventListener('touchstart', onFrostTouchStart);
    canvas.removeEventListener('touchmove', onFrostTouchMove);
    canvas.removeEventListener('touchend', onFrostTouchEnd);
    canvas.removeEventListener('touchcancel', onFrostTouchEnd);
}

function onFrostPointerDown(e) {
    e.preventDefault();
    const pos = getCanvasPosition(e);
    frostState.activeTouches.set('mouse', {
        x: pos.x,
        y: pos.y,
        startTime: Date.now(),
        currentRadius: 0
    });
}

function onFrostPointerMove(e) {
    // Position is fixed at initial click - no movement tracking
    // This prevents users from "sweeping" to reveal large areas
}

function onFrostPointerUp(e) {
    if (frostState.activeTouches.has('mouse')) {
        const touch = frostState.activeTouches.get('mouse');
        // Lock in the reveal zone
        if (touch.currentRadius > 5) {
            frostState.revealZones.push({
                x: touch.x,
                y: touch.y,
                radius: touch.currentRadius
            });
        }
        frostState.activeTouches.delete('mouse');
    }
}

function onFrostTouchStart(e) {
    e.preventDefault();
    for (const touch of e.changedTouches) {
        const pos = getCanvasPositionFromTouch(touch);
        frostState.activeTouches.set(touch.identifier, {
            x: pos.x,
            y: pos.y,
            startTime: Date.now(),
            currentRadius: 0
        });
    }
}

function onFrostTouchMove(e) {
    e.preventDefault();
    // Position is fixed at initial touch - no movement tracking
    // This prevents users from "sweeping" to reveal large areas
}

function onFrostTouchEnd(e) {
    for (const touch of e.changedTouches) {
        if (frostState.activeTouches.has(touch.identifier)) {
            const activeTouch = frostState.activeTouches.get(touch.identifier);
            // Lock in the reveal zone
            if (activeTouch.currentRadius > 5) {
                frostState.revealZones.push({
                    x: activeTouch.x,
                    y: activeTouch.y,
                    radius: activeTouch.currentRadius
                });
            }
            frostState.activeTouches.delete(touch.identifier);
        }
    }
}

function getCanvasPosition(e) {
    const canvas = frostState.canvas;
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

function getCanvasPositionFromTouch(touch) {
    const canvas = frostState.canvas;
    const rect = canvas.getBoundingClientRect();
    return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
    };
}

function startFrostAnimation() {
    function animate() {
        updateFrostReveal();
        drawFrostOverlay();
        calculateRevealPercentage();
        updateMultiplierDisplay();

        frostState.animationId = requestAnimationFrame(animate);
    }
    animate();
}

function updateFrostReveal() {
    const now = Date.now();

    // Track total reveal time when user is actively revealing
    if (frostState.activeTouches.size > 0) {
        if (frostState.lastAnimationTime > 0) {
            const deltaTime = now - frostState.lastAnimationTime;
            frostState.totalRevealTime += deltaTime;
        }
    }
    frostState.lastAnimationTime = now;

    // Update active touch radii based on hold duration
    for (const [id, touch] of frostState.activeTouches) {
        const elapsed = now - touch.startTime;
        const progress = Math.min(elapsed / frostState.revealDuration, 1);
        // Ease-out for smooth reveal
        const eased = 1 - Math.pow(1 - progress, 2);
        touch.currentRadius = eased * frostState.maxRevealRadius;
    }
}

function drawFrostOverlay() {
    const ctx = frostState.ctx;
    const canvas = frostState.canvas;
    const image = frostState.image;

    if (!ctx || !canvas || !image) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Create a slightly blurred background
    // We'll simulate frost by drawing a semi-transparent white overlay
    // The "revealed" areas will be clear

    // Save context state
    ctx.save();

    // Draw full frosted overlay
    ctx.fillStyle = 'rgba(220, 235, 250, 0.95)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add noise/frost texture pattern
    drawFrostTexture(ctx, canvas.width, canvas.height);

    // Clear revealed zones using composite operation
    ctx.globalCompositeOperation = 'destination-out';

    // Draw locked reveal zones
    for (const zone of frostState.revealZones) {
        drawRevealGradient(ctx, zone.x, zone.y, zone.radius);
    }

    // Draw active touch reveal zones
    for (const [id, touch] of frostState.activeTouches) {
        if (touch.currentRadius > 0) {
            drawRevealGradient(ctx, touch.x, touch.y, touch.currentRadius);
        }
    }

    ctx.restore();
}

function drawFrostTexture(ctx, width, height) {
    // Create heavy frost texture that significantly obscures the image

    // Layer 1: Dense white dots for primary frost
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    const dotCount = Math.floor((width * height) / 100);  // Much denser
    for (let i = 0; i < dotCount; i++) {
        const x = (i * 7919) % width;
        const y = (i * 104729) % height;
        const size = ((i * 31) % 4) + 1;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    }

    // Layer 2: Larger semi-transparent blobs for blur effect
    ctx.fillStyle = 'rgba(230, 240, 250, 0.4)';
    const blobCount = Math.floor((width * height) / 800);
    for (let i = 0; i < blobCount; i++) {
        const x = (i * 12347) % width;
        const y = (i * 56789) % height;
        const size = ((i * 17) % 8) + 4;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    }

    // Layer 3: Ice crystal pattern
    ctx.fillStyle = 'rgba(200, 220, 240, 0.3)';
    const crystalCount = Math.floor((width * height) / 1500);
    for (let i = 0; i < crystalCount; i++) {
        const x = (i * 31337) % width;
        const y = (i * 271828) % height;
        const size = ((i * 23) % 12) + 6;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawRevealGradient(ctx, x, y, radius) {
    // Create radial gradient for smooth edges
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
    gradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.8)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function calculateRevealPercentage() {
    let totalArea = 0;

    // Sum the area of all locked reveal zones
    for (const zone of frostState.revealZones) {
        totalArea += Math.PI * zone.radius * zone.radius;
    }

    // Add currently-active (in-progress) touch areas
    for (const [id, touch] of frostState.activeTouches) {
        if (touch.currentRadius > 0) {
            totalArea += Math.PI * touch.currentRadius * touch.currentRadius;
        }
    }

    // Normalise against a FIXED reference area rather than the actual canvas size.
    // This ensures the multiplier penalty is the same regardless of image dimensions:
    // a small image won't be unfairly penalised just because each reveal circle
    // covers a larger fraction of its smaller canvas.
    state.frostRevealPercentage = Math.min((totalArea / frostState.REFERENCE_AREA) * 100, 100);
}

function getScoreMultiplier() {
    // Grace period: first 4 seconds of revealing = 100% multiplier
    // After grace period: 3x faster penalty based on reveal percentage
    // Formula: 100% reveal after grace = 20% score multiplier (minimum)

    if (frostState.totalRevealTime <= frostState.gracePeriod) {
        // Within grace period - always 100%
        return 100;
    }

    // After grace period: 3x the original rate (original was 0.8, now 2.4)
    const multiplier = 100 - (state.frostRevealPercentage * 2.4);
    return Math.max(multiplier, 20);
}

function updateMultiplierDisplay() {
    const multiplierEl = document.getElementById('frost-multiplier');
    const valueEl = multiplierEl?.querySelector('.multiplier-value');

    if (!multiplierEl || !valueEl) return;

    const multiplier = Math.round(getScoreMultiplier());
    valueEl.textContent = `${multiplier}%`;

    // Update color class based on value
    multiplierEl.classList.remove('high', 'medium', 'low');
    if (multiplier >= 70) {
        multiplierEl.classList.add('high');
    } else if (multiplier >= 40) {
        multiplierEl.classList.add('medium');
    } else {
        multiplierEl.classList.add('low');
    }
}

// ===========================
// DAILY CHALLENGE TIME ATTACK
// ===========================

const DAILY_GRACE_PERIOD_MS = 5000; // 5-second grace period before penalty starts
const DAILY_PENALTY_RATE    = 5;    // % per second deducted after grace period
const DAILY_MIN_MULTIPLIER  = 20;   // Minimum score multiplier % (floor)

function getDailyTimeMultiplier() {
    if (!state.dailyRoundStartTime) return 100;
    const elapsed = Date.now() - state.dailyRoundStartTime;
    if (elapsed <= DAILY_GRACE_PERIOD_MS) return 100;
    const secondsAfterGrace = (elapsed - DAILY_GRACE_PERIOD_MS) / 1000;
    return Math.max(100 - secondsAfterGrace * DAILY_PENALTY_RATE, DAILY_MIN_MULTIPLIER);
}

function startDailyTimer() {
    if (!state.isDailyMode) return;
    stopDailyTimer(); // Clear any leftover from a previous round

    state.dailyRoundStartTime = Date.now();
    state.dailyTimeMultiplier = 100;

    const timerEl    = document.getElementById('daily-timer');
    const timerValue = document.getElementById('daily-timer-value');
    const timerLabel = document.getElementById('daily-timer-label');
    if (!timerEl || !timerValue || !timerLabel) return;

    timerEl.classList.remove('hidden');
    let hasTransitioned = false;

    state.dailyTimerInterval = setInterval(() => {
        const elapsed = Date.now() - state.dailyRoundStartTime;
        const inGrace = elapsed < DAILY_GRACE_PERIOD_MS;

        if (inGrace) {
            // Grace period: show countdown
            const secondsLeft = Math.ceil((DAILY_GRACE_PERIOD_MS - elapsed) / 1000);
            timerValue.textContent = secondsLeft;
            timerLabel.textContent = 'GO IN';
            timerEl.className = 'daily-timer grace';
            hasTransitioned = false;
        } else {
            // Penalty phase: show live multiplier
            if (!hasTransitioned) {
                timerEl.classList.add('transition-flash');
                setTimeout(() => timerEl.classList.remove('transition-flash'), 450);
                hasTransitioned = true;
            }
            const multiplier = getDailyTimeMultiplier();
            state.dailyTimeMultiplier = multiplier;
            timerValue.textContent = `${Math.round(multiplier)}%`;
            timerLabel.textContent = 'SCORE';
            timerEl.className = 'daily-timer';
            if (multiplier >= 70)      timerEl.classList.add('high');
            else if (multiplier >= 40) timerEl.classList.add('medium');
            else                       timerEl.classList.add('low');
        }
    }, 100);
}

function stopDailyTimer() {
    // Capture the current multiplier BEFORE nulling the start time
    if (state.dailyRoundStartTime) {
        state.dailyTimeMultiplier = Math.round(getDailyTimeMultiplier());
    }
    if (state.dailyTimerInterval) {
        clearInterval(state.dailyTimerInterval);
        state.dailyTimerInterval = null;
    }
    state.dailyRoundStartTime = null;
    const timerEl = document.getElementById('daily-timer');
    if (timerEl) timerEl.classList.add('hidden');
}

// Image Pinch-Zoom System
let imageZoomState = {
    scale: 1,
    translateX: 0,
    translateY: 0,
    startDistance: 0,
    startScale: 1,
    startTranslateX: 0,
    startTranslateY: 0,
    startCenterX: 0,
    startCenterY: 0,
    isPinching: false,
    isPanning: false,
    lastTouchX: 0,
    lastTouchY: 0,
    isMouseDragging: false,
    lastMouseX: 0,
    lastMouseY: 0
};

function initImageZoom() {
    const container = document.getElementById('image-zoom-container');
    const image = document.getElementById('equipment-image');

    if (!container || !image) return;

    // Touch events for pinch-zoom and pan
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: false });
    container.addEventListener('touchcancel', handleTouchEnd, { passive: false });

    // Zoom button controls
    const zoomInBtn = document.getElementById('zoom-in-btn');
    const zoomOutBtn = document.getElementById('zoom-out-btn');

    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => zoomImageByButton(1.5));
    }
    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => zoomImageByButton(0.67));
    }

    // Double-tap to reset zoom
    let lastTap = 0;
    container.addEventListener('touchend', (e) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        if (tapLength < 300 && tapLength > 0 && e.changedTouches.length === 1) {
            // Double tap - reset zoom
            resetImageZoom();
            e.preventDefault();
        }
        lastTap = currentTime;
    });

    // Mouse events for panning when zoomed
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseUp);

    // Double-click to reset zoom
    container.addEventListener('dblclick', (e) => {
        resetImageZoom();
        e.preventDefault();
    });
}

function handleTouchStart(e) {
    const image = document.getElementById('equipment-image');
    if (!image) return;

    if (e.touches.length === 2) {
        // Pinch gesture start
        e.preventDefault();
        imageZoomState.isPinching = true;
        imageZoomState.isPanning = false;
        imageZoomState.startDistance = getTouchDistance(e.touches);
        imageZoomState.startScale = imageZoomState.scale;

        // Calculate center point of the pinch
        const center = getTouchCenter(e.touches);
        imageZoomState.startCenterX = center.x;
        imageZoomState.startCenterY = center.y;
        imageZoomState.startTranslateX = imageZoomState.translateX;
        imageZoomState.startTranslateY = imageZoomState.translateY;
    } else if (e.touches.length === 1 && imageZoomState.scale > 1) {
        // Single touch pan (only when zoomed in)
        imageZoomState.isPanning = true;
        imageZoomState.isPinching = false;
        imageZoomState.lastTouchX = e.touches[0].clientX;
        imageZoomState.lastTouchY = e.touches[0].clientY;
        imageZoomState.startTranslateX = imageZoomState.translateX;
        imageZoomState.startTranslateY = imageZoomState.translateY;
    }
}

function handleTouchMove(e) {
    const image = document.getElementById('equipment-image');
    const container = document.getElementById('image-zoom-container');
    if (!image || !container) return;

    if (imageZoomState.isPinching && e.touches.length === 2) {
        e.preventDefault();

        // Calculate new scale
        const currentDistance = getTouchDistance(e.touches);
        const scaleChange = currentDistance / imageZoomState.startDistance;
        let newScale = imageZoomState.startScale * scaleChange;

        // Clamp scale between 1 and 5
        newScale = Math.max(1, Math.min(5, newScale));

        // Calculate new center
        const center = getTouchCenter(e.touches);

        // Only apply translation if scale > 1
        if (newScale > 1) {
            // Calculate how much the scale changed
            const scaleRatio = newScale / imageZoomState.startScale;

            // Adjust translation to zoom toward pinch center
            const containerRect = container.getBoundingClientRect();
            const containerCenterX = containerRect.width / 2;
            const containerCenterY = containerRect.height / 2;

            const pinchOffsetX = imageZoomState.startCenterX - containerRect.left - containerCenterX;
            const pinchOffsetY = imageZoomState.startCenterY - containerRect.top - containerCenterY;

            imageZoomState.translateX = imageZoomState.startTranslateX - pinchOffsetX * (scaleRatio - 1);
            imageZoomState.translateY = imageZoomState.startTranslateY - pinchOffsetY * (scaleRatio - 1);
        }

        imageZoomState.scale = newScale;

        // Apply bounds
        applyZoomBounds(container, image);
        applyImageTransform(image);

    } else if (imageZoomState.isPanning && e.touches.length === 1 && imageZoomState.scale > 1) {
        e.preventDefault();

        const touch = e.touches[0];
        const deltaX = touch.clientX - imageZoomState.lastTouchX;
        const deltaY = touch.clientY - imageZoomState.lastTouchY;

        imageZoomState.translateX += deltaX;
        imageZoomState.translateY += deltaY;

        imageZoomState.lastTouchX = touch.clientX;
        imageZoomState.lastTouchY = touch.clientY;

        // Apply bounds
        applyZoomBounds(container, image);
        applyImageTransform(image);
    }
}

function handleTouchEnd(e) {
    if (e.touches.length === 0) {
        imageZoomState.isPinching = false;
        imageZoomState.isPanning = false;
    } else if (e.touches.length === 1) {
        // Transitioned from pinch to single finger - setup for pan
        imageZoomState.isPinching = false;
        if (imageZoomState.scale > 1) {
            imageZoomState.isPanning = true;
            imageZoomState.lastTouchX = e.touches[0].clientX;
            imageZoomState.lastTouchY = e.touches[0].clientY;
        }
    }

    // If scale is close to 1, snap back to 1
    if (imageZoomState.scale < 1.05) {
        resetImageZoom();
    }
}

function handleMouseDown(e) {
    if (imageZoomState.scale > 1) {
        e.preventDefault();
        imageZoomState.isMouseDragging = true;
        imageZoomState.lastMouseX = e.clientX;
        imageZoomState.lastMouseY = e.clientY;

        // Update cursor style
        const container = document.getElementById('image-zoom-container');
        if (container) container.style.cursor = 'grabbing';
    }
}

function handleMouseMove(e) {
    if (!imageZoomState.isMouseDragging || imageZoomState.scale <= 1) return;

    e.preventDefault();

    const image = document.getElementById('equipment-image');
    const container = document.getElementById('image-zoom-container');
    if (!image || !container) return;

    const deltaX = e.clientX - imageZoomState.lastMouseX;
    const deltaY = e.clientY - imageZoomState.lastMouseY;

    imageZoomState.translateX += deltaX;
    imageZoomState.translateY += deltaY;

    imageZoomState.lastMouseX = e.clientX;
    imageZoomState.lastMouseY = e.clientY;

    // Apply bounds and transform
    applyZoomBounds(container, image);
    applyImageTransform(image);
}

function handleMouseUp(e) {
    if (imageZoomState.isMouseDragging) {
        imageZoomState.isMouseDragging = false;

        // Reset cursor style
        const container = document.getElementById('image-zoom-container');
        if (container) {
            container.style.cursor = imageZoomState.scale > 1 ? 'grab' : 'default';
        }
    }
}

function getTouchDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

function getTouchCenter(touches) {
    return {
        x: (touches[0].clientX + touches[1].clientX) / 2,
        y: (touches[0].clientY + touches[1].clientY) / 2
    };
}

function applyZoomBounds(container, image) {
    if (imageZoomState.scale <= 1) {
        imageZoomState.translateX = 0;
        imageZoomState.translateY = 0;
        return;
    }

    const containerRect = container.getBoundingClientRect();
    const imageWidth = image.offsetWidth * imageZoomState.scale;
    const imageHeight = image.offsetHeight * imageZoomState.scale;

    // Calculate max translation values to keep image within container
    const maxTranslateX = Math.max(0, (imageWidth - containerRect.width) / 2);
    const maxTranslateY = Math.max(0, (imageHeight - containerRect.height) / 2);

    // Clamp translation
    imageZoomState.translateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, imageZoomState.translateX));
    imageZoomState.translateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, imageZoomState.translateY));
}

function applyImageTransform(image) {
    image.style.transform = `scale(${imageZoomState.scale}) translate(${imageZoomState.translateX / imageZoomState.scale}px, ${imageZoomState.translateY / imageZoomState.scale}px)`;
}

function resetImageZoom() {
    const image = document.getElementById('equipment-image');
    const container = document.getElementById('image-zoom-container');
    imageZoomState.scale = 1;
    imageZoomState.translateX = 0;
    imageZoomState.translateY = 0;
    imageZoomState.isPinching = false;
    imageZoomState.isPanning = false;
    imageZoomState.isMouseDragging = false;
    if (image) {
        image.style.transform = 'scale(1) translate(0px, 0px)';
    }
    if (container) {
        container.style.cursor = 'default';
    }
}

function zoomImageByButton(multiplier) {
    const image = document.getElementById('equipment-image');
    const container = document.getElementById('image-zoom-container');
    if (!image || !container) return;

    // Calculate new scale
    let newScale = imageZoomState.scale * multiplier;

    // Clamp scale between 1 and 5
    newScale = Math.max(1, Math.min(5, newScale));

    // If zooming out to 1x, reset translation
    if (newScale <= 1) {
        resetImageZoom();
        return;
    }

    imageZoomState.scale = newScale;

    // Apply bounds and transform
    applyZoomBounds(container, image);
    applyImageTransform(image);

    // Update cursor to indicate panning is available
    container.style.cursor = 'grab';
}

// Map Logic & Data
function initMap() {
    if (state.map) return;

    state.map = L.map('map', {
        center: [20, 0],
        zoom: 2,
        minZoom: 2,
        maxBounds: [[-90, -180], [90, 180]]
    });

    state.bgLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(state.map);

    state.map.on('click', (e) => handleMapInteraction(e, null));

    loadCountryData();
}

async function loadCountryData() {
    if (window.countryBoundaryData) {
        processGeoJSON(window.countryBoundaryData);
    } else {
        try {
            const response = await fetch('assets/countries.geo.json');
            const data = await response.json();
            processGeoJSON(data);
        } catch (e) {
            console.error("Failed to load country data:", e);
            // Fallback: Try to use the pre-loaded global valid if fetch failed 
            // (already checked above, but valid for debugging flow)
            alert("Map data failed to load. Please ensure assets/geo-data.js exists.");
        }
    }
}

function processGeoJSON(data) {
    state.geoJsonLayer = L.geoJSON(data, {
        style: {
            fillColor: '#00ff88',
            weight: 1,
            opacity: 0.2,       // Visible borders
            color: '#00ff88',
            fillOpacity: 0
        },
        onEachFeature: onEachFeature
    }).addTo(state.map);

    state.mapDataLoaded = true;
    console.log(`GeoJSON loaded: ${data.features.length} countries.`);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: (e) => {
            // Stop event from propagating to the map (otherwise map click overrides with null)
            L.DomEvent.stopPropagation(e);
            handleMapInteraction(e, feature.properties.name);
        }
    });
}

function highlightFeature(e) {
    const layer = e.target;

    layer.setStyle({
        weight: 2,
        color: '#00ff88',
        opacity: 1,
        fillOpacity: 0.3
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    state.hoveredCountry = layer.feature.properties.name;
    // Show tool tip or status?
    // console.log("Hover: " + state.hoveredCountry);
}

function resetHighlight(e) {
    state.geoJsonLayer.resetStyle(e.target);
    state.hoveredCountry = null;
}

function handleMapInteraction(e, countryName) {
    if (screens.game.classList.contains('hidden')) return;

    const { lat, lng } = e.latlng;
    state.userGuess = { lat, lng };

    // Prioritize specific polygon click
    state.selectedCountry = countryName;

    if (state.marker) {
        state.marker.setLatLng([lat, lng]);
    } else {
        state.marker = L.marker([lat, lng]).addTo(state.map);
    }

    console.log(`Selection: ${lat.toFixed(2)}, ${lng.toFixed(2)} | Country: ${state.selectedCountry || "None"}`);
}

// Game Logic
// European countries for filtering
const EUROPEAN_COUNTRIES = [
    'Germany', 'France', 'United Kingdom', 'Italy', 'Spain', 'Sweden', 'Poland',
    'Netherlands', 'Belgium', 'Czech Republic', 'Austria', 'Switzerland', 'Norway',
    'Finland', 'Denmark', 'Hungary', 'Portugal', 'Greece', 'Romania', 'Bulgaria',
    'Ukraine', 'Serbia', 'Croatia', 'Slovakia', 'Ireland', 'Lithuania', 'Latvia',
    'Estonia', 'Slovenia', 'Luxembourg', 'Turkey', 'Israel'
];

// Game options modal state
let gameFilters = {
    origin: 'all',
    type: 'all'
};

function showGameOptionsModal() {
    const modal = document.getElementById('game-options-modal');
    // Reset filters to default
    document.getElementById('game-origin-filter').value = 'all';
    document.getElementById('game-type-filter').value = 'all';
    gameFilters.origin = 'all';
    gameFilters.type = 'all';
    modal.classList.remove('hidden');
}

function hideGameOptionsModal() {
    document.getElementById('game-options-modal').classList.add('hidden');
}

function setupGameOptionsModal() {
    // Begin button - start game with filters
    document.getElementById('game-begin-btn').addEventListener('click', () => {
        gameFilters.origin = document.getElementById('game-origin-filter').value;
        gameFilters.type = document.getElementById('game-type-filter').value;

        // Check Hard Mode toggle
        const hardModeToggle = document.getElementById('hard-mode-toggle');
        state.isHardMode = hardModeToggle ? hardModeToggle.checked : false;
        console.log('DEBUG: Hard Mode toggle checked:', hardModeToggle?.checked, 'state.isHardMode:', state.isHardMode);

        hideGameOptionsModal();
        startGame(false, gameFilters);
    });

    // Cancel button - go back
    document.getElementById('game-options-cancel-btn').addEventListener('click', hideGameOptionsModal);

    // Close on background click
    document.getElementById('game-options-modal').addEventListener('click', (e) => {
        if (e.target.id === 'game-options-modal') {
            hideGameOptionsModal();
        }
    });
}

function getFilteredEquipment(filters) {
    let filtered = [...equipmentData];

    // Helper function to check if an origin matches a target list
    // Handles multi-origin entries like "United Kingdom / France"
    function originMatchesAny(origin, targetCountries) {
        if (!origin) return false;
        // Split by " / " to handle multi-origin equipment
        const origins = origin.split(' / ').map(o => o.trim());
        return origins.some(o => targetCountries.includes(o));
    }

    function originIsUSOrEurope(origin) {
        if (!origin) return false;
        const origins = origin.split(' / ').map(o => o.trim());
        return origins.some(o => o === 'United States' || EUROPEAN_COUNTRIES.includes(o));
    }

    function originIsRussiaChinaIran(origin) {
        if (!origin) return false;
        const origins = origin.split(' / ').map(o => o.trim());
        return origins.some(o => o === 'Russia' || o === 'China' || o === 'Iran');
    }

    // Filter by origin
    if (filters.origin !== 'all') {
        if (filters.origin === 'america-europe') {
            // America & Europe
            filtered = filtered.filter(eq => eq && originIsUSOrEurope(eq.origin));
        } else if (filters.origin === 'russia-china-iran') {
            // Russia, China & Iran
            filtered = filtered.filter(eq => eq && originIsRussiaChinaIran(eq.origin));
        } else if (filters.origin === 'rest-of-world') {
            // Rest of World (not America, Europe, Russia, China, or Iran)
            filtered = filtered.filter(eq =>
                eq && !originIsUSOrEurope(eq.origin) && !originIsRussiaChinaIran(eq.origin)
            );
        }
    }

    // Filter by type
    if (filters.type !== 'all') {
        if (filters.type === 'air') {
            filtered = filtered.filter(eq =>
                eq && eq.type && (
                    eq.type.includes('Aircraft') ||
                    eq.type.includes('Helicopter') ||
                    eq.type.includes('Bomber') ||
                    eq.type.includes('Gunship') ||
                    eq.type.includes('Tiltrotor')
                )
            );
        } else if (filters.type === 'sea') {
            filtered = filtered.filter(eq =>
                eq && eq.type === 'Naval Vessel'
            );
        } else if (filters.type === 'land') {
            filtered = filtered.filter(eq =>
                eq && eq.type && (
                    !eq.type.includes('Aircraft') &&
                    !eq.type.includes('Helicopter') &&
                    !eq.type.includes('Bomber') &&
                    !eq.type.includes('Gunship') &&
                    !eq.type.includes('Tiltrotor') &&
                    eq.type !== 'Naval Vessel'
                )
            );
        }
    }

    return filtered;
}

function startGame(isDailyMode = false, filters = null) {
    stopDailyTimer();
    stopSpeedrunTimer();
    state.dailyTimeMultiplier = 100;
    state.score = 0;
    state.round = 1;
    state.maxRounds = 5;
    state.userGuess = null;
    state.selectedCountry = null;
    state.roundResults = [];
    state.currentRoundResult = null;
    state.isDailyMode = isDailyMode;
    // Speedrun state reset
    state.speedrunResults = [];
    state.consecutiveCorrect = 0;
    state.comboMultiplier = 1.0;
    state.bestCombo = 0;
    state.targetsCleared = 0;
    state.speedrunScoreProgression = [];

    if (isDailyMode) {
        state.isHardMode = false;
        state.maxRounds = 50;
        state.gameData = getDailyEquipment();
    } else if (filters) {
        let filteredData = getFilteredEquipment(filters);
        if (filteredData.length === 0) { alert('No equipment matches your filters. Try different options.'); return; }
        state.maxRounds = Math.min(filteredData.length, 5);
        state.gameData = shuffleArray(filteredData).slice(0, state.maxRounds);
    } else {
        state.gameData = shuffleArray(equipmentData).slice(0, state.maxRounds);
    }

    switchScreen('game');
    loadRound();

    if (isDailyMode) {
        const roundContainer = document.querySelector('.round-container');
        if (roundContainer) roundContainer.style.display = 'none';
        updateComboDisplay();
        startSpeedrunTimer();
    } else {
        const roundContainer = document.querySelector('.round-container');
        if (roundContainer) roundContainer.style.display = '';
        hideComboDisplay();
    }

    requestAnimationFrame(() => { state.map.invalidateSize(); });
}


function loadRound() {
    resetMapVisuals();
    resetImageZoom(); // Reset zoom state for new round

    // Hide frost overlay from previous round (will be re-shown after image loads if Hard Mode)
    hideFrostOverlay();
    // Stop daily timer from previous round (new one starts when image loads)
    stopDailyTimer();
    state.frostRevealPercentage = 0;

    state.currentEquipment = state.gameData[state.round - 1];
    state.userGuess = null;
    state.selectedCountry = null;
    state.guessSubmitted = false;

    dom.score.textContent = state.score;
    // Update round label and value using separate spans — never replaces innerHTML
    const roundLabel = document.getElementById('round-label');
    if (state.isDailyMode) {
        if (roundLabel) roundLabel.textContent = 'CLEARED: ';
        dom.round.textContent = state.targetsCleared;
    } else {
        if (roundLabel) roundLabel.textContent = 'ROUND: ';
        dom.round.textContent = `${state.round}/${state.maxRounds}`;
    }

    // Get random image if equipment has multiple images (support both old 'image' and new 'images' format)
    let imageSrc;
    if (state.currentEquipment.images && state.currentEquipment.images.length > 0) {
        // Randomly select one image from the array
        const randomIndex = Math.floor(Math.random() * state.currentEquipment.images.length);
        imageSrc = state.currentEquipment.images[randomIndex];
        state.currentImageIndex = randomIndex;
    } else {
        // Fallback to single image property
        imageSrc = state.currentEquipment.image;
        state.currentImageIndex = 0;
    }

    dom.image.src = imageSrc;
    dom.thumbnailImage.src = imageSrc;

    // Also set the result preview image for the result screen
    const resultPreviewImg = document.getElementById('result-preview-img');
    if (resultPreviewImg) {
        resultPreviewImg.src = imageSrc;
    }

    // Show popup, hide thumbnail
    showEquipmentPopup();
    dom.equipmentThumbnail.classList.add('hidden');

    const loader = document.querySelector('.loader');
    loader.classList.remove('hidden');
    loader.textContent = "ACCESSING ARCHIVE...";
    dom.image.classList.remove('loaded');

    // In Hard Mode, hide the image immediately to prevent a flash of the clear image
    // before the frost overlay can render on top
    if (state.isHardMode) {
        dom.image.style.opacity = '0';
    } else {
        dom.image.style.opacity = '';
    }

    dom.image.onload = () => {
        loader.classList.add('hidden');
        dom.image.classList.add('loaded');

        // Show frost overlay after image loads if Hard Mode is enabled
        if (state.isHardMode) {
            // Draw frost first, then reveal the (now covered) image
            showFrostOverlay();
            // Small delay to ensure frost canvas is painted before showing image
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    dom.image.style.opacity = '';
                });
            });
        }

        // Start per-round daily timer only in legacy mode (not speedrun)
        if (state.isDailyMode) {
            // Speedrun uses global timer, not per-round timer — do nothing here
        }
    };

    dom.image.onerror = () => {
        console.warn("Image switching to fallback.");
        dom.image.src = `https://placehold.co/600x400/1a1a1a/00ff88?text=${encodeURIComponent(state.currentEquipment.name)}`;
        dom.image.onerror = null;
        loader.classList.add('hidden');
        dom.image.classList.add('loaded');
    };

    state.map.setView([20, 0], 2);
}

function submitGuess() {
    if (!state.userGuess) {
        alert("Close the equipment image using the X icon and select a location on the map first!");
        return;
    }

    // Prevent double-click from awarding points multiple times
    if (state.guessSubmitted) return;
    state.guessSubmitted = true;

    const equipment = state.currentEquipment;
    const actual = { lat: equipment.coords[0], lng: equipment.coords[1] };

    let isCorrectCountry = false;

    if (state.selectedCountry) {
        const aliases = COUNTRY_ALIASES[equipment.origin] || [equipment.origin];
        isCorrectCountry = aliases.some(alias =>
            state.selectedCountry.toLowerCase() === alias.toLowerCase()
        );
    }

    let points = 0;
    const distanceKm = calculateDistance(
        state.userGuess.lat, state.userGuess.lng,
        actual.lat, actual.lng
    );

    // Award max points ONLY if correct country is clicked
    if (isCorrectCountry) {
        points = 5000;
        console.log("Country Verified via Leaflet Layer! Max Points.");
    } else {
        // Use distance-based scoring for all other clicks
        points = calculateScore(distanceKm);
        console.log(`Mismatch. Selected: ${state.selectedCountry}, Target: ${equipment.origin}, Distance: ${Math.round(distanceKm)}km`);
    }

    // ── SPEEDRUN PATH (Daily Mode) ───────────────────────────────────────────
    if (state.isDailyMode) {
        // Combo multiplier: 4+ consecutive correct = 1.5x (capped)
        if (isCorrectCountry) {
            state.consecutiveCorrect++;
            if (state.consecutiveCorrect > state.bestCombo) state.bestCombo = state.consecutiveCorrect;
            if (state.consecutiveCorrect >= 4) { state.comboMultiplier = 1.5; }
        } else {
            state.consecutiveCorrect = 0;
            state.comboMultiplier = 1.0;
        }
        // Apply combo to points
        if (state.comboMultiplier > 1.0) points = Math.round(points * state.comboMultiplier);

        state.score += points;
        state.targetsCleared++;
        state.speedrunScoreProgression.push(state.score);

        // Log for replay reel (timestamp in ms since run start for half-split analysis)
        state.speedrunResults.push({
            name: equipment.name,
            imageSrc: dom.image.src,
            correct: isCorrectCountry,
            points,
            origin: equipment.origin,
            ts: 60 - state.speedrunTimeRemaining   // seconds elapsed at time of guess
        });

        dom.score.textContent = state.score;
        updateComboDisplay();

        // Time penalty for wrong country (-3 seconds)
        const penaltySecs = isCorrectCountry ? 0 : 3;
        if (!isCorrectCountry) {
            if (isCorrectCountry) playCorrectSound(); else playIncorrectSound();
            addSpeedrunTimePenalty(penaltySecs);
        } else {
            playCorrectSound();
        }

        showSpeedrunFeedback(isCorrectCountry, points, penaltySecs);
        preloadNextRoundImage();

        // Auto-advance after feedback animation
        setTimeout(() => {
            if (state.speedrunTimeRemaining > 0 && state.round < state.maxRounds) {
                state.round++;
                loadRound();
            } else if (state.speedrunTimeRemaining <= 0) {
                // Timer already called endSpeedrun, nothing to do
            } else {
                // Ran out of items (all 50 done)
                endSpeedrun();
            }
        }, 1550);
        return;
    }

    // ── NORMAL / HARD MODE PATH ──────────────────────────────────────────────
    // Apply Hard Mode multiplier if enabled
    if (state.isHardMode) {
        const multiplier = getScoreMultiplier() / 100;
        points = Math.round(points * multiplier);
        hideFrostOverlay();
    }

    state.score += points;

    state.currentRoundResult = {
        round: state.round,
        equipment: state.currentEquipment.name,
        origin: state.currentEquipment.origin,
        type: state.currentEquipment.type,
        locationCorrect: isCorrectCountry,
        locationPoints: points,
        bonusCorrect: false,
        bonusPoints: 0,
        totalPoints: points
    };

    showRoundResult(distanceKm, points, actual, state.selectedCountry || "Unknown Territory", isCorrectCountry);
}

// Silently fetch the next round's image in the background while the user
// reads their round result, so the browser cache has it ready for loadRound().
function preloadNextRoundImage() {
    const nextIndex = state.round; // rounds are 1-based; index = round (i.e. the *next* item)
    if (!state.gameData || nextIndex >= state.gameData.length) return;
    const nextEquipment = state.gameData[nextIndex];
    if (!nextEquipment) return;

    // Resolve the image src the same way loadRound() does
    let src;
    if (nextEquipment.images && nextEquipment.images.length > 0) {
        // Pick a random image — same logic as loadRound
        src = nextEquipment.images[Math.floor(Math.random() * nextEquipment.images.length)];
    } else {
        src = nextEquipment.image;
    }
    if (!src) return;

    const img = new Image();
    img.src = src; // browser quietly fetches and caches; no DOM attachment needed
}

function showRoundResult(distance, points, actual, detectedName, isCorrect) {
    // Kick off background preload of the next round's image immediately,
    // so by the time the user clicks "Next Target" it is already cached.
    preloadNextRoundImage();

    // Play sound based on whether location guess was correct
    if (isCorrect) {
        playCorrectSound();
    } else {
        playIncorrectSound();
    }

    if (state.actualMarker) state.map.removeLayer(state.actualMarker);

    const greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    state.actualMarker = L.marker([actual.lat, actual.lng], { icon: greenIcon })
        .addTo(state.map)
        .bindPopup(`<b>Origin: ${state.currentEquipment.origin}</b>`)
        .openPopup();

    if (!isCorrect) {
        state.line = L.polyline([
            [state.userGuess.lat, state.userGuess.lng],
            [actual.lat, actual.lng]
        ], {
            color: '#ff0055',
            weight: 3,
            opacity: 0.7,
            dashArray: '10, 10'
        }).addTo(state.map);
    }

    state.map.fitBounds([
        [state.userGuess.lat, state.userGuess.lng],
        [actual.lat, actual.lng]
    ], { padding: [50, 50] });

    // Prepend country flag img to the origin display
    const originFlag = getCountryFlagHTML(state.currentEquipment.origin);
    dom.resultDetails.origin.innerHTML = originFlag
        ? `${originFlag} ${state.currentEquipment.origin}`
        : state.currentEquipment.origin;

    const resultTitle = document.getElementById('result-title');

    if (isCorrect) {
        dom.resultDetails.distance.textContent = "Correct Country";
        resultTitle.textContent = "TARGET NEUTRALIZED";
        resultTitle.style.color = "#00ff88";
    } else {
        dom.resultDetails.distance.textContent = `${Math.round(distance)} km off`;
        resultTitle.textContent = "TARGET MISSED";
        resultTitle.style.color = "#ffaa00";
    }

    dom.resultDetails.points.textContent = points;
    dom.score.textContent = state.score;

    // Show or hide the speed modifier on the result screen
    const dailyPenaltyEl = document.getElementById('daily-time-penalty');
    const dailyMultiplierValueEl = document.getElementById('daily-multiplier-value');
    if (dailyPenaltyEl && dailyMultiplierValueEl) {
        if (state.isDailyMode && state.dailyTimeMultiplier < 100) {
            const mult = state.dailyTimeMultiplier;
            dailyMultiplierValueEl.textContent = `${mult}%`;
            dailyMultiplierValueEl.className = mult >= 70 ? 'multiplier-high' : mult >= 40 ? 'multiplier-medium' : 'multiplier-low';
            dailyPenaltyEl.classList.remove('hidden');
        } else {
            dailyPenaltyEl.classList.add('hidden');
        }
    }

    // Reset bonus section for new round
    state.bonusSubmitted = false;
    dom.bonus.section.classList.remove('disabled');
    dom.bonus.result.textContent = '';
    dom.bonus.result.className = 'bonus-result';

    // Reset trivia section
    state.triviaSubmitted = false;
    state.currentTriviaQuestion = null;
    dom.trivia.section.classList.add('hidden');
    dom.trivia.section.classList.remove('disabled');
    dom.trivia.result.textContent = '';
    dom.trivia.result.className = 'bonus-result';

    // Update bonus points label based on mode (Hard Mode: 2500, Normal: 5000)
    const bonusPtsLabel = document.getElementById('bonus-pts-label');
    if (bonusPtsLabel) {
        bonusPtsLabel.textContent = state.isHardMode ? '+2500 pts' : '+5000 pts';
    }

    // Hide summary section initially
    dom.summary.section.classList.add('hidden');

    // Update button text based on round
    const nextBtn = document.getElementById('next-btn');
    if (state.round >= state.maxRounds) {
        nextBtn.textContent = 'RESULTS';
    } else {
        nextBtn.textContent = 'NEXT TARGET';
    }

    // Generate multiple choice options
    generateBonusChoices();

    setTimeout(() => {
        switchScreen('result');
    }, 1500);
}

function generateBonusChoices() {
    const correctName = state.currentEquipment.name;
    const currentType = state.currentEquipment.type;

    // Get equipment of the same type first (for better grouping)
    const sameTypeEquipment = equipmentData
        .filter(eq => eq.name !== correctName && eq.type === currentType)
        .sort(() => 0.5 - Math.random());

    // If not enough same-type equipment, add from other types
    const otherTypeEquipment = equipmentData
        .filter(eq => eq.name !== correctName && eq.type !== currentType)
        .sort(() => 0.5 - Math.random());

    // Prioritize same type, then fill with others if needed
    let wrongAnswers = [];
    if (sameTypeEquipment.length >= 3) {
        wrongAnswers = sameTypeEquipment.slice(0, 3).map(eq => eq.name);
    } else {
        wrongAnswers = [
            ...sameTypeEquipment.map(eq => eq.name),
            ...otherTypeEquipment.slice(0, 3 - sameTypeEquipment.length).map(eq => eq.name)
        ];
    }

    // Combine and shuffle all 4 options
    const allChoices = [correctName, ...wrongAnswers].sort(() => 0.5 - Math.random());

    // Clear existing choices
    dom.bonus.choices.innerHTML = '';

    // Create buttons for each choice
    allChoices.forEach(name => {
        const btn = document.createElement('button');
        btn.className = 'bonus-choice-btn';
        btn.textContent = name;
        btn.addEventListener('click', () => handleBonusChoice(btn, name, correctName));
        dom.bonus.choices.appendChild(btn);
    });
}

function handleBonusChoice(clickedBtn, selectedName, correctName) {
    if (state.bonusSubmitted) return;

    state.bonusSubmitted = true;
    dom.bonus.section.classList.add('disabled');

    const isCorrect = selectedName === correctName;

    // Highlight correct and incorrect answers
    const allBtns = dom.bonus.choices.querySelectorAll('.bonus-choice-btn');
    allBtns.forEach(btn => {
        if (btn.textContent === correctName) {
            btn.classList.add('correct');
        } else if (btn === clickedBtn && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    if (isCorrect) {
        playBonusCorrectSound();
        const bonusPoints = state.isHardMode ? 2500 : 5000;
        state.score += bonusPoints;
        dom.score.textContent = state.score;
        dom.bonus.result.textContent = `CORRECT! +${bonusPoints} bonus points!`;
        dom.bonus.result.className = 'bonus-result correct';

        // Update current round result with bonus
        if (state.currentRoundResult) {
            state.currentRoundResult.bonusCorrect = true;
            state.currentRoundResult.bonusPoints = bonusPoints;
            state.currentRoundResult.totalPoints += bonusPoints;
        }
    } else {
        playBonusIncorrectSound();
        dom.bonus.result.textContent = `INCORRECT! It was: ${correctName}`;
        dom.bonus.result.className = 'bonus-result incorrect';
    }

    // In Hard Mode: show trivia question next. In Normal Mode: show equipment profile.
    if (state.isHardMode) {
        // Don't save round result yet — trivia may still add points
        setTimeout(() => showTriviaQuestion(), 600);
    } else {
        // Save the round result now (Normal Mode — no trivia phase)
        if (state.currentRoundResult) {
            state.roundResults.push({ ...state.currentRoundResult });
            state.currentRoundResult = null;
        }
        showEquipmentSummary();
    }
}

// ── Hard Mode Trivia ──────────────────────────────────────────────────────

// Build a trivia question auto-generated from equipment data fields.
// Returns { questionText, correctAnswer, choices: [string x4] }  or null.
function generateTriviaQuestion(equipment) {
    const pool = [];  // candidate question-builders

    // 1. "Which country does NOT operate this equipment?"
    if (equipment.users && equipment.users.length >= 2) {
        pool.push(() => {
            // Reject aggregate/bulk entries like "100+ countries worldwide", "40+ countries", etc.
            // These are not real individual country names and make nonsensical answer choices.
            function isRealCountry(name) {
                return !/\d/.test(name) && !/\+/.test(name) && !/countries|nations|worldwide/i.test(name);
            }

            // Canonicalise country-name variants so the SAME country spelled two ways
            // (e.g. "UK"/"United Kingdom", "UAE"/"United Arab Emirates") is never treated
            // as two different countries. Without this the "does NOT operate" answer could
            // be a variant of a country that actually DOES operate the equipment.
            const COUNTRY_ALIASES = {
                'uk': 'United Kingdom',
                'u.k.': 'United Kingdom',
                'great britain': 'United Kingdom',
                'uae': 'United Arab Emirates',
                'u.a.e.': 'United Arab Emirates',
                'usa': 'United States',
                'u.s.': 'United States',
                'us': 'United States',
                'united states navy': 'United States',
                'republic of korea': 'South Korea',
                'rok': 'South Korea'
            };
            function canonCountry(name) {
                return COUNTRY_ALIASES[name.toLowerCase().trim()] || name;
            }

            // Wrong answers = actual named users of this equipment (pick up to 3, no aggregates).
            // Deduplicate by canonical name so two spellings of one country can't both appear.
            const seenWrong = new Set();
            const namedUsers = equipment.users.filter(u => {
                if (!isRealCountry(u)) return false;
                const c = canonCountry(u);
                if (seenWrong.has(c)) return false;
                seenWrong.add(c);
                return true;
            });
            if (namedUsers.length < 1) return null;
            const wrongAnswers = [...namedUsers]
                .sort(() => 0.5 - Math.random())
                .slice(0, 3);

            // Correct answer = a genuine non-user country (compared on canonical names so a
            // variant of an actual operator is never offered as the "doesn't operate" answer).
            const allUsers = new Set(equipment.users.map(canonCountry));
            const nonUsers = equipmentData
                .flatMap(eq => eq.users || [])
                .map(canonCountry)
                .filter(u => !allUsers.has(u) && isRealCountry(u));
            if (nonUsers.length === 0) return null;
            const correctAnswer = nonUsers[Math.floor(Math.random() * nonUsers.length)];

            // Need at least 1 wrong answer to make a valid question (correct + up to 3 wrongs)
            if (wrongAnswers.length < 1) return null;

            return {
                questionText: 'Which of these countries does NOT operate this equipment?',
                correctAnswer,
                choices: shuffle([correctAnswer, ...wrongAnswers])
            };
        });
    }


    // 2. Speed question — label varies by unit type (vehicle speed vs rate of fire)
    if (equipment.specs && equipment.specs.speed) {
        pool.push(() => {
            const correctAnswer = equipment.specs.speed;

            // Skip if the speed value is non-informative (N/A, Static, TBD, etc.)
            if (/^(n\/a|static|tbd|unknown|-|n\.a\.)$/i.test(correctAnswer.trim())) return null;

            // Classify the unit so we only compare like-for-like
            const isRateOfFire = /rounds|rpm|rds|cyclic|burst/i.test(correctAnswer);
            const isMach       = /mach/i.test(correctAnswer);
            const isKnots      = /knots?/i.test(correctAnswer);
            // Anything else (km/h, mph) = ground/vehicle speed

            // Helper: true if speedStr belongs to the same measurement category
            //         AND is a meaningful value (not N/A / Static / etc.)
            function isUsableAlternative(speedStr) {
                if (!speedStr) return false;
                if (/^(n\/a|static|tbd|unknown|-|n\.a\.)$/i.test(speedStr.trim())) return false;
                const rof  = /rounds|rpm|rds|cyclic|burst/i.test(speedStr);
                const mach = /mach/i.test(speedStr);
                const knot = /knots?/i.test(speedStr);
                if (isRateOfFire) return rof;
                if (isMach)       return mach;
                if (isKnots)      return knot;
                // vehicle speed: must NOT be rof/mach/knots and must contain a digit
                return !rof && !mach && !knot && /\d/.test(speedStr);
            }

            const questionText = isRateOfFire
                ? 'What is the rate of fire of this equipment?'
                : isMach
                    ? 'What is the maximum speed of this equipment?'
                    : 'What is the top speed of this equipment?';

            // For km/h ground speeds, bracket candidates to the same speed range
            // (sub-200 km/h vs 200+ km/h) so a slow APC is never paired with a jet speed.
            function extractKmh(speedStr) {
                if (!speedStr) return null;
                const m = speedStr.match(/(\d[\d,]*)/);
                return m ? parseFloat(m[1].replace(/,/g, '')) : null;
            }
            const isVehicleKmh = !isRateOfFire && !isMach && !isKnots;
            const correctKmh = isVehicleKmh ? extractKmh(correctAnswer) : null;
            const SPEED_BRACKET_THRESHOLD = 200; // km/h — below this = slow, above = fast

            // Collapse speed strings that DISPLAY the same value differently so two
            // visually-near-identical options can never both appear, e.g.
            //   "Mach 2" / "Mach 2.0" / "Mach 2+"        -> mach:2
            //   "30 knots" / "30+ knots" / "30 knots (submerged)" -> knots:30
            // Genuinely different values (Mach 2 vs 2.25, 59 vs 60 km/h) stay distinct.
            function speedKey(speedStr) {
                const s = speedStr.toLowerCase().replace(/,/g, '').replace(/\s+/g, ' ').trim();
                let m;
                if ((m = s.match(/mach\s*([\d.]+)/)))                 return 'mach:' + parseFloat(m[1]);
                if ((m = s.match(/([\d.]+)\s*\+?\s*knots?/)))         return 'knots:' + parseFloat(m[1]);
                if ((m = s.match(/([\d.]+)\s*(?:rounds|rpm|rds)/)))   return 'rof:' + parseFloat(m[1]);
                // Linear speed with an explicit unit: keep the unit so 200 m/s ≠ 200 km/h
                if ((m = s.match(/([\d.]+)\s*(km\/h|mph|m\/s)/)))     return 'spd:' + parseFloat(m[1]) + ':' + m[2];
                return s; // fallback: normalised string (original exact-ish behaviour)
            }

            // Draw wrong answers from equipment with a usable speed in the same category
            // AND (for km/h speeds) within the same speed bracket as the correct answer.
            // Greedily collect unique speed *keys* to prevent duplicate/near-duplicate buttons.
            const seenSpeeds = new Set([speedKey(correctAnswer)]);
            const others = [];
            const speedCandidates = equipmentData
                .filter(eq => {
                    if (eq.name === equipment.name) return false;
                    if (!eq.specs || !eq.specs.speed) return false;
                    if (eq.specs.speed === correctAnswer) return false;
                    if (!isUsableAlternative(eq.specs.speed)) return false;
                    // Apply bracket filter only for km/h vehicle speeds
                    if (isVehicleKmh && correctKmh !== null) {
                        const altKmh = extractKmh(eq.specs.speed);
                        if (altKmh === null) return false;
                        const correctFast = correctKmh >= SPEED_BRACKET_THRESHOLD;
                        const altFast    = altKmh    >= SPEED_BRACKET_THRESHOLD;
                        if (correctFast !== altFast) return false;
                    }
                    return true;
                })
                .sort(() => 0.5 - Math.random());
            for (const eq of speedCandidates) {
                if (others.length >= 3) break;
                const sKey = speedKey(eq.specs.speed);
                if (!seenSpeeds.has(sKey)) {
                    seenSpeeds.add(sKey);
                    others.push(eq.specs.speed);
                }
            }

            if (others.length < 3) return null;
            return {
                questionText,
                correctAnswer,
                choices: shuffle([correctAnswer, ...others])
            };
        });
    }

    // 3. "What is the primary armament?"
    if (equipment.specs && equipment.specs.armament) {
        pool.push(() => {
            const correctAnswer = equipment.specs.armament;

            // Normalise an armament string to its first meaningful token so we can
            // detect near-duplicates (e.g. "5.56x45mm NATO" vs "5.56×45mm NATO").
            function normaliseArmament(str) {
                return str
                    .toLowerCase()
                    .replace(/[×x]/g, 'x')   // unify × and x
                    .replace(/\s+/g, ' ')
                    .trim();
            }

            // Extract a "key token" that captures the *essential identity* of an
            // armament so visually-similar options (e.g. "5.56x45mm NATO" vs
            // "5.56x45mm" vs "5.56×45mm NATO") collapse to the SAME key and can
            // never both appear as answer choices.
            function keyToken(str) {
                const norm = normaliseArmament(str); // already lowercases and unifies ×→x

                // 1. Imperial named cartridges: ".50 BMG", ".338 Lapua", ".300 Win".
                //    (Checked first so ".50 BMG (12.7x99mm)" keys the same as ".50 BMG".)
                //    Requires a word boundary after 2–3 digits, so metric like
                //    "5.56x45mm" (".56x…") is NOT caught here.
                let m = norm.match(/\.(\d{2,3})\b/);
                if (m) return 'cal:.' + m[1];

                // 2. Metric cartridge "boreXcaseMM" with NO spaces, e.g. 5.56x45mm,
                //    7.62x51mm, 9x19mm. The no-space + trailing "mm" guard prevents
                //    quantity prefixes like "2x 30mm" (which have a space) matching.
                m = norm.match(/(\d+(?:\.\d+)?)x(\d+)mm/);
                if (m) return 'cal:' + m[1] + 'x' + m[2];

                // 3. Shotgun gauge, e.g. "12 gauge".
                m = norm.match(/(\d+)\s*gauge/);
                if (m) return 'gauge:' + m[1];

                // 4. Leading large-calibre gun bore (tanks/artillery/autocannon):
                //    "120mm…", "30mm…", "155mm…". Collapses "120mm M256" and
                //    "120mm L/55" to one key so two 120mm options can't co-appear.
                m = norm.match(/^(\d+(?:\.\d+)?)\s*mm\b/);
                if (m) return 'mm:' + m[1];

                // 5. Fallback: first comma/slash-separated chunk (original behaviour).
                return norm.split(/[,/]/)[0].trim();
            }

            const correctKey = keyToken(correctAnswer);

            // Skip N/A or clearly meaningless armament values
            if (/^(n\/a|none|unarmed|static|tbd|unknown|-)/i.test(correctAnswer.trim())) return null;

            // Draw candidates from ALL equipment (not just same type) so there
            // is a wide pool of visually distinct options.
            const candidates = equipmentData
                .filter(eq =>
                    eq.name !== equipment.name &&
                    eq.specs && eq.specs.armament &&
                    normaliseArmament(eq.specs.armament) !== normaliseArmament(correctAnswer) &&
                    !/^(n\/a|none|unarmed|static|tbd|unknown|-)/i.test(eq.specs.armament.trim())
                )
                .sort(() => 0.5 - Math.random());

            // Greedily pick 3 distractors, each with a key token different from
            // the correct answer AND from every already-chosen distractor.
            const chosenKeys = new Set([correctKey]);
            const others = [];
            for (const eq of candidates) {
                if (others.length >= 3) break;
                const tok = keyToken(eq.specs.armament);
                if (!chosenKeys.has(tok)) {
                    chosenKeys.add(tok);
                    others.push(eq.specs.armament);
                }
            }

            if (others.length < 3) return null;
            return {
                questionText: 'What is the primary armament of this equipment?',
                correctAnswer,
                choices: shuffle([correctAnswer, ...others])
            };
        });
    }

    // 4. "When did this equipment enter service?"
    if (equipment.inService) {
        pool.push(() => {
            const correctAnswer = equipment.inService;
            // Greedily collect unique inService years to prevent duplicate answer buttons
            // (many equipment entries can share the same service-entry year).
            const seenYears = new Set([correctAnswer]);
            const others = [];
            const yearCandidates = equipmentData
                .filter(eq => eq.name !== equipment.name && eq.inService && eq.inService !== correctAnswer)
                .sort(() => 0.5 - Math.random());
            for (const eq of yearCandidates) {
                if (others.length >= 3) break;
                if (!seenYears.has(eq.inService)) {
                    seenYears.add(eq.inService);
                    others.push(eq.inService);
                }
            }
            if (others.length < 3) return null;
            return {
                questionText: 'When did this equipment enter service?',
                correctAnswer,
                choices: shuffle([correctAnswer, ...others])
            };
        });
    }

    // Shuffle the candidate pool and return the first one that succeeds
    const shuffledPool = pool.sort(() => 0.5 - Math.random());
    for (const builder of shuffledPool) {
        const result = builder();
        if (result) return result;
    }
    return null;
}

// Utility shuffle helper
function shuffle(arr) {
    return arr.sort(() => 0.5 - Math.random());
}

function showTriviaQuestion() {
    const question = generateTriviaQuestion(state.currentEquipment);
    if (!question) {
        // No viable question — skip straight to equipment profile
        if (state.currentRoundResult) {
            state.roundResults.push({ ...state.currentRoundResult });
            state.currentRoundResult = null;
        }
        showEquipmentSummary();
        return;
    }

    state.currentTriviaQuestion = question;
    state.triviaSubmitted = false;

    // Populate question text
    dom.trivia.questionText.textContent = question.questionText;

    // Build choice buttons
    dom.trivia.choices.innerHTML = '';
    question.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'bonus-choice-btn';
        btn.textContent = choice;
        btn.addEventListener('click', () => handleTriviaChoice(btn, choice, question.correctAnswer));
        dom.trivia.choices.appendChild(btn);
    });

    dom.trivia.result.textContent = '';
    dom.trivia.result.className = 'bonus-result';

    // Reveal the trivia section
    dom.trivia.section.classList.remove('hidden');
    dom.trivia.section.classList.remove('disabled');
}

function handleTriviaChoice(clickedBtn, selectedAnswer, correctAnswer) {
    if (state.triviaSubmitted) return;

    state.triviaSubmitted = true;
    dom.trivia.section.classList.add('disabled');

    const isCorrect = selectedAnswer === correctAnswer;

    // Highlight correct / incorrect buttons
    const allBtns = dom.trivia.choices.querySelectorAll('.bonus-choice-btn');
    allBtns.forEach(btn => {
        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct');
        } else if (btn === clickedBtn && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    if (isCorrect) {
        playBonusCorrectSound();
        const triviaPoints = 2500;
        state.score += triviaPoints;
        dom.score.textContent = state.score;
        dom.trivia.result.textContent = `CORRECT! +${triviaPoints} bonus points!`;
        dom.trivia.result.className = 'bonus-result correct';

        if (state.currentRoundResult) {
            state.currentRoundResult.triviaCorrect = true;
            state.currentRoundResult.triviaPoints = triviaPoints;
            state.currentRoundResult.totalPoints += triviaPoints;
        }
    } else {
        playBonusIncorrectSound();
        dom.trivia.result.textContent = `INCORRECT! Answer: ${correctAnswer}`;
        dom.trivia.result.className = 'bonus-result incorrect';
    }

    // Now save the round result and show the equipment profile
    if (state.currentRoundResult) {
        state.roundResults.push({ ...state.currentRoundResult });
        state.currentRoundResult = null;
    }
    showEquipmentSummary();
}

function showEquipmentSummary() {
    const equipment = state.currentEquipment;

    // Populate fact (if available)
    const factElement = document.getElementById('fact-text');
    const factContainer = document.getElementById('equipment-fact');
    if (equipment.fact) {
        factElement.textContent = equipment.fact;
        factContainer.style.display = 'flex';
    } else {
        factContainer.style.display = 'none';
    }

    // Populate summary fields - query elements fresh each time to avoid stale references
    // (setupResultPageNavigation uses cloneNode which disconnects cached element references)
    const summaryYear = document.getElementById('summary-year');
    const summaryStatus = document.getElementById('summary-status');
    const summaryUsers = document.getElementById('summary-users');
    if (summaryYear) summaryYear.textContent = equipment.inService;
    if (summaryStatus) summaryStatus.textContent = equipment.status;
    if (summaryUsers) summaryUsers.textContent = equipment.users.join(', ');

    // Populate detailed specs
    document.getElementById('summary-speed').textContent = equipment.specs.speed || '-';
    document.getElementById('summary-armament').textContent = equipment.specs.armament || '-';

    // Get range info with appropriate label
    const rangeInfo = getRangeInfo(equipment.specs);
    document.getElementById('summary-range').textContent = rangeInfo.value;
    document.getElementById('summary-range-label').textContent = rangeInfo.label + ':';

    // Populate image credit if available (support both imageCredits array and imageCredit singular)
    const creditElement = document.getElementById('summary-image-credit');
    let creditData = null;
    if (equipment.imageCredits && Array.isArray(equipment.imageCredits)) {
        creditData = equipment.imageCredits[state.currentImageIndex || 0] || null;
    } else if (equipment.imageCredit) {
        creditData = equipment.imageCredit;
    }

    if (creditData) {
        if (typeof creditData === 'string') {
            creditElement.textContent = creditData;
        } else {
            // Handle object format: { author, source, license, url }
            const creditText = `Photo: ${creditData.author} / ${creditData.source} / ${creditData.license}${creditData.modified ? ' — ' + creditData.modified : ''}`;
            if (creditData.url) {
                creditElement.innerHTML = `<a href="${creditData.url}" target="_blank" rel="noopener">${creditText}</a>`;
            } else {
                creditElement.textContent = creditText;
            }
        }
    } else {
        creditElement.textContent = '';
    }

    // Populate recognition features and set up navigation
    populateResultRecognitionFeatures(equipment);
    setupResultPageNavigation();

    // Show the summary section with a slight delay for effect
    setTimeout(() => {
        dom.summary.section.classList.remove('hidden');
        // Update container height AFTER section is visible (offsetHeight is 0 when hidden)
        setTimeout(() => updateResultHeight(0), 50);
    }, 300);
}

// Result Screen Page Navigation State
let currentResultPage = 0;

// Populate recognition features in result screen
function populateResultRecognitionFeatures(equipment) {
    const pageNav = document.getElementById('result-page-nav');
    const recognitionPage = document.getElementById('result-page-recognition');

    if (equipment.recognitionFeatures) {
        // Determine if using WHAT (Tanks), WEFT (Aircraft), or REFT (Helicopters)
        const features = equipment.recognitionFeatures;
        let labels = [];
        let values = [];

        if (features.rotors) {
            // REFT Format (Helicopters)
            labels = ["R - ROTORS:", "E - ENGINE:", "F - FUSELAGE:", "T - TAIL:"];
            values = [features.rotors, features.engine, features.fuselage, features.tail];
        } else if (features.seeker || features.propulsion) {
            // Missile Format — MUST precede WEFT because missiles also carry a 'wings' key
            labels = ["B - BODY/AIRFRAME:", "W - WINGS/FINS:", "S - SEEKER:", "P - PROPULSION:"];
            values = [features.body, features.wings, features.seeker, features.propulsion];
        } else if (features.configuration || features.handguard) {
            // Small Arms Format (rifles, SMGs, etc.)
            labels = ["C - CONFIGURATION:", "H - HANDGUARD:", "O - OPTICS:", "M - MAGAZINE:"];
            values = [features.configuration, features.handguard, features.optics, features.magazine];
        } else if (features.wings) {
            // WEFT Format (Fixed-Wing Aircraft)
            labels = ["W - WINGS:", "E - ENGINE:", "F - FUSELAGE:", "T - TAIL:"];
            values = [features.wings, features.engine, features.fuselage, features.tail];
        } else if (features.size || features.masts) {
            // SMASH Format (Naval Vessels)
            labels = ["S - SIZE/SHAPE:", "M - MASTS:", "A - ARMAMENT:", "S - SUPERSTRUCTURE:", "H - HULL:"];
            values = [features.size, features.masts, features.armament, features.superstructure, features.hull];
        } else if (features.design || features.tube) {
            // MANPADS Format (shoulder-fired air-defence missiles)
            labels = ["D - DESIGN:", "T - TUBE:", "S - SIGHT:"];
            values = [features.design, features.tube, features.sight];
        } else {
            // WHAT Format (Tanks/Vehicles) - Default
            labels = ["W - WHEELS:", "H - HULL:", "A - ARMAMENT:", "T - TURRET:"];
            values = [features.wheels, features.hull, features.armament, features.turret];
        }

        // Set the recognition-panel heading to match the equipment class
        let recogTitle = 'VEHICLE RECOGNITION FEATURES';
        if (features.configuration || features.handguard) {
            recogTitle = 'WEAPON RECOGNITION FEATURES';
        } else if (features.seeker || features.propulsion) {
            recogTitle = 'MISSILE RECOGNITION FEATURES';
        } else if (features.design || features.tube) {
            recogTitle = 'WEAPON RECOGNITION FEATURES';
        }
        const resultTitleEl = document.getElementById('result-recognition-title');
        if (resultTitleEl) resultTitleEl.textContent = recogTitle;

        // Populate fields dynamically (SMASH has 5, MANPADS has 3, others have 4)
        const item4 = document.getElementById('result-recognition-item-4');
        const item5 = document.getElementById('result-recognition-item-5');
        for (let i = 0; i < labels.length; i++) {
            const labelElement = document.getElementById(`result-recognition-label-${i + 1}`);
            const valueElement = document.getElementById(`result-recognition-value-${i + 1}`);
            if (labelElement && valueElement) {
                labelElement.textContent = labels[i];
                valueElement.textContent = values[i] || '-';
            }
        }
        // Show/hide the 4th and 5th slots based on how many fields this format has
        if (item4) item4.style.display = labels.length >= 4 ? 'flex' : 'none';
        if (item5) item5.style.display = labels.length >= 5 ? 'flex' : 'none';

        // Show navigation and recognition page
        if (pageNav) pageNav.classList.add('visible');
        if (recognitionPage) recognitionPage.style.display = 'block';
    } else {
        // Hide navigation and recognition page
        if (pageNav) pageNav.classList.remove('visible');
        if (recognitionPage) recognitionPage.style.display = 'none';
    }

    // Reset to first page
    currentResultPage = 0;
    const pagesContainer = document.getElementById('result-pages-container');
    if (pagesContainer) {
        pagesContainer.scrollTo({ left: 0, behavior: 'auto' });
    }
    updateResultPageIndicators();

    // Note: height update is deferred to showEquipmentSummary after section is visible
}

// Setup navigation for result screen pages
function setupResultPageNavigation() {
    const prevBtn = document.getElementById('result-page-nav-prev');
    const nextBtn = document.getElementById('result-page-nav-next');
    const pagesContainer = document.getElementById('result-pages-container');

    // Remove any existing listeners by cloning and replacing
    if (prevBtn) {
        const newPrevBtn = prevBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
        newPrevBtn.addEventListener('click', () => navigateResultPage(-1));
    }

    if (nextBtn) {
        const newNextBtn = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
        newNextBtn.addEventListener('click', () => navigateResultPage(1));
    }

    // Dot click navigation
    const dots = document.querySelectorAll('#result-page-nav .page-dot');
    dots.forEach((dot, index) => {
        const newDot = dot.cloneNode(true);
        dot.parentNode.replaceChild(newDot, dot);
        newDot.addEventListener('click', () => goToResultPage(index));
    });

    // Swipe detection on pages container
    if (pagesContainer) {
        // Remove existing listener by cloning
        const newContainer = pagesContainer.cloneNode(true);
        pagesContainer.parentNode.replaceChild(newContainer, pagesContainer);
        const finalContainer = document.getElementById('result-pages-container');
        finalContainer.addEventListener('scroll', handleResultPageScroll);
    }

    // Initialize indicators
    updateResultPageIndicators();
}

function navigateResultPage(direction) {
    const newPage = currentResultPage + direction;
    if (newPage >= 0 && newPage <= 1) {
        goToResultPage(newPage);
    }
}

function goToResultPage(pageIndex) {
    const pagesContainer = document.getElementById('result-pages-container');
    if (pagesContainer) {
        const pageWidth = pagesContainer.offsetWidth;
        pagesContainer.scrollTo({
            left: pageWidth * pageIndex,
            behavior: 'smooth'
        });
        currentResultPage = pageIndex;
        updateResultPageIndicators();
        updateResultHeight(pageIndex);
    }
}

function updateResultHeight(pageIndex) {
    const pagesContainer = document.getElementById('result-pages-container');
    if (!pagesContainer) return;

    // Get the active page element and measure its full content height
    const pages = pagesContainer.querySelectorAll('.result-page');
    if (pages && pages[pageIndex]) {
        const page = pages[pageIndex];
        const height = page.scrollHeight;
        if (height > 0) {
            pagesContainer.style.height = height + 'px';
        }
    }
}

function handleResultPageScroll() {
    const pagesContainer = document.getElementById('result-pages-container');
    if (pagesContainer) {
        const pageWidth = pagesContainer.offsetWidth;
        const scrollPosition = pagesContainer.scrollLeft;
        const newPage = Math.round(scrollPosition / pageWidth);
        if (newPage !== currentResultPage) {
            currentResultPage = newPage;
            updateResultPageIndicators();
            updateResultHeight(newPage);
        }
    }
}

function updateResultPageIndicators() {
    const dots = document.querySelectorAll('#result-page-nav .page-dot');
    const prevBtn = document.getElementById('result-page-nav-prev');
    const nextBtn = document.getElementById('result-page-nav-next');

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentResultPage);
    });

    if (prevBtn) prevBtn.disabled = currentResultPage === 0;
    if (nextBtn) nextBtn.disabled = currentResultPage === 1;
}


function nextRound() {
    if (state.round >= state.maxRounds) {
        endGame();
    } else {
        state.round++;
        switchScreen('game');
        loadRound();

        requestAnimationFrame(() => {
            state.map.invalidateSize();
        });
    }
}

// Performance Rating Quotes - each rating can have multiple quotes for variety
const PERFORMANCE_QUOTES = {
    'God of War': [
        { text: '"Veni, Vidi, Vici." (I came, I saw, I conquered.)', author: 'Julius Caesar' },
        { text: '"Victory belongs to the most persevering."', author: 'Napoleon Bonaparte' },
        { text: '"There is no substitute for victory."', author: 'General Douglas MacArthur' },
        { text: '"It\'s hard to be humble when you\'re as great as I am."', author: 'Muhammad Ali' },
        { text: '"Success is a science; if you have the conditions, you get the result."', author: 'Oscar Wilde' },
        { text: '"I have nothing to declare except my genius."', author: 'Oscar Wilde' },
        { text: '"Far better it is to dare mighty things, to win glorious triumphs… than to rank with those poor spirits who neither enjoy nor suffer much."', author: 'Theodore Roosevelt' },
        { text: '"Victorious warriors win first and then go to war."', author: 'Sun Tzu' },
        { text: '"Excellence is never an accident."', author: 'Aristotle' },
        { text: '"To improve is to change; to be perfect is to change often."', author: 'Winston Churchill' },
        { text: '"The superior man is modest in his speech, but exceeds in his actions."', author: 'Confucius' }
    ],
    'Lieutenant Colonel': [
        { text: '"The general who wins a battle makes many calculations in his temple before the battle is fought."', author: 'Sun Tzu, The Art of War, Ch. 1 (trans. Lionel Giles, 1910)' },
        { text: '"The nation that will insist on drawing a broad line of demarcation between the fighting man and the thinking man is liable to find its fighting done by fools and its thinking done by cowards."', author: 'Sir William Francis Butler (Charles George Gordon, 1889)' },
        { text: '"The courage of a soldier is heightened by his knowledge of his profession."', author: 'Vegetius, De Re Militari, Book I' },
        { text: '"Victory in war does not depend entirely upon numbers or mere courage; only skill and discipline will insure it."', author: 'Vegetius, De Re Militari, Book I, Ch. 1' },
        { text: '"Experience is the teacher of all things."', author: 'Julius Caesar, De Bello Civili, Book II, Ch. 8' },
        { text: '"Know ye not that the end and object of conquest is to avoid doing the same thing as the conquered?"', author: 'Alexander the Great, as recorded by Plutarch (Life of Alexander, Ch. 40.2)' }
    ],
    'Major': [
        { text: '"Therefore, he who desires peace, let him prepare for war."', author: 'Vegetius (Epitoma Rei Militaris, Book 3)' },
        { text: '"Never in the field of human conflict was so much owed by so many to so few."', author: 'Winston Churchill (House of Commons, 20 August 1940)' },
        { text: '"Duty, Honour, Country: Those three hallowed words reverently dictate what you ought to be, what you can be, what you will be."', author: 'General Douglas MacArthur (Address to West Point, 12 May 1962)' },
        { text: '"All the business of war, and indeed all the business of life, is to endeavour to find out what you don\'t know by what you do; that\'s what I called \'guessing what was at the other side of the hill\'."', author: 'Duke of Wellington (The Croker Papers, 1885)' },
        { text: '"But life is warfare, and a sojourn in a foreign land; and after-fame is oblivion."', author: 'Marcus Aurelius (Meditations, 2.17)' },
        { text: '"We rely, not on secret weapons, but on our own real courage and loyalty."', author: 'Pericles (Funeral Oration, via Thucydides, Book 2)' }
    ],
    'Captain': [
        { text: '"War is not an affair of chance; a great deal of knowledge, study, and meditation is necessary to conduct it well."', author: 'Frederick the Great (Instructions for his Generals, 1747)' },
        { text: '"Waste no more time arguing what a good man should be. Be one."', author: 'Marcus Aurelius (Meditations, 10.16)' },
        { text: '"No captain can do very wrong if he places his ship alongside that of the enemy."', author: 'Admiral Lord Nelson (Dispatches and Letters of Lord Nelson)' },
        { text: '"War is cruelty, and you cannot refine it."', author: 'General William T. Sherman (Letter to the Mayor of Atlanta, September 1864)' },
        { text: '"In war there is but one favorable moment; the great art is to seize it."', author: 'Attributed to Napoleon Bonaparte (Napoleon\'s Maxims)' },
        { text: '"Both are equally deserters from their post: the man who runs from fear, and the one who yields to anger."', author: 'Marcus Aurelius (Meditations, 11.9)' }
    ],
    'Warrant Officer (Class 1)': [
        { text: '"The strong do what they can and the weak suffer what they must."', author: 'Thucydides, History of the Peloponnesian War (Melian Dialogue, Book 5)' },
        { text: '"I came through and I shall return."', author: 'General Douglas MacArthur (Adelaide, Australia, 20 March 1942)' },
        { text: '"Among the Americans serving on Iwo island, uncommon valor was a common virtue."', author: 'Fleet Admiral Chester W. Nimitz (1945)' },
        { text: '"In a man-to-man fight, the winner is he who has one more round in his magazine."', author: 'Field Marshal Erwin Rommel (Infantry Attacks, 1937)' },
        { text: '"My centre is giving way, my right is retreating, situation excellent, I am attacking."', author: 'Attributed to Marshal Ferdinand Foch (First Battle of the Marne, 1914)' },
        { text: '"Boldness becomes rarer the higher the rank."', author: 'Carl von Clausewitz (On War, Book 3, Ch. 6)' }
    ],
    'Warrant Officer (Class 2)': [
        { text: '"The art of war is simple enough. Find out where your enemy is. Get at him as soon as you can. Strike him as hard as you can, and keep moving on."', author: 'Ulysses S. Grant (Personal Memoirs of John H. Brinton, 1914)' },
        { text: '"England expects that every man will do his duty."', author: 'Admiral Lord Nelson, Battle of Trafalgar (1805)' },
        { text: '"In case of doubt, attack."', author: 'General George S. Patton (Tactical & Technical Trends, U.S. Army, 1943)' },
        { text: '"Audacity, and again audacity, and always audacity!"', author: 'Georges Danton (Speech to the Legislative Assembly, 1792)' },
        { text: '"The supreme art of war is to subdue the enemy without fighting."', author: 'Sun Tzu, The Art of War' },
        { text: '"Mortal danger is an effective antidote for fixed ideas."', author: 'Field Marshal Erwin Rommel (The Rommel Papers, Ch. 11)' }
    ],
    'Staff Sergeant': [
        { text: '"If you know the enemy and know yourself, you need not fear the result of a hundred battles."', author: 'Sun Tzu, The Art of War' },
        { text: '"No plan of operations extends with any certainty beyond the first contact with the main hostile force."', author: 'Field Marshal Helmuth von Moltke the Elder (Über Strategie, 1871)' },
        { text: '"Hard pounding this, gentlemen; let\'s see who will pound longest."', author: 'Duke of Wellington, Battle of Waterloo (1815)' },
        { text: '"A good plan, violently executed now, is better than a perfect plan next week."', author: 'Attributed to General George S. Patton' },
        { text: '"Plans are worthless, but planning is everything."', author: 'Dwight D. Eisenhower (National Defense Executive Reserve Conference, 1957)' },
        { text: '"War is merely the continuation of political intercourse with the addition of other means."', author: 'Carl von Clausewitz, On War' }
    ],
    'Sergeant': [
        { text: '"The backbone of the Army is the Non-commissioned Man."', author: 'Rudyard Kipling, The \'Eathen (1896)' },
        { text: '"Soldiers generally win battles; generals get credit for them."', author: 'Attributed to Napoleon Bonaparte' },
        { text: '"The more you sweat in peace, the less you bleed in war."', author: 'Military maxim' },
        { text: '"Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win."', author: 'Sun Tzu, The Art of War' },
        { text: '"Wars may be fought with weapons, but they are won by men."', author: 'General George S. Patton (Cavalry Journal, 1933)' },
        { text: '"In war, the moral is to the physical as three is to one."', author: 'Napoleon Bonaparte' }
    ],
    'Corporal': [
        { text: '"It does not matter how slowly you go as long as you do not stop."', author: 'Chinese proverb' },
        { text: '"Success is not final, failure is not fatal: it is the courage to continue that counts."', author: '' },
        { text: '"Genius is one percent inspiration and ninety-nine percent perspiration."', author: 'Thomas Edison' },
        { text: '"I am not afraid of an army of lions led by a sheep; I am afraid of an army of sheep led by a lion."', author: 'Attributed to Charles de Talleyrand' },
        { text: '"To be prepared for war is one of the most effective means of preserving peace."', author: 'George Washington (First Annual Message to Congress, 1790)' },
        { text: '"The soldier is the Army. No army is better than its soldiers."', author: 'General George S. Patton' }
    ],
    'Lance Corporal': [
        { text: '"The secret of getting ahead is getting started."', author: '' },
        { text: '"In war there is no prize for the runner-up."', author: 'Attributed to General Omar Bradley' },
        { text: '"You can\'t build a reputation on what you\'re going to do."', author: 'Attributed to Henry Ford' },
        { text: '"The first quality that is needed is audacity."', author: 'Winston Churchill (Painting as a Pastime, 1932)' },
        { text: '"Well begun is half done."', author: 'Aristotle' }
    ],
    'Private': [
        { text: '"I don\'t know what effect these men will have upon the enemy, but, by God, they frighten me."', author: 'Attributed to Duke of Wellington' },
        { text: '"There are no bad soldiers, only bad officers."', author: 'Attributed to Napoleon Bonaparte' },
        { text: '"The beatings will continue until morale improves."', author: 'Attributed to various naval commanders' },
        { text: '"A leader is best when people barely know he exists."', author: 'Lao Tzu, Tao Te Ching' },
        { text: '"Even the longest march begins with a single step. You appear to have managed the one step."', author: 'Defence Guesser' },
        { text: '"If everyone is thinking alike, then somebody isn\'t thinking."', author: '' }
    ],
    'LIZZARD': [
        { text: '"He is a modest man, with much to be modest about."', author: 'Winston Churchill' },
        { text: '"It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt."', author: 'Mark Twain' },
        { text: '"I sometimes think that God, in creating man, somewhat overestimated his ability."', author: 'Oscar Wilde' },
        { text: '"Have no fear of perfection—you\'ll never reach it."', author: 'Salvador Dalí' },
        { text: '"Whatever you do, always give 100%. Unless you\'re donating blood."', author: 'Bill Murray' }
    ]
};

function getRandomQuote(rating) {
    const quotes = PERFORMANCE_QUOTES[rating];
    if (!quotes || quotes.length === 0) return null;
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function endGame() {
    playGameOverSound();
    document.getElementById('final-score').textContent = state.score.toLocaleString();

    // Use absolute score thresholds for speedrun daily mode, percentage for standard
    let rating;
    if (state.isDailyMode) {
        rating = getSpeedrunRating(state.score);
    } else {
        const maxPossibleScore = state.maxRounds * 10000;
        const percentage = (state.score / maxPossibleScore) * 100;
        rating = 'LIZZARD';
        if (percentage >= 98) rating = 'God of War';
        else if (percentage >= 93) rating = 'Lieutenant Colonel';
        else if (percentage >= 87) rating = 'Major';
        else if (percentage >= 81) rating = 'Captain';
        else if (percentage >= 74) rating = 'Warrant Officer (Class 1)';
        else if (percentage >= 66) rating = 'Warrant Officer (Class 2)';
        else if (percentage >= 56) rating = 'Staff Sergeant';
        else if (percentage >= 48) rating = 'Sergeant';
        else if (percentage >= 40) rating = 'Corporal';
        else if (percentage >= 26) rating = 'Lance Corporal';
        else if (percentage >= 10) rating = 'Private';
    }

    // In daily mode: hide performance rating, show archetype card instead
    // In standard mode: show performance rating, hide archetype section
    const scoreRatingEl = document.getElementById('score-rating');
    const quoteContainer = document.getElementById('rating-quote');

    if (state.isDailyMode) {
        // Hide the old performance rating block entirely
        if (scoreRatingEl) scoreRatingEl.classList.add('hidden');
        if (quoteContainer) quoteContainer.classList.add('hidden');
    } else {
        // Standard mode: populate and show rating block
        if (scoreRatingEl) scoreRatingEl.classList.remove('hidden');
        document.getElementById('rating-value').textContent = rating;

        scoreRatingEl.classList.remove('rating-red', 'rating-amber', 'rating-green', 'rating-gold');
        const trophyImg = document.getElementById('performance-trophy');
        if (trophyImg) trophyImg.classList.add('hidden');

        const RATING_META = {
            'God of War':               { colour: 'rating-gold',  img: 'GodofWar2.png' },
            'Lieutenant Colonel':        { colour: 'rating-green', img: 'Lieutenant_Colonel.png' },
            'Major':                    { colour: 'rating-green', img: 'Major.png' },
            'Captain':                  { colour: 'rating-amber', img: 'Captain.png' },
            'Warrant Officer (Class 1)':{ colour: 'rating-amber', img: 'Warrant_Officer_Class_1.png' },
            'Warrant Officer (Class 2)':{ colour: 'rating-amber', img: 'Warrant_Officer_Class_2.png' },
            'Staff Sergeant':           { colour: 'rating-amber', img: 'Staff_Sergeant.png' },
            'Sergeant':                 { colour: 'rating-red',   img: 'Sergeant.png' },
            'Corporal':                 { colour: 'rating-red',   img: 'Corporal.png' },
            'Lance Corporal':           { colour: 'rating-red',   img: 'Lance_Corporal.png' },
            'Private':                  { colour: 'rating-red',   img: 'Private.png' },
            'LIZZARD':                  { colour: 'rating-red',   img: 'Lizzard.png' }
        };
        const meta = RATING_META[rating] || { colour: 'rating-red', img: 'Lizzard.png' };
        scoreRatingEl.classList.add(meta.colour);
        if (trophyImg) {
            trophyImg.src = `PerformanceSymbols/${meta.img}`;
            trophyImg.classList.remove('hidden');
        }

        // Performance quote
        const quoteText = document.getElementById('quote-text');
        const quoteAuthor = document.getElementById('quote-author');
        const quote = getRandomQuote(rating);
        if (quote) {
            quoteText.textContent = quote.text;
            quoteAuthor.textContent = quote.author ? `— ${quote.author}` : '';
            quoteContainer.classList.remove('hidden');
        } else {
            quoteContainer.classList.add('hidden');
        }
    }

    // Calculate stats
    if (state.isDailyMode) {
        const correctLocs = state.speedrunResults.filter(r => r.correct).length;
        const accuracy = state.speedrunResults.length > 0 ? Math.round((correctLocs / state.speedrunResults.length) * 100) : 0;
        document.getElementById('stat-correct-locations').textContent = `${correctLocs}/${state.speedrunResults.length}`;
        document.getElementById('stat-correct-ids').textContent = `${state.bestCombo}x`;
        const labelCorrectIds = document.getElementById('label-correct-ids');
        if (labelCorrectIds) labelCorrectIds.textContent = 'Best Combo';
        document.getElementById('stat-accuracy').textContent = `${accuracy}%`;

        // Archetype card reveal
        const archetype = detectSpeedrunArchetype();
        showArchetypeCard(archetype);
    } else {
        const correctLocations = state.roundResults.filter(r => r.locationCorrect).length;
        const correctIds = state.roundResults.filter(r => r.bonusCorrect).length;
        const maxPossible = state.maxRounds * 10000;
        const accuracy = Math.round((state.score / maxPossible) * 100);
        document.getElementById('stat-correct-locations').textContent = `${correctLocations}/${state.maxRounds}`;
        document.getElementById('stat-correct-ids').textContent = `${correctIds}/${state.maxRounds}`;
        const labelCorrectIds = document.getElementById('label-correct-ids');
        if (labelCorrectIds) labelCorrectIds.textContent = 'Correct IDs';
        document.getElementById('stat-accuracy').textContent = `${accuracy}%`;

        // Hide archetype section for non-daily games
        document.getElementById('archetype-section')?.classList.add('hidden');
    }

    // RE-DEPLOY button: hide for daily (can't replay), show for normal
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) restartBtn.classList.toggle('hidden', !!state.isDailyMode);

    // Handle daily summary display, stats button, and inline callsign panel (Option 1)
    const dailySummaryBar = document.getElementById('daily-summary-bar');
    const viewDailyStatsBtn = document.getElementById('view-daily-stats-btn');
    const viewDailyLeaderboardBtn = document.getElementById('view-daily-leaderboard-btn');
    const inlineCallsignPanel = document.getElementById('inline-callsign-panel');

    if (state.isDailyMode) {
        if (viewDailyStatsBtn) {
            viewDailyStatsBtn.classList.remove('hidden');
            viewDailyStatsBtn.classList.remove('btn-pulse-cta'); // clear old animations
        }
        if (viewDailyLeaderboardBtn) {
            viewDailyLeaderboardBtn.classList.remove('hidden');
        }

        const todayKey = getTodaysSeed().toString();
        const data = getDailyData();
        const alreadySubmitted = data.history && data.history[todayKey];

        // Callsign submission is now triggered from the LEADERBOARD button, not shown inline
        if (inlineCallsignPanel) inlineCallsignPanel.classList.add('hidden');

        if (alreadySubmitted) {
            const stats = data.stats;
            const summaryContent = document.getElementById('daily-summary-content');
            if (summaryContent && dailySummaryBar) {
                let html = '';
                if (stats && stats.currentStreak > 0) html += `<span class="summary-streak">🔥 ${stats.currentStreak} Day Streak</span>`;
                summaryContent.innerHTML = html;
                if (html) dailySummaryBar.classList.remove('hidden');
                else dailySummaryBar.classList.add('hidden');
            }
        } else {
            if (dailySummaryBar) dailySummaryBar.classList.add('hidden');
            // Highlight LEADERBOARD button to draw attention to score submission
            if (viewDailyLeaderboardBtn) viewDailyLeaderboardBtn.classList.add('btn-pulse-cta');
        }
    } else {
        if (inlineCallsignPanel) inlineCallsignPanel.classList.add('hidden');
        if (dailySummaryBar) dailySummaryBar.classList.add('hidden');
        if (viewDailyStatsBtn) viewDailyStatsBtn.classList.add('hidden');
        if (viewDailyLeaderboardBtn) viewDailyLeaderboardBtn.classList.add('hidden');
    }

    switchScreen('gameOver');
}


// Helpers
function switchScreen(screenName) {
    // Remove both 'hidden' and 'active' classes first, then add appropriate classes
    // This fixes bug where 'active' class (display:flex !important) overrides 'hidden' class
    Object.values(screens).forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('active');
    });

    if (screenName === 'result') {
        screens.game.classList.remove('hidden');
        screens.game.classList.add('active');
        screens.result.classList.remove('hidden');
        screens.result.classList.add('active');
        // Hide the equipment popup when showing results (user can reopen via preview)
        hideEquipmentPopup();
        dom.equipmentThumbnail.classList.add('hidden');
    } else {
        screens[screenName].classList.remove('hidden');
        screens[screenName].classList.add('active');
    }
}

function resetMapVisuals() {
    if (state.marker) state.map.removeLayer(state.marker);
    if (state.actualMarker) state.map.removeLayer(state.actualMarker);
    if (state.line) state.map.removeLayer(state.line);
    // Reset GeoJSON style
    if (state.geoJsonLayer) state.geoJsonLayer.resetStyle();

    state.marker = null;
    state.actualMarker = null;
    if (state.line) {
        state.map.removeLayer(state.line);
        state.line = null;
    }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function calculateScore(distance) {
    const maxDist = 8000; // Increased to accommodate large countries like Russia
    if (distance > maxDist) return 0;
    // More gradual decay: full points at 0km, ~2500pts at 2000km, ~600pts at 4000km, ~140pts at 6000km
    const score = 5000 * Math.exp(-distance / 3000);
    return Math.round(score);
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

// Helper function to get appropriate range field and label based on equipment specs
function getRangeInfo(specs) {
    // Define the range field types in order of priority
    const rangeFields = [
        { field: 'effectiveRange', label: 'EFFECTIVE RANGE' },
        { field: 'maximumRange', label: 'MAXIMUM RANGE' },
        { field: 'combatRadius', label: 'COMBAT RADIUS' },
        { field: 'ferryRange', label: 'FERRY RANGE' },
        { field: 'operationalRange', label: 'OPERATIONAL RANGE' },
        { field: 'endurance', label: 'ENDURANCE' },
        { field: 'engagementRange', label: 'ENGAGEMENT RANGE' },
        { field: 'range', label: 'RANGE' }  // Fallback for backward compatibility
    ];

    for (const rangeType of rangeFields) {
        if (specs[rangeType.field]) {
            return { value: specs[rangeType.field], label: rangeType.label };
        }
    }

    return { value: '-', label: 'RANGE' };
}



// ====== PRACTICE HUB FUNCTIONS ======

const practiceDom = {
    practiceBtn: document.getElementById('practice-btn'),
    backBtn: document.getElementById('practice-back-btn'),
    categoryBtns: null, // Will be populated later
    equipmentGrid: document.getElementById('equipment-grid'),
    modal: document.getElementById('practice-detail-modal'),
    closeModalBtn: document.getElementById('close-practice-modal'),
    originFilter: document.getElementById('origin-filter'),
    operatorFilter: document.getElementById('operator-filter'),
    modalImage: document.getElementById('practice-modal-image'),
    modalName: document.getElementById('practice-modal-name'),
    modalOrigin: document.getElementById('practice-modal-origin'),
    modalType: document.getElementById('practice-modal-type'),
    modalSpeed: document.getElementById('practice-modal-speed'),
    modalArmament: document.getElementById('practice-modal-armament'),
    modalRange: document.getElementById('practice-modal-range'),
    modalService: document.getElementById('practice-modal-service'),
    modalStatus: document.getElementById('practice-modal-status'),
    modalUsers: document.getElementById('practice-modal-users')
};

const practiceState = {
    currentCategory: 'all',
    selectedEquipment: null,
    originCountry: 'all',
    operatorCountry: 'all'
};

function setupPracticeHub() {
    // Move detail modal out of #practice-screen so it can be opened from any context
    // (e.g. the daily replay reel) without being hidden by the parent screen's display:none
    if (practiceDom.modal && practiceDom.modal.parentElement && practiceDom.modal.parentElement.id === 'practice-screen') {
        document.body.appendChild(practiceDom.modal);
    }

    // Practice button click
    practiceDom.practiceBtn.addEventListener('click', openPracticeHub);

    // Back button click
    practiceDom.backBtn.addEventListener('click', closePracticeHub);

    // Get category buttons
    practiceDom.categoryBtns = document.querySelectorAll('.category-btn');

    // Category filter buttons
    practiceDom.categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            setActiveCategory(btn, category);
        });
    });

    // Country filter change events
    practiceDom.originFilter.addEventListener('change', (e) => {
        practiceState.originCountry = e.target.value;
        renderEquipmentGrid();
    });

    practiceDom.operatorFilter.addEventListener('change', (e) => {
        practiceState.operatorCountry = e.target.value;
        renderEquipmentGrid();
    });

    // Close modal button
    practiceDom.closeModalBtn.addEventListener('click', closePracticeModal);

    // Close modal on background click
    practiceDom.modal.addEventListener('click', (e) => {
        if (e.target === practiceDom.modal) {
            closePracticeModal();
        }
    });

    // Setup modal page navigation for recognition features
    setupModalPageNavigation();
}

function openPracticeHub() {
    switchScreen('practice');

    // Populate country filters
    populateCountryFilters();

    // Reset filters
    practiceState.currentCategory = 'all';
    practiceState.originCountry = 'all';
    practiceState.operatorCountry = 'all';

    // Reset UI
    practiceDom.categoryBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === 'all') {
            btn.classList.add('active');
        }
    });
    practiceDom.originFilter.value = 'all';
    practiceDom.operatorFilter.value = 'all';

    renderEquipmentGrid();
}

function closePracticeHub() {
    switchScreen('start');
}

function populateCountryFilters() {
    // Get all unique origin countries and split dual-origin entries
    const originsSet = new Set();
    equipmentData.forEach(eq => {
        // Split dual-origin entries (e.g., "United Kingdom / France" becomes ["United Kingdom", "France"])
        if (eq.origin.includes(' / ')) {
            eq.origin.split(' / ').forEach(country => originsSet.add(country.trim()));
        } else {
            originsSet.add(eq.origin);
        }
    });
    const origins = [...originsSet].sort();

    // Get all unique operator countries
    const operators = new Set();
    equipmentData.forEach(eq => {
        eq.users.forEach(user => operators.add(user));
    });

    // Filter out messy grouped entries (e.g., "20+ countries", "NATO allies", "UK")
    const filterOutMessyEntries = (country) => {
        // Exclude entries with "+" (grouped countries like "20+", "40+", etc.)
        if (country.includes('+')) return false;
        // Exclude entries with "worldwide"
        if (country.toLowerCase().includes('worldwide')) return false;
        // Exclude "NATO allies"
        if (country.toLowerCase().includes('allies')) return false;
        // Exclude "UK" (keep "United Kingdom" only)
        if (country === 'UK') return false;
        return true;
    };

    const operatorsSorted = [...operators].filter(filterOutMessyEntries).sort();

    // Populate origin filter
    practiceDom.originFilter.innerHTML = '<option value="all">All Countries</option>';
    origins.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        practiceDom.originFilter.appendChild(option);
    });

    // Populate operator filter
    practiceDom.operatorFilter.innerHTML = '<option value="all">All Countries</option>';
    operatorsSorted.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        practiceDom.operatorFilter.appendChild(option);
    });
}

function setActiveCategory(activeBtn, category) {
    practiceState.currentCategory = category;

    // Update button states
    practiceDom.categoryBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    activeBtn.classList.add('active');

    renderEquipmentGrid();
}

function renderEquipmentGrid() {
    let filteredEquipment = equipmentData;

    // Filter by category
    if (practiceState.currentCategory !== 'all') {
        filteredEquipment = filteredEquipment.filter(eq => {
            // Tanks category — main battle tanks plus light tanks
            if (practiceState.currentCategory === 'Main Battle Tank') {
                return eq.type === 'Main Battle Tank' || eq.type === 'Light Tank';
            }
            // APC/IFV category — all armoured personnel carriers and infantry fighting vehicles
            if (practiceState.currentCategory === 'APC/IFV') {
                return eq.type === 'APC' || eq.type === 'IFV';
            }
            // Light Vehicles category
            if (practiceState.currentCategory === 'Light Vehicles') {
                return eq.type === 'Light Utility Vehicle' ||
                    eq.type === 'MRAP Vehicle' ||
                    eq.type === 'Patrol Vehicle';
            }
            // Drones & Missiles category
            if (practiceState.currentCategory === 'Drones & Missiles') {
                return eq.type === 'Combat Drone' ||
                    eq.type === 'Reconnaissance Drone' ||
                    eq.type === 'Cruise Missile' ||
                    eq.type === 'Anti-Ship Missile' ||
                    eq.type === 'Air-to-Ground Missile' ||
                    eq.type === 'Intercontinental Ballistic Missile' ||
                    eq.type === 'Tactical Ballistic Missile' ||
                    eq.type === 'Loitering Munition';
            }
            // Support Vehicles category
            if (practiceState.currentCategory === 'Support Vehicles') {
                return eq.type === 'Electronic Warfare System' ||
                    eq.type === 'Command and Communication Vehicle' ||
                    eq.type === 'Armoured Vehicle Launched Bridge' ||
                    eq.type === 'Wheeled Vehicle-Launched Bridge' ||
                    eq.type === 'Mine-Clearing Vehicle' ||
                    eq.type === 'Minelayer' ||
                    eq.type === 'Multi-Purpose Tracked Vehicle' ||
                    eq.type === 'Combat Engineer Vehicle' ||
                    eq.type === 'Tank Support Vehicle' ||
                    eq.type === 'Tank Destroyer';
            }
            // Aircraft category — all aircraft and helicopter types
            if (practiceState.currentCategory === 'Fighter Aircraft') {
                return eq.type.includes('Aircraft') ||
                    eq.type.includes('Helicopter') ||
                    eq.type === 'Transport Tiltrotor' ||
                    eq.type === 'Gunship' ||
                    eq.type === 'Strategic Bomber';
            }
            // Small Arms category
            if (practiceState.currentCategory === 'Small Arms') {
                return eq.type === 'Assault Rifle' ||
                    eq.type === 'Sniper Rifle' ||
                    eq.type === 'Pistol' ||
                    eq.type === 'Combat Shotgun' ||
                    eq.type === 'Submachine Gun' ||
                    eq.type === 'Small Arms' ||
                    eq.type === 'Machine Gun' ||
                    eq.type === 'Sharpshooter Rifle' ||
                    eq.type === 'Anti-Tank Weapon' ||
                    eq.type === 'Anti-Tank Missile' ||
                    eq.type === 'Grenade Launcher';
            }
            return eq.type === practiceState.currentCategory;
        });
    }

    // Filter by origin country (handle dual-origin equipment)
    if (practiceState.originCountry !== 'all') {
        filteredEquipment = filteredEquipment.filter(eq => {
            // Check if equipment origin matches exactly or is part of a dual-origin string
            if (eq.origin === practiceState.originCountry) return true;
            // Check if selected country is in a dual-origin entry (e.g., "United Kingdom" matches "United Kingdom / France")
            if (eq.origin.includes(' / ')) {
                const countries = eq.origin.split(' / ').map(c => c.trim());
                return countries.includes(practiceState.originCountry);
            }
            return false;
        });
    }

    // Filter by operator country
    if (practiceState.operatorCountry !== 'all') {
        filteredEquipment = filteredEquipment.filter(eq => eq.users.includes(practiceState.operatorCountry));
    }

    // Sort alphabetically by name
    filteredEquipment.sort((a, b) => a.name.localeCompare(b.name));

    practiceDom.equipmentGrid.innerHTML = '';

    if (filteredEquipment.length === 0) {
        practiceDom.equipmentGrid.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">No equipment found with selected filters.</p>';
        return;
    }

    filteredEquipment.forEach(equipment => {
        const card = createEquipmentCard(equipment);
        practiceDom.equipmentGrid.appendChild(card);
    });
}

function createEquipmentCard(equipment) {
    const card = document.createElement('div');
    card.className = 'equipment-card';

    // Get first image (support both old 'image' and new 'images' format)
    const imageSrc = equipment.images ? equipment.images[0] : equipment.image;

    card.innerHTML = `
        <div class="equipment-card-hover-name">${equipment.name}</div>
        <img class="equipment-card-image" src="${imageSrc}" alt="${equipment.name}" loading="lazy" onerror="this.src='https://placehold.co/200x220/1a1a1a/00ff88?text=${encodeURIComponent(equipment.name)}'">
        <div class="equipment-card-info">
            <div class="equipment-card-name">${equipment.name}</div>
            <div class="equipment-card-origin">${equipment.origin}</div>
            <div class="equipment-card-type">${equipment.type}</div>
        </div>
    `;

    card.addEventListener('click', () => openPracticeModal(equipment));

    return card;
}

function openPracticeModal(equipment) {
    practiceState.selectedEquipment = equipment;

    // Get images array (support both old 'image' and new 'images' format)
    const images = equipment.images || (equipment.image ? [equipment.image] : []);
    const mainImage = images[0] || '';

    // Track current image index
    let currentImageIndex = 0;

    // Function to update the displayed image and credit
    const updateDisplayedImage = (index) => {
        currentImageIndex = index;
        const imgSrc = images[index];

        // Update main image
        practiceDom.modalImage.src = imgSrc;

        // Update image credit based on current image
        updateImageCredit(equipment, index);
    };

    // Populate modal with equipment details
    practiceDom.modalImage.src = mainImage;
    practiceDom.modalImage.onerror = function () {
        this.src = `https://placehold.co/800x350/1a1a1a/00ff88?text=${encodeURIComponent(equipment.name)}`;
        this.onerror = null;
    };

    // Handle image gallery if equipment has multiple images
    const gallery = document.getElementById('practice-image-gallery');
    if (images.length > 1) {
        gallery.innerHTML = '';
        images.forEach((imgSrc, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = imgSrc;
            thumbnail.classList.add('practice-image-thumbnail');
            if (index === 0) thumbnail.classList.add('active');
            thumbnail.alt = `${equipment.name} - Image ${index + 1}`;

            thumbnail.addEventListener('click', () => {
                // Update displayed image and credit
                updateDisplayedImage(index);

                // Update active thumbnail
                gallery.querySelectorAll('.practice-image-thumbnail').forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
            });

            gallery.appendChild(thumbnail);
        });
        gallery.classList.remove('hidden');
    } else {
        gallery.classList.add('hidden');
        gallery.innerHTML = '';
    }

    practiceDom.modalName.textContent = equipment.name;
    practiceDom.modalOrigin.textContent = equipment.origin;
    practiceDom.modalType.textContent = equipment.type;
    practiceDom.modalSpeed.textContent = equipment.specs.speed;
    practiceDom.modalArmament.textContent = equipment.specs.armament;

    // Get range info with appropriate label
    const rangeInfo = getRangeInfo(equipment.specs);
    practiceDom.modalRange.textContent = rangeInfo.value;
    document.getElementById('practice-modal-range-label').textContent = rangeInfo.label + ':';
    practiceDom.modalService.textContent = equipment.inService;
    practiceDom.modalStatus.textContent = equipment.status;
    practiceDom.modalUsers.textContent = equipment.users.join(', ');

    // Set initial image credit
    updateImageCredit(equipment, 0);

    // Populate recognition features if available
    populateRecognitionFeatures(equipment);

    // Show modal
    practiceDom.modal.classList.remove('hidden');

    // Reset to first page and update height AFTER showing modal so dimensions are correct
    resetModalPages();
}

function closePracticeModal() {
    practiceDom.modal.classList.add('hidden');
    practiceState.selectedEquipment = null;
    // Reset to page 1 when closing
    resetModalPages();
}

// Modal page navigation state
let currentModalPage = 0;

function resetModalPages() {
    currentModalPage = 0;
    const pagesContainer = document.getElementById('modal-pages-container');
    if (pagesContainer) {
        pagesContainer.scrollLeft = 0;
    }
    updatePageIndicators();

    // Reset height to first page
    setTimeout(() => updateModalHeight(0), 50);
}

function setupModalPageNavigation() {
    const pagesContainer = document.getElementById('modal-pages-container');
    const prevBtn = document.getElementById('page-nav-prev');
    const nextBtn = document.getElementById('page-nav-next');
    const pageNav = document.getElementById('modal-page-nav');

    // Click navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', () => navigateModalPage(-1));
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => navigateModalPage(1));
    }

    // Dot click navigation — scope to THIS modal's nav only, otherwise the
    // results-screen .page-dot elements also get wired to goToModalPage() and
    // their global indices (2/3) corrupt currentModalPage.
    const dots = document.querySelectorAll('#modal-page-nav .page-dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToModalPage(index));
    });

    // Swipe detection on pages container
    if (pagesContainer) {
        pagesContainer.addEventListener('scroll', handleModalPageScroll);
    }
}

function navigateModalPage(direction) {
    const newPage = currentModalPage + direction;
    if (newPage >= 0 && newPage <= 1) {
        goToModalPage(newPage);
    }
}

function goToModalPage(pageIndex) {
    const pagesContainer = document.getElementById('modal-pages-container');
    if (pagesContainer) {
        const pageWidth = pagesContainer.offsetWidth;
        pagesContainer.scrollTo({
            left: pageWidth * pageIndex,
            behavior: 'smooth'
        });
        currentModalPage = pageIndex;
        updatePageIndicators();
        updateModalHeight(pageIndex);
    }
}

function updateModalHeight(pageIndex) {
    const pagesContainer = document.getElementById('modal-pages-container');
    if (!pagesContainer) return;

    // Get the active page element
    const pages = pagesContainer.querySelectorAll('.modal-page');
    if (pages && pages[pageIndex]) {
        // Calculate the height of the content within the page
        const content = pages[pageIndex].firstElementChild;
        if (content) {
            const height = content.offsetHeight;
            pagesContainer.style.height = height + 'px';
        }
    }
}

function handleModalPageScroll() {
    const pagesContainer = document.getElementById('modal-pages-container');
    if (pagesContainer) {
        const pageWidth = pagesContainer.offsetWidth;
        if (!pageWidth) return; // modal hidden/not laid out → avoid NaN page index
        const scrollPosition = pagesContainer.scrollLeft;
        const newPage = Math.round(scrollPosition / pageWidth);
        if (newPage !== currentModalPage) {
            currentModalPage = newPage;
            updatePageIndicators();
            updateModalHeight(newPage);
        }
    }
}

function updatePageIndicators() {
    // Scope to the modal's own nav so the results-screen dots aren't toggled,
    // and so the active dot always matches currentModalPage (0/1) by local index.
    const dots = document.querySelectorAll('#modal-page-nav .page-dot');
    const prevBtn = document.getElementById('page-nav-prev');
    const nextBtn = document.getElementById('page-nav-next');

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentModalPage);
    });

    if (prevBtn) prevBtn.disabled = currentModalPage === 0;
    if (nextBtn) nextBtn.disabled = currentModalPage === 1;
}

function populateRecognitionFeatures(equipment) {
    const pageNav = document.getElementById('modal-page-nav');
    const recognitionPage = document.getElementById('modal-page-recognition');

    if (equipment.recognitionFeatures) {
        // Determine if using WHAT (Tanks) or WEFT (Aircraft)
        const features = equipment.recognitionFeatures;
        let labels = [];
        let values = [];

        if (features.rotors) {
            // REFT Format (Helicopters)
            labels = ["R - ROTORS:", "E - ENGINE:", "F - FUSELAGE:", "T - TAIL:"];
            values = [features.rotors, features.engine, features.fuselage, features.tail];
        } else if (features.seeker || features.propulsion) {
            // Missile Format — MUST precede WEFT because missiles also carry a 'wings' key
            labels = ["B - BODY/AIRFRAME:", "W - WINGS/FINS:", "S - SEEKER:", "P - PROPULSION:"];
            values = [features.body, features.wings, features.seeker, features.propulsion];
        } else if (features.configuration || features.handguard) {
            // Small Arms Format (rifles, SMGs, etc.)
            labels = ["C - CONFIGURATION:", "H - HANDGUARD:", "O - OPTICS:", "M - MAGAZINE:"];
            values = [features.configuration, features.handguard, features.optics, features.magazine];
        } else if (features.wings) {
            // WEFT Format (Fixed-Wing Aircraft)
            labels = ["W - WINGS:", "E - ENGINE:", "F - FUSELAGE:", "T - TAIL:"];
            values = [features.wings, features.engine, features.fuselage, features.tail];
        } else if (features.size || features.masts) {
            // SMASH Format (Naval Vessels)
            labels = ["S - SIZE/SHAPE:", "M - MASTS:", "A - ARMAMENT:", "S - SUPERSTRUCTURE:", "H - HULL:"];
            values = [features.size, features.masts, features.armament, features.superstructure, features.hull];
        } else if (features.design || features.tube) {
            // MANPADS Format (shoulder-fired air-defence missiles)
            labels = ["D - DESIGN:", "T - TUBE:", "S - SIGHT:"];
            values = [features.design, features.tube, features.sight];
        } else {
            // WHAT Format (Tanks/Vehicles) - Default
            labels = ["W - WHEELS:", "H - HULL:", "A - ARMAMENT:", "T - TURRET:"];
            values = [features.wheels, features.hull, features.armament, features.turret];
        }

        // Set the recognition-panel heading to match the equipment class
        let recogTitle = 'VEHICLE RECOGNITION FEATURES';
        if (features.configuration || features.handguard) {
            recogTitle = 'WEAPON RECOGNITION FEATURES';
        } else if (features.seeker || features.propulsion) {
            recogTitle = 'MISSILE RECOGNITION FEATURES';
        } else if (features.design || features.tube) {
            recogTitle = 'WEAPON RECOGNITION FEATURES';
        }
        const modalTitleEl = document.getElementById('modal-recognition-title');
        if (modalTitleEl) modalTitleEl.textContent = recogTitle;

        // Populate fields dynamically (SMASH has 5, MANPADS has 3, others have 4)
        const item4 = document.getElementById('recognition-item-4');
        const item5 = document.getElementById('recognition-item-5');
        for (let i = 0; i < labels.length; i++) {
            document.getElementById(`recognition-label-${i + 1}`).textContent = labels[i];
            document.getElementById(`recognition-value-${i + 1}`).textContent = values[i] || '-';
        }
        // Show/hide the 4th and 5th slots based on how many fields this format has
        if (item4) item4.style.display = labels.length >= 4 ? 'flex' : 'none';
        if (item5) item5.style.display = labels.length >= 5 ? 'flex' : 'none';

        // Show navigation and recognition page
        if (pageNav) pageNav.classList.add('visible');
        if (recognitionPage) recognitionPage.style.display = 'block';
    } else {
        // Hide navigation and recognition page
        if (pageNav) pageNav.classList.remove('visible');
        if (recognitionPage) recognitionPage.style.display = 'none';
    }

    // Reset to first page and update height
    // resetModalPages(); // Moved to openPracticeModal to ensure visibility first

    // Force height update after a microtask to ensure DOM is ready
    setTimeout(() => updateModalHeight(0), 0);
}

// Helper function to update image credit display
function updateImageCredit(equipment, imageIndex) {
    const modalCredit = document.getElementById('practice-modal-credit');

    // Get the appropriate credit for the current image
    let creditText = '';

    if (equipment.imageCredits && Array.isArray(equipment.imageCredits)) {
        // Use imageCredits array - get credit for specific image
        creditText = equipment.imageCredits[imageIndex] || '';
    } else if (equipment.imageCredit) {
        // Fallback to single imageCredit for backward compatibility
        creditText = equipment.imageCredit;
    }

    if (creditText) {
        if (typeof creditText === 'string') {
            modalCredit.textContent = creditText;
        } else {
            // Handle object format: { author, source, license, url }
            const credit = creditText;
            const text = `Photo: ${credit.author} / ${credit.source} / ${credit.license}${credit.modified ? ' — ' + credit.modified : ''}`;
            if (credit.url) {
                modalCredit.innerHTML = `<a href="${credit.url}" target="_blank" rel="noopener">${text}</a>`;
            } else {
                modalCredit.textContent = text;
            }
        }
    } else {
        modalCredit.textContent = '';
    }
}

// ====== HELP SYSTEM (TERMS & CONDITIONS + HOW TO PLAY) ======

function setupHelpSystem() {
    const termsIcon = document.getElementById('terms-icon');

    // Help Menu elements
    const helpMenuModal = document.getElementById('help-menu-modal');
    const helpMenuCloseBtn = document.getElementById('help-menu-close-btn');
    const helpHowToPlayBtn = document.getElementById('help-how-to-play-btn');
    const helpTermsBtn = document.getElementById('help-terms-btn');

    // How to Play elements
    const howToPlayModal = document.getElementById('how-to-play-modal');
    const howToPlayCloseBtn = document.getElementById('how-to-play-close-btn');
    const howToPlayOkBtn = document.getElementById('how-to-play-ok-btn');

    // Terms & Conditions elements
    const termsModal = document.getElementById('terms-modal');
    const termsCloseBtn = document.getElementById('terms-close-btn');
    const termsOkBtn = document.getElementById('terms-ok-btn');

    // === QUESTION MARK ICON - Opens Help Menu ===
    termsIcon.addEventListener('click', () => {
        helpMenuModal.classList.remove('hidden');
    });

    // === HELP MENU HANDLERS ===

    // Close help menu
    helpMenuCloseBtn.addEventListener('click', () => {
        helpMenuModal.classList.add('hidden');
    });

    // Help Menu -> How to Play
    helpHowToPlayBtn.addEventListener('click', () => {
        helpMenuModal.classList.add('hidden');
        howToPlayModal.classList.remove('hidden');
        // Scroll to top of content
        const howToPlayContent = howToPlayModal.querySelector('.terms-content');
        if (howToPlayContent) {
            howToPlayContent.scrollTop = 0;
        }
    });

    // Help Menu -> Terms & Conditions
    helpTermsBtn.addEventListener('click', () => {
        helpMenuModal.classList.add('hidden');
        termsModal.classList.remove('hidden');
        // Scroll to top of content
        const termsContent = termsModal.querySelector('.terms-content');
        if (termsContent) {
            termsContent.scrollTop = 0;
        }
    });

    // Close help menu on backdrop click
    helpMenuModal.addEventListener('click', (e) => {
        if (e.target === helpMenuModal) {
            helpMenuModal.classList.add('hidden');
        }
    });

    // === HOW TO PLAY HANDLERS ===

    // Close via close button (X)
    howToPlayCloseBtn.addEventListener('click', () => {
        howToPlayModal.classList.add('hidden');
    });

    // Close via OK button
    howToPlayOkBtn.addEventListener('click', () => {
        howToPlayModal.classList.add('hidden');
    });

    // Close on backdrop click
    howToPlayModal.addEventListener('click', (e) => {
        if (e.target === howToPlayModal) {
            howToPlayModal.classList.add('hidden');
        }
    });

    // === TERMS & CONDITIONS HANDLERS ===

    // Close via close button (X)
    termsCloseBtn.addEventListener('click', () => {
        termsModal.classList.add('hidden');
    });

    // Close via OK button
    termsOkBtn.addEventListener('click', () => {
        termsModal.classList.add('hidden');
    });

    // Close on backdrop click
    termsModal.addEventListener('click', (e) => {
        if (e.target === termsModal) {
            termsModal.classList.add('hidden');
        }
    });

    // === ESC KEY HANDLER for all modals ===
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!helpMenuModal.classList.contains('hidden')) {
                helpMenuModal.classList.add('hidden');
            } else if (!howToPlayModal.classList.contains('hidden')) {
                howToPlayModal.classList.add('hidden');
            } else if (!termsModal.classList.contains('hidden')) {
                termsModal.classList.add('hidden');
            }
        }
    });
}


// ====== DAILY CHALLENGE FUNCTIONS ======

const DAILY_STORAGE_KEY = 'defenceGuesserDaily';

function setupDailyChallenge() {
    const dailyBtn = document.getElementById('daily-btn');
    const optionsModal = document.getElementById('daily-options-modal');
    const dailyModal = document.getElementById('daily-name-modal');
    const leaderboardModal = document.getElementById('daily-leaderboard-modal');
    const nameInput = document.getElementById('player-name-input');
    const startBtn = document.getElementById('daily-start-btn');
    const cancelBtn = document.getElementById('daily-cancel-btn');
    const playBtn = document.getElementById('daily-play-btn');
    const viewLeaderboardBtn = document.getElementById('daily-leaderboard-btn');
    const optionsCancelBtn = document.getElementById('daily-options-cancel-btn');
    const leaderboardCloseBtn = document.getElementById('leaderboard-close-btn');

    // Open options modal when clicking daily button
    dailyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        optionsModal.classList.remove('hidden');
    });

    // Options modal - Cancel/Back button
    optionsCancelBtn.addEventListener('click', () => {
        optionsModal.classList.add('hidden');
    });

    // Options modal - Play button
    playBtn.addEventListener('click', () => {
        optionsModal.classList.add('hidden');
        // Check if player already played today
        if (hasPlayedToday()) {
            alert('You have already completed today\'s Daily Challenge! Come back tomorrow for a new challenge.');
            return;
        }
        // Start daily game directly (no callsign needed)
        state.playerName = 'Player';
        startGame(true); // Start in daily mode
    });

    // Options modal - Global Leaderboard button
    const viewGlobalLeaderboardBtn = document.getElementById('daily-global-leaderboard-btn');
    if (viewGlobalLeaderboardBtn) {
        viewGlobalLeaderboardBtn.addEventListener('click', () => {
            optionsModal.classList.add('hidden');
            updateLeaderboardModal();
            lbSwitchToTab('global');
            const period = document.querySelector('.lb-period-tab.active')?.dataset.period || 'daily';
            loadGlobalLeaderboard(period);
            leaderboardModal.classList.remove('hidden');
        });
    }

    // Options modal - View Stats button
    viewLeaderboardBtn.addEventListener('click', () => {
        optionsModal.classList.add('hidden');
        updateLeaderboardModal();
        lbSwitchToTab('stats');
        leaderboardModal.classList.remove('hidden');
    });

    // Leaderboard modal - Close button (top X)
    leaderboardCloseBtn.addEventListener('click', () => {
        leaderboardModal.classList.add('hidden');
        const gameOverScreen = document.getElementById('game-over-screen');
        if (gameOverScreen && gameOverScreen.classList.contains('hidden')) {
            optionsModal.classList.remove('hidden');
        }
        // If a daily-PB submission queued a review prompt, show it now
        maybeShowReviewPrompt();
    });

    // Leaderboard modal - Close button (bottom)
    const leaderboardCloseBottomBtn = document.getElementById('leaderboard-close-btn-bottom');
    if (leaderboardCloseBottomBtn) {
        leaderboardCloseBottomBtn.addEventListener('click', () => {
            leaderboardModal.classList.add('hidden');
            const gameOverScreen = document.getElementById('game-over-screen');
            if (gameOverScreen && gameOverScreen.classList.contains('hidden')) {
                optionsModal.classList.remove('hidden');
            }
            maybeShowReviewPrompt();
        });
    }
}

// Update leaderboard modal with current scores
function updateLeaderboardModal() {
    const data = getDailyData();

    updateStatsDisplay(data.stats);
    updateProgressChart(data.history);
    updateTotalPoints(data.history);
}

function updateStatsDisplay(stats) {
    if (!stats || stats.totalDays === 0) {
        document.getElementById('stat-best').textContent = '-';
        document.getElementById('stat-best-date').textContent = '';
        document.getElementById('stat-average').textContent = '-';
        document.getElementById('stat-streak').textContent = '0';
        document.getElementById('stat-total').textContent = '0';
        return;
    }

    // Best score
    document.getElementById('stat-best').textContent = stats.bestScore.toLocaleString();
    if (stats.bestDate) {
        const date = formatDateKey(stats.bestDate);
        document.getElementById('stat-best-date').textContent = date;
    }

    // Average
    document.getElementById('stat-average').textContent = stats.averageScore.toLocaleString();

    // Streak
    document.getElementById('stat-streak').textContent = stats.currentStreak;

    // Total days
    document.getElementById('stat-total').textContent = stats.totalDays;
}

function updateProgressChart(history) {
    const canvas = document.getElementById('progress-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Dynamic Y-axis scale: max of 50,000 or highest recorded score (speedrun can exceed 50k)
    const maxScore = Math.max(50000, ...Object.values(history).map(e => e.score || 0));
    const padding = { left: 30, right: 15, top: 20, bottom: 25 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // Get last 7 days with data points (fill missing days with 0)
    const today = getTodaysSeed();
    const last7Days = [];

    for (let i = 6; i >= 0; i--) {
        const dayOffset = today - i;
        const dateKey = dayOffset.toString();
        const entry = history[dateKey];

        last7Days.push({
            dateKey: dateKey,
            score: entry ? entry.score : 0,
            hasData: !!entry
        });
    }

    // Draw grid lines
    ctx.strokeStyle = 'rgba(0, 255, 136, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = padding.top + (chartHeight / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(width - padding.right, y);
        ctx.stroke();
    }

    // Draw Y-axis labels (0, 11k, 23k, 34k, 45k)
    ctx.fillStyle = '#9ca3af';
    ctx.font = '10px "Rajdhani", sans-serif';
    ctx.textAlign = 'right';
    for (let i = 0; i <= 4; i++) {
        const value = Math.round((maxScore / 4) * (4 - i));
        const y = padding.top + (chartHeight / 4) * i;
        const label = value >= 1000 ? (value / 1000).toFixed(0) + 'k' : value;
        ctx.fillText(label, padding.left - 5, y + 4);
    }

    // Draw line chart
    ctx.strokeStyle = '#00ff88';
    ctx.lineWidth = 2;
    ctx.beginPath();

    last7Days.forEach((day, index) => {
        const x = padding.left + (chartWidth / 6) * index;
        const y = padding.top + chartHeight - (day.score / maxScore) * chartHeight;

        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });

    ctx.stroke();

    // Draw data points
    last7Days.forEach((day, index) => {
        const x = padding.left + (chartWidth / 6) * index;
        const y = padding.top + chartHeight - (day.score / maxScore) * chartHeight;

        // Draw circle
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = day.hasData ? '#00ff88' : 'rgba(0, 255, 136, 0.3)';
        ctx.fill();
        ctx.strokeStyle = '#001a0d';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw date label
        ctx.fillStyle = '#9ca3af';
        ctx.font = '9px "Rajdhani", sans-serif';
        ctx.textAlign = 'center';
        const dateLabel = formatDateKeyShort(day.dateKey);
        ctx.fillText(dateLabel, x, height - 5);
    });
}

function updateHistoryList(history) {
    const historyList = document.getElementById('history-list');
    const entries = Object.entries(history);

    if (entries.length === 0) {
        historyList.innerHTML = '<p class="no-history">No history yet. Complete your first daily challenge!</p>';
        return;
    }

    // Calculate total points achieved across all daily challenges
    const totalPoints = entries.reduce((sum, [dateKey, entry]) => sum + entry.score, 0);

    historyList.innerHTML = `
        <div class="total-points-summary">
            <div class="total-points-icon">🎖️</div>
            <div class="total-points-value">${totalPoints.toLocaleString()}</div>
            <div class="total-points-label">TOTAL POINTS</div>
        </div>
    `;
}

function formatDateKey(dateKey) {
    const str = dateKey.toString();
    const year = str.substring(0, 4);
    const month = str.substring(4, 6);
    const day = str.substring(6, 8);
    const date = new Date(year, month - 1, day);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}`;
}

function formatDateKeyShort(dateKey) {
    const str = dateKey.toString();
    const month = str.substring(4, 6);
    const day = str.substring(6, 8);
    return `${parseInt(month)}/${parseInt(day)}`;
}

// Update total points achieved across all daily challenges
function updateTotalPoints(history) {
    const totalPointsElement = document.getElementById('total-points');

    if (!history || Object.keys(history).length === 0) {
        totalPointsElement.textContent = '0';
        return;
    }

    // Sum all scores from history
    const totalPoints = Object.values(history).reduce((sum, entry) => sum + entry.score, 0);

    totalPointsElement.textContent = totalPoints.toLocaleString();
}


// Proper Fisher-Yates shuffle (unbiased)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Seeded random number generator for consistent daily equipment
function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function getTodaysSeed() {
    const today = new Date();
    return today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
}

function getDailyEquipment() {
    const seed = getTodaysSeed();
    const subSeed = seed * 31 + 37; // Different seed for ordering — varies the sequence each day
    const shuffled = [...equipmentData];

    // Step 1: determine the set of 50 items using the primary daily seed
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(seededRandom(seed + i) * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const selectedItems = shuffled.slice(0, 50);

    // Step 2: reorder those 50 items with the sub-seed so the play order varies daily
    for (let i = selectedItems.length - 1; i > 0; i--) {
        const j = Math.floor(seededRandom(subSeed + i) * (i + 1));
        [selectedItems[i], selectedItems[j]] = [selectedItems[j], selectedItems[i]];
    }

    return selectedItems;
}

function hasPlayedToday() {
    const data = getDailyData();
    const todayKey = getTodaysSeed().toString();
    return data.history && data.history[todayKey] !== undefined;
}

function markAsPlayedToday() {
    // This is now handled in submitDailyScore
}

function getDailyData() {
    try {
        const stored = localStorage.getItem(DAILY_STORAGE_KEY);
        if (!stored) {
            return { history: {}, stats: null };
        }

        const data = JSON.parse(stored);

        // Migration from old structure
        if (data.leaderboards && !data.history) {
            return migrateOldData(data);
        }

        return data;
    } catch (e) {
        return { history: {}, stats: null };
    }
}

function saveDailyData(data) {
    try {
        localStorage.setItem(DAILY_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        console.error('Failed to save daily data:', e);
    }
}

function migrateOldData(oldData) {
    console.log('Migrating old daily challenge data to new format...');
    const newData = {
        history: {},
        stats: null
    };

    // Convert old leaderboard scores to history
    if (oldData.leaderboards) {
        Object.entries(oldData.leaderboards).forEach(([dateKey, scores]) => {
            if (scores && scores.length > 0) {
                // Take the first (best) score as the user's score for that day
                newData.history[dateKey] = {
                    name: scores[0].name,
                    score: scores[0].score,
                    timestamp: scores[0].timestamp || Date.now()
                };
            }
        });
    }

    // Calculate stats from migrated data
    newData.stats = calculateDailyStats(newData.history);

    // Save migrated data
    saveDailyData(newData);

    return newData;
}

function getTodaysLeaderboard() {
    // For backwards compatibility - returns array with user's score
    const data = getDailyData();
    const todayKey = getTodaysSeed().toString();
    const todayEntry = data.history[todayKey];

    if (todayEntry) {
        return [{
            name: todayEntry.name,
            score: todayEntry.score,
            timestamp: todayEntry.timestamp
        }];
    }

    return [];
}

function submitDailyScore(name, score) {
    const data = getDailyData();
    const todayKey = getTodaysSeed().toString();

    // Add to history
    if (!data.history) data.history = {};
    data.history[todayKey] = {
        name: name,
        score: score,
        timestamp: Date.now(),
        targetsCleared: state.targetsCleared,
        scoreProgression: state.speedrunScoreProgression  // cumulative score after each target
    };

    // Clean up old entries (keep last 30 days)
    cleanupOldHistory(data);

    // Recalculate stats
    data.stats = calculateDailyStats(data.history);

    saveDailyData(data);
}

function cleanupOldHistory(data) {
    const today = getTodaysSeed();
    const cutoff = today - 30; // Keep last 30 days

    for (const key of Object.keys(data.history)) {
        if (parseInt(key) < cutoff) {
            delete data.history[key];
        }
    }
}

function calculateDailyStats(history) {
    const entries = Object.entries(history);

    if (entries.length === 0) {
        return {
            bestScore: 0,
            bestDate: null,
            worstScore: 0,
            worstDate: null,
            averageScore: 0,
            totalDays: 0,
            currentStreak: 0,
            longestStreak: 0
        };
    }

    // Sort by date (most recent first)
    entries.sort((a, b) => parseInt(b[0]) - parseInt(a[0]));

    // Calculate best and worst
    let bestScore = -Infinity;
    let bestDate = null;
    let worstScore = Infinity;
    let worstDate = null;
    let totalScore = 0;

    entries.forEach(([dateKey, entry]) => {
        const score = entry.score;
        totalScore += score;

        if (score > bestScore) {
            bestScore = score;
            bestDate = dateKey;
        }
        if (score < worstScore) {
            worstScore = score;
            worstDate = dateKey;
        }
    });

    const averageScore = Math.round(totalScore / entries.length);

    // Calculate streaks
    const { currentStreak, longestStreak } = calculateStreaks(entries);

    return {
        bestScore,
        bestDate,
        worstScore,
        worstDate,
        averageScore,
        totalDays: entries.length,
        currentStreak,
        longestStreak
    };
}

function calculateStreaks(sortedEntries) {
    if (sortedEntries.length === 0) {
        return { currentStreak: 0, longestStreak: 0 };
    }

    const today = getTodaysSeed();
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;
    let expectedDate = today;

    // Check current streak (must include today or yesterday)
    for (let i = 0; i < sortedEntries.length; i++) {
        const dateKey = parseInt(sortedEntries[i][0]);

        if (dateKey === expectedDate) {
            if (i === 0 || tempStreak > 0) {
                tempStreak++;
                currentStreak = tempStreak;
            }
            expectedDate--;
        } else {
            break;
        }
    }

    // Calculate longest streak
    tempStreak = 1;
    longestStreak = 1;

    for (let i = 0; i < sortedEntries.length - 1; i++) {
        const curr = parseInt(sortedEntries[i][0]);
        const next = parseInt(sortedEntries[i + 1][0]);

        if (curr - next === 1) {
            tempStreak++;
            longestStreak = Math.max(longestStreak, tempStreak);
        } else {
            tempStreak = 1;
        }
    }

    return { currentStreak, longestStreak };
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Clean up old data on init (no longer needed with new structure)
function cleanupOldLeaderboards() {
    const data = getDailyData();

    // If old structure still exists, trigger migration
    if (data.leaderboards) {
        migrateOldData(data);
    }
}

// Run cleanup on init
cleanupOldLeaderboards();

init();

// ============================================
// SETTINGS MODAL FUNCTIONALITY
// ============================================

function setupSettingsModal() {
    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const settingsClose = document.querySelector('.settings-close');
    const settingsTabs = document.querySelectorAll('.settings-tab');

    // Open settings modal
    settingsBtn.addEventListener('click', () => {
        settingsModal.classList.add('active');
    });

    // Close modal with X button
    settingsClose.addEventListener('click', () => {
        settingsModal.classList.remove('active');
    });

    // Close modal when clicking outside content
    settingsModal.addEventListener('click', (e) => {
        if (e.target === settingsModal) {
            settingsModal.classList.remove('active');
        }
    });

    // Tab switching
    settingsTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Get target section
            const targetSection = tab.dataset.tab;

            // Remove active class from all tabs and sections
            settingsTabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.settings-section').forEach(s => s.classList.remove('active'));

            // Add active class to clicked tab and corresponding section
            tab.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
        });
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && settingsModal.classList.contains('active')) {
            settingsModal.classList.remove('active');
        }
    });
}

// -- Share Feature -----------------------------------------------------------

function isAndroidMobile() {
    return /Android/i.test(navigator.userAgent);
}

function getShareLink() {
    return isAndroidMobile()
        ? 'https://play.google.com/store/apps/details?id=com.defenceguesser.twa&hl=en_GB'
        : 'https://www.defenceguesser.com';
}

function generateShareText() {
    // Mode line: Daily Challenge includes today's date; Standard Game does not.
    let modeLine;
    if (state.isDailyMode) {
        const today = new Date();
        const dateStr = today.toLocaleDateString('en-GB', {
            day: 'numeric', month: 'long', year: 'numeric'
        });
        modeLine = `\uD83D\uDDD3\uFE0F Daily Challenge \u2014 ${dateStr}`;
    } else {
        modeLine = '\uD83C\uDFAE Standard Game';
    }
    const hardLine = state.isHardMode ? '\n\uD83D\uDD12 Hard Mode' : '';

    const divider = '\u2501'.repeat(15);
    const header  = `\uD83C\uDF96\uFE0F DEFENCE GUESSER\n${modeLine}${hardLine}\n${divider}\nScore: ${state.score.toLocaleString()} pts`;

    const rounds = state.roundResults.map((r, i) => {
        const locEmoji = r.locationCorrect ? '\uD83C\uDFAF' : '\uD83D\uddFA\uFE0F';
        const idEmoji  = r.bonusCorrect    ? '\u2705'       : '\u274C';
        const total    = ((r.locationPoints || 0) + (r.bonusPoints || 0)).toLocaleString();
        return `R${i + 1}: ${locEmoji}${idEmoji}  ${total}`;
    }).join('\n');

    const link = getShareLink();
    return `${header}\n\n${rounds}\n\nCan you beat me? \uD83C\uDFAF\n\uD83D\uDD17 ${link}`;
}

function shareToX() {
    const text = generateShareText();
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

function shareToWhatsApp() {
    const text = generateShareText();
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
}

async function copyShareText() {
    const text      = generateShareText();
    const copyBtn   = document.getElementById('share-copy-btn');
    const copyLabel = document.getElementById('share-copy-label');
    try {
        await navigator.clipboard.writeText(text);
    } catch (e) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity  = '0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
    }
    copyBtn.classList.add('copied');
    copyLabel.textContent = 'COPIED!';
    setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyLabel.textContent = 'COPY';
    }, 2500);
}

// ============================================================
// GLOBAL LEADERBOARD — Firebase / Firestore integration
// ============================================================

// ── Helpers ─────────────────────────────────────────────────

/** ISO week key e.g. "2026-W21" (Monday-based) */
function getWeekKey() {
    const now = new Date();
    const jan1 = new Date(now.getFullYear(), 0, 1);
    const dayOffset = (jan1.getDay() + 6) % 7; // shift so Monday = 0
    const weekNum = Math.ceil(((now - jan1) / 86400000 + dayOffset + 1) / 7);
    return `${now.getFullYear()}-W${String(weekNum).padStart(2, '0')}`;
}

/** Month key e.g. "2026-05" */
function getMonthKey() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

/** Strip anything that is not a letter, digit, hyphen or underscore */
function sanitiseCallsign(raw) {
    return (raw || '').trim().replace(/[^A-Za-z0-9\-_]/g, '').substring(0, 16).toUpperCase();
}

/** 1→"1st", 2→"2nd", 150→"150th" */
function ordinalSuffix(n) {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

/** Minimal HTML escape so callsigns cannot inject markup */
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// ── Firestore submission ─────────────────────────────────────

/**
 * Get (or create on first use) a stable per-installation device ID stored
 * in localStorage. This is a random UUID — NOT a hardware identifier —
 * used purely to distinguish leaderboard submissions from different devices
 * that happen to choose the same callsign.
 */
function getOrCreateDeviceId() {
    let id = localStorage.getItem('dg_device_id');
    if (!id) {
        id = (window.crypto && typeof window.crypto.randomUUID === 'function')
            ? window.crypto.randomUUID()
            : 'dg-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
        localStorage.setItem('dg_device_id', id);
    }
    return id;
}

/**
 * Write one leaderboard document.
 * Doc ID = dateKey_DEVICEID so each device owns its own slot for the day.
 * Two different real players sharing a callsign no longer overwrite each
 * other; the same player resubmitting (e.g. after a score correction)
 * still overwrites only their own entry.
 */
async function submitScoreToFirebase(callsign, score) {
    if (typeof db === 'undefined') {
        console.warn('[Leaderboard] Firestore not ready — skipping submit.');
        return;
    }
    try {
        const dateKey  = getTodaysSeed().toString();
        const deviceId = getOrCreateDeviceId();
        await db.collection('leaderboards').doc(`${dateKey}_${deviceId}`).set({
            playerName : callsign,
            deviceId   : deviceId,
            score      : score,
            dateKey    : dateKey,
            weekKey    : getWeekKey(),
            monthKey   : getMonthKey(),
            timestamp  : firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('[Leaderboard] Submitted:', callsign, score);
    } catch (err) {
        console.warn('[Leaderboard] Submit failed:', err);
    }
}

// ── Firestore fetching ───────────────────────────────────────

/**
 * Fetch up to 100 docs for the period, deduplicate by deviceId
 * (keeping each device's best score), sort and return the top 10.
 * Legacy docs without a deviceId fall back to keying by playerName.
 * Sorted client-side to avoid needing composite Firestore indexes.
 * Returns null on error so the renderer can show an error state.
 */
async function fetchLeaderboard(period) {
    if (typeof db === 'undefined') return null;
    try {
        const dateKey = getTodaysSeed().toString();
        let query = db.collection('leaderboards');
        if (period === 'daily')        query = query.where('dateKey',  '==', dateKey);
        else if (period === 'weekly')  query = query.where('weekKey',  '==', getWeekKey());
        else if (period === 'monthly') query = query.where('monthKey', '==', getMonthKey());

        const snap = await query.limit(100).get();

        const best = new Map();
        snap.forEach(doc => {
            const d = doc.data();
            const key = d.deviceId || `legacy:${d.playerName}`;
            const existing = best.get(key);
            if (!existing || d.score > existing.score) {
                best.set(key, {
                    name: d.playerName,
                    score: d.score,
                    deviceId: d.deviceId || null
                });
            }
        });

        return Array.from(best.values())
            .sort((a, b) => b.score - a.score)
            .slice(0, 10);
    } catch (err) {
        console.warn('[Leaderboard] Fetch failed:', err);
        return null;
    }
}

/**
 * Count documents with a higher score for rank estimation.
 * Uses count() aggregation when available (SDK ≥ 9.9.0),
 * falls back to fetching doc IDs and counting locally.
 */
async function fetchUserRank(period, userScore) {
    if (typeof db === 'undefined') return null;
    try {
        const dateKey = getTodaysSeed().toString();
        let query = db.collection('leaderboards').where('score', '>', userScore);
        if (period === 'daily')        query = query.where('dateKey',  '==', dateKey);
        else if (period === 'weekly')  query = query.where('weekKey',  '==', getWeekKey());
        else if (period === 'monthly') query = query.where('monthKey', '==', getMonthKey());

        if (typeof query.count === 'function') {
            const snap = await query.count().get();
            return snap.data().count + 1;
        }
        const snap = await query.get();
        return snap.size + 1;
    } catch (err) {
        console.warn('[Leaderboard] Rank fetch failed:', err);
        return null;
    }
}

// ── Rendering ────────────────────────────────────────────────

function renderLeaderboard(entries, userScore, userRank, userCallsign, userDeviceId) {
    const list = document.getElementById('lb-list');
    if (!list) return;

    if (entries === null) {
        list.innerHTML = `<div class="lb-error">
            ⚠️ Couldn't load scores right now.<br>
            Check your connection and try again.
        </div>`;
        return;
    }

    if (entries.length === 0) {
        list.innerHTML = `<div class="lb-empty">
            <span class="lb-empty-icon">🎯</span>
            No scores yet for this period.<br>
            Be the first to claim the top spot!
        </div>`;
        return;
    }

    // Count duplicate callsigns so we know whether to disambiguate
    const nameCounts = entries.reduce((acc, { name }) => {
        const key = (name || '').toUpperCase();
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});
    // Track running occurrence index per callsign (entries are score-sorted,
    // so the highest scorer named "ED" gets (1), next gets (2), etc.)
    const nameSeen = {};

    let html = '';
    let userInTopTen = false;

    entries.forEach(({ name, score, deviceId }, index) => {
        const rank   = index + 1;
        // Match on deviceId when available (precise); fall back to callsign for legacy rows
        const isUser = (userDeviceId && deviceId && deviceId === userDeviceId)
            || (!deviceId && userCallsign && name && name.toUpperCase() === userCallsign.toUpperCase());
        if (isUser) userInTopTen = true;

        const rankClass = rank <= 3 ? `rank-${rank}` : '';
        const rankLabel = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : rank;
        const rowClass  = isUser ? 'lb-entry lb-user-entry' : 'lb-entry';
        const youBadge  = isUser ? '<span class="you-tag">YOU</span>' : '';

        // If multiple entries share this callsign, append a sequential (n) suffix
        const nameKey = (name || '').toUpperCase();
        const isDuplicate = nameCounts[nameKey] > 1;
        nameSeen[nameKey] = (nameSeen[nameKey] || 0) + 1;
        const displayName = isDuplicate ? `${name} (${nameSeen[nameKey]})` : name;

        html += `<div class="${rowClass}">
            <span class="lb-rank ${rankClass}">${rankLabel}</span>
            <span class="lb-callsign">${escapeHtml(displayName)}${youBadge}</span>
            <span class="lb-score">${Number(score).toLocaleString()}</span>
        </div>`;
    });

    // Append user row below the separator when they are outside the top 10
    if (!userInTopTen && userCallsign && userScore > 0 && userRank !== null) {
        html += `<div class="lb-separator">· · ·</div>
        <div class="lb-entry lb-user-entry">
            <span class="lb-rank">${ordinalSuffix(userRank)}</span>
            <span class="lb-callsign">${escapeHtml(userCallsign)}<span class="you-tag">YOU</span></span>
            <span class="lb-score">${Number(userScore).toLocaleString()}</span>
        </div>`;
    }

    list.innerHTML = html;
}

// ── Orchestrator ─────────────────────────────────────────────

async function loadGlobalLeaderboard(period) {
    const list = document.getElementById('lb-list');
    if (!list) return;

    list.innerHTML = `<div class="lb-loading">
        <div class="lb-skeleton"></div>
        <div class="lb-skeleton"></div>
        <div class="lb-skeleton"></div>
        <div class="lb-skeleton"></div>
        <div class="lb-skeleton"></div>
    </div>`;

    const userCallsign = localStorage.getItem('dg_callsign') || '';
    const userDeviceId = localStorage.getItem('dg_device_id') || '';
    const userScore    = (state && state.isDailyMode) ? (state.score || 0) : 0;

    const [entries, userRank] = await Promise.all([
        fetchLeaderboard(period),
        (userCallsign && userScore > 0)
            ? fetchUserRank(period, userScore)
            : Promise.resolve(null)
    ]);

    renderLeaderboard(entries, userScore, userRank, userCallsign, userDeviceId);
}

// ── Tab helpers ──────────────────────────────────────────────

/** Switch the main stats / leaderboard tab programmatically */
function lbSwitchToTab(tabName) {
    document.querySelectorAll('.lb-main-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.tab === tabName);
    });
    const showStats = (tabName === 'stats');
    document.getElementById('lb-panel-stats')?.classList.toggle('hidden', !showStats);
    document.getElementById('lb-panel-global')?.classList.toggle('hidden', showStats);
    // Update modal title to match the active view (tabs are hidden — each button opens its own view)
    const title = document.getElementById('lb-modal-title');
    if (title) {
        title.innerHTML = showStats
            ? 'YOUR <span class="highlight">STATS</span>'
            : 'DAILY <span class="highlight">LEADERBOARD</span>';
    }
}

// ── Setup: tab event listeners ───────────────────────────────

function setupLeaderboardModal() {
    // Main tabs: MY STATS ↔ LEADERBOARD
    document.querySelectorAll('.lb-main-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            lbSwitchToTab(target);
            if (target === 'global') {
                const period =
                    document.querySelector('.lb-period-tab.active')?.dataset.period || 'daily';
                loadGlobalLeaderboard(period);
            }
        });
    });

    // Period sub-tabs: DAILY | WEEKLY | MONTHLY
    document.querySelectorAll('.lb-period-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.lb-period-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            loadGlobalLeaderboard(tab.dataset.period);
        });
    });
}

// ── Post-game inline callsign panel (Option 1) ───────────────

function setupCallsignModal() {
    const panel     = document.getElementById('inline-callsign-panel');
    const input     = document.getElementById('inline-callsign-input');
    const submitBtn = document.getElementById('inline-callsign-submit-btn');

    if (!panel || !input || !submitBtn) return;

    // Live-sanitise input: strip illegal chars, force uppercase
    input.addEventListener('input', () => {
        const cleaned = input.value.replace(/[^A-Za-z0-9\-_]/g, '').toUpperCase();
        if (input.value !== cleaned) input.value = cleaned;
    });

    async function handleSubmit() {
        const callsign = sanitiseCallsign(input.value || '');
        if (!callsign) {
            input.style.borderColor = '#ff4455';
            input.focus();
            setTimeout(() => { input.style.borderColor = ''; }, 1300);
            return;
        }

        // Disable input and button
        submitBtn.disabled = true;
        input.disabled = true;

        localStorage.setItem('dg_callsign', callsign);
        state.playerName = callsign;

        // Visual feedback
        submitBtn.textContent = 'SUBMITTING...';

        const dataBeforeSubmit = getDailyData();
        const previousBestScore = dataBeforeSubmit.stats?.bestScore || 0;

        // Submit both locally and to Firestore
        submitDailyScore(callsign, state.score);
        await submitScoreToFirebase(callsign, state.score);

        // Success transition
        submitBtn.textContent = 'SUBMITTED! 🏆';
        panel.classList.add('submitted');

        // Dynamically compute and reveal streak/high score stats banner
        const dataAfterSubmit = getDailyData();
        const stats = dataAfterSubmit.stats;

        const isNewHighScore = state.score > previousBestScore && previousBestScore > 0;
        const isFirstScore = previousBestScore === 0;

        const dailySummaryBar = document.getElementById('daily-summary-bar');
        const summaryContent = document.getElementById('daily-summary-content');
        if (dailySummaryBar && summaryContent) {
            let html = '';
            if (isNewHighScore) html += `<span class="summary-highlight new-high">🏆 NEW HIGH SCORE!</span>`;
            else if (isFirstScore) html += `<span class="summary-highlight first-score">⭐ First Speedrun Complete!</span>`;
            if (stats && stats.currentStreak > 0) html += `<span class="summary-streak">🔥 ${stats.currentStreak} Day Streak</span>`;
            summaryContent.innerHTML = html;
            if (html) {
                dailySummaryBar.classList.remove('hidden');
                dailySummaryBar.style.opacity = '0';
                dailySummaryBar.style.transition = 'opacity 0.4s ease';
                setTimeout(() => { dailySummaryBar.style.opacity = '1'; }, 100);
            }
        }

        // Highlight stats/leaderboard button on the debrief screen
        const statsBtn = document.getElementById('view-daily-stats-btn');
        if (statsBtn) {
            statsBtn.classList.add('btn-pulse-cta');
        }

        // Queue the review prompt — fires next time the leaderboard is closed
        markReviewPromptCandidate({ wasNewPb: isNewHighScore });

        // Smoothly collapse panel
        setTimeout(() => {
            panel.style.transition = 'all 0.5s ease';
            panel.style.maxHeight = panel.scrollHeight + 'px';
            setTimeout(() => {
                panel.style.maxHeight = '0';
                panel.style.padding = '0';
                panel.style.marginTop = '0';
                panel.style.border = 'none';
                panel.style.opacity = '0';
                setTimeout(() => panel.classList.add('hidden'), 500);
            }, 100);
        }, 1200);
    }

    submitBtn.addEventListener('click', handleSubmit);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') handleSubmit(); });
}

// ── Post-game Callsign Submit Modal (triggered from LEADERBOARD button) ──────

function hasSubmittedDailyScoreToday() {
    const data = getDailyData();
    const todayKey = getTodaysSeed().toString();
    return !!(data.history && data.history[todayKey]);
}

function openDailyLeaderboardOnGlobal() {
    const leaderboardModal = document.getElementById('daily-leaderboard-modal');
    if (!leaderboardModal) return;
    updateLeaderboardModal();
    lbSwitchToTab('global');
    const period = document.querySelector('.lb-period-tab.active')?.dataset.period || 'daily';
    loadGlobalLeaderboard(period);
    leaderboardModal.classList.remove('hidden');
}

function openCallsignSubmitModal() {
    const modal = document.getElementById('callsign-submit-modal');
    const input = document.getElementById('callsign-submit-input');
    const submitBtn = document.getElementById('callsign-submit-btn');
    if (!modal || !input || !submitBtn) return;
    input.disabled = false;
    input.value = localStorage.getItem('dg_callsign') || '';
    submitBtn.disabled = false;
    submitBtn.textContent = 'POST SCORE 🏆';
    modal.classList.remove('hidden');
    setTimeout(() => input.focus(), 50);
}

function setupCallsignSubmitModal() {
    const modal = document.getElementById('callsign-submit-modal');
    const input = document.getElementById('callsign-submit-input');
    const submitBtn = document.getElementById('callsign-submit-btn');
    const skipBtn = document.getElementById('callsign-submit-skip-btn');
    if (!modal || !input || !submitBtn || !skipBtn) return;

    input.addEventListener('input', () => {
        const cleaned = input.value.replace(/[^A-Za-z0-9\-_]/g, '').toUpperCase();
        if (input.value !== cleaned) input.value = cleaned;
    });

    async function handleSubmit() {
        const callsign = sanitiseCallsign(input.value || '');
        if (!callsign) {
            input.style.borderColor = '#ff4455';
            input.focus();
            setTimeout(() => { input.style.borderColor = ''; }, 1300);
            return;
        }

        submitBtn.disabled = true;
        input.disabled = true;
        submitBtn.textContent = 'SUBMITTING...';

        localStorage.setItem('dg_callsign', callsign);
        state.playerName = callsign;

        const dataBeforeSubmit = getDailyData();
        const previousBestScore = dataBeforeSubmit.stats?.bestScore || 0;

        submitDailyScore(callsign, state.score);
        await submitScoreToFirebase(callsign, state.score);

        submitBtn.textContent = 'SUBMITTED! 🏆';

        // Update summary bar on debrief screen
        const dataAfterSubmit = getDailyData();
        const stats = dataAfterSubmit.stats;
        const isNewHighScore = state.score > previousBestScore && previousBestScore > 0;
        const isFirstScore = previousBestScore === 0;

        const dailySummaryBar = document.getElementById('daily-summary-bar');
        const summaryContent = document.getElementById('daily-summary-content');
        if (dailySummaryBar && summaryContent) {
            let html = '';
            if (isNewHighScore) html += `<span class="summary-highlight new-high">🏆 NEW HIGH SCORE!</span>`;
            else if (isFirstScore) html += `<span class="summary-highlight first-score">⭐ First Speedrun Complete!</span>`;
            if (stats && stats.currentStreak > 0) html += `<span class="summary-streak">🔥 ${stats.currentStreak} Day Streak</span>`;
            summaryContent.innerHTML = html;
            if (html) dailySummaryBar.classList.remove('hidden');
        }

        // Queue the review prompt for after the leaderboard is dismissed
        markReviewPromptCandidate({ wasNewPb: isNewHighScore });

        // Close submit modal then open the leaderboard
        setTimeout(() => {
            modal.classList.add('hidden');
            openDailyLeaderboardOnGlobal();
        }, 800);
    }

    submitBtn.addEventListener('click', handleSubmit);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') handleSubmit(); });
    skipBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        openDailyLeaderboardOnGlobal();
    });
    // Click outside to close (skips submission)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
}

// ── Play Store Review Prompt ─────────────────────────────────

const REVIEW_PROMPT_KEY = 'dg_review_prompt';
const REVIEW_MIN_DAILIES = 3;          // require ≥3 completed daily challenges
const REVIEW_REASK_DAYS = 30;          // 30-day cooldown after "Maybe later"
const REVIEW_REASK_MIN_NEW_DAILIES = 5; // and at least 5 more dailies played
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.defenceguesser.twa';

// Flag set by the submission flow; consumed when the leaderboard modal closes.
let _reviewPromptPending = false;

function getReviewPromptState() {
    try {
        const raw = localStorage.getItem(REVIEW_PROMPT_KEY);
        if (!raw) return { status: null, lastDismissedAt: 0, totalDaysAtDismiss: 0 };
        return JSON.parse(raw);
    } catch {
        return { status: null, lastDismissedAt: 0, totalDaysAtDismiss: 0 };
    }
}

function setReviewPromptState(patch) {
    const current = getReviewPromptState();
    const next = { ...current, ...patch };
    try { localStorage.setItem(REVIEW_PROMPT_KEY, JSON.stringify(next)); } catch {}
}

/**
 * Decide whether the review prompt should be shown right now.
 * Triggered only after a daily-challenge score has just been submitted and
 * we've confirmed it was a new personal best (handled by caller).
 */
function shouldShowReviewPrompt(totalDays) {
    const st = getReviewPromptState();
    if (st.status === 'rated') return false;
    if (typeof totalDays !== 'number' || totalDays < REVIEW_MIN_DAILIES) return false;
    if (st.status === 'dismissed') {
        const daysSince = (Date.now() - (st.lastDismissedAt || 0)) / (1000 * 60 * 60 * 24);
        if (daysSince < REVIEW_REASK_DAYS) return false;
        const newDailiesSince = totalDays - (st.totalDaysAtDismiss || 0);
        if (newDailiesSince < REVIEW_REASK_MIN_NEW_DAILIES) return false;
    }
    return true;
}

/**
 * Marks the user as a candidate for the review prompt. Called after a
 * successful daily-challenge submission that produced a new personal best.
 * The actual prompt is shown later — when the user closes the leaderboard —
 * so it doesn't interrupt the "see myself on the board" moment.
 */
function markReviewPromptCandidate({ wasNewPb }) {
    if (!wasNewPb) return;
    const stats = getDailyData().stats;
    const totalDays = stats?.totalDays || 0;
    if (shouldShowReviewPrompt(totalDays)) {
        _reviewPromptPending = true;
    }
}

function maybeShowReviewPrompt() {
    if (!_reviewPromptPending) return;
    _reviewPromptPending = false;
    const modal = document.getElementById('review-prompt-modal');
    if (modal) modal.classList.remove('hidden');
}

function setupReviewPromptModal() {
    const modal = document.getElementById('review-prompt-modal');
    const rateBtn = document.getElementById('review-rate-btn');
    const laterBtn = document.getElementById('review-later-btn');
    if (!modal || !rateBtn || !laterBtn) return;

    rateBtn.addEventListener('click', () => {
        setReviewPromptState({ status: 'rated' });
        modal.classList.add('hidden');
        // On Android the https URL is captured by the Play Store app via intent;
        // off-Android it opens the web Play Store page.
        window.open(PLAY_STORE_URL, '_blank', 'noopener');
    });

    laterBtn.addEventListener('click', () => {
        const totalDays = getDailyData().stats?.totalDays || 0;
        setReviewPromptState({
            status: 'dismissed',
            lastDismissedAt: Date.now(),
            totalDaysAtDismiss: totalDays
        });
        modal.classList.add('hidden');
    });
}

