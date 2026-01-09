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
    "United Kingdom / Sweden": ["United Kingdom", "Great Britain", "UK", "Britain", "Sweden", "Kingdom of Sweden"]
};

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
    roundResults: [],  // Track results for each round
    currentRoundResult: null,  // Track current round's result before bonus
    isDailyMode: false,  // Daily challenge mode
    playerName: ''  // Player name for daily leaderboard
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
    }
};

// Initialization
function init() {
    setupEventListeners();
    initMap();
    setupDailyChallenge();
    setupSoundToggle();
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
            startGame(false);
        }
    });
    document.getElementById('menu-btn').addEventListener('click', () => {
        switchScreen('start');
    });

    // View daily stats button (on mission debrief)
    const viewDailyStatsBtn = document.getElementById('view-daily-stats-btn');
    if (viewDailyStatsBtn) {
        viewDailyStatsBtn.addEventListener('click', () => {
            // Open the daily leaderboard modal to view stats
            const leaderboardModal = document.getElementById('daily-leaderboard-modal');
            if (leaderboardModal) {
                updateLeaderboardModal();
                leaderboardModal.classList.remove('hidden');
            }
        });
    }

    // Equipment popup minimize/maximize
    dom.closeEquipmentBtn.addEventListener('click', minimizeEquipment);
    dom.equipmentThumbnail.addEventListener('click', maximizeEquipment);

    // Practice Hub event listeners
    setupPracticeHub();

    // Help System (Terms & Conditions + How to Play)
    setupHelpSystem();

    // Daily Challenge setup
    setupDailyChallenge();
}

// Equipment Popup Controls
function minimizeEquipment() {
    dom.equipmentPopup.classList.add('minimized');
    dom.equipmentThumbnail.classList.remove('hidden');
}

function maximizeEquipment() {
    dom.equipmentPopup.classList.remove('minimized');
    dom.equipmentThumbnail.classList.add('hidden');
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

    // Filter by origin
    if (filters.origin !== 'all') {
        if (filters.origin === 'america-europe') {
            // America & Europe
            filtered = filtered.filter(eq =>
                eq.origin === 'United States' ||
                EUROPEAN_COUNTRIES.includes(eq.origin)
            );
        } else if (filters.origin === 'russia-china-iran') {
            // Russia, China & Iran
            filtered = filtered.filter(eq =>
                eq.origin === 'Russia' ||
                eq.origin === 'China' ||
                eq.origin === 'Iran'
            );
        } else if (filters.origin === 'rest-of-world') {
            // Rest of World (not America, Europe, Russia, China, or Iran)
            filtered = filtered.filter(eq =>
                eq.origin !== 'United States' &&
                !EUROPEAN_COUNTRIES.includes(eq.origin) &&
                eq.origin !== 'Russia' &&
                eq.origin !== 'China' &&
                eq.origin !== 'Iran'
            );
        }
    }

    // Filter by type
    if (filters.type !== 'all') {
        if (filters.type === 'tanks') {
            filtered = filtered.filter(eq => eq.type === 'Main Battle Tank');
        } else if (filters.type === 'aircraft') {
            filtered = filtered.filter(eq =>
                eq.type.includes('Aircraft') ||
                eq.type.includes('Helicopter') ||
                eq.type.includes('Bomber')
            );
        } else if (filters.type === 'smallarms') {
            filtered = filtered.filter(eq =>
                eq.type === 'Assault Rifle' ||
                eq.type === 'Pistol' ||
                eq.type === 'Sniper Rifle' ||
                eq.type === 'Anti-Tank Missile' ||
                eq.type === 'Small Arms'
            );
        }
    }

    return filtered;
}

function startGame(isDailyMode = false, filters = null) {
    state.score = 0;
    state.round = 1;
    state.userGuess = null;
    state.selectedCountry = null;
    state.roundResults = [];  // Reset round results
    state.currentRoundResult = null;
    state.isDailyMode = isDailyMode;

    if (isDailyMode) {
        // Use seeded random based on today's date for daily challenge
        state.gameData = getDailyEquipment();
    } else if (filters) {
        // Use filtered equipment
        let filteredData = getFilteredEquipment(filters);
        if (filteredData.length < state.maxRounds) {
            // Not enough equipment with these filters, use what we have or show warning
            if (filteredData.length === 0) {
                alert('No equipment matches your filters. Try different options.');
                return;
            }
            // Adjust max rounds or repeat equipment
            state.gameData = shuffleArray(filteredData).slice(0, Math.min(filteredData.length, state.maxRounds));
        } else {
            state.gameData = shuffleArray(filteredData).slice(0, state.maxRounds);
        }
    } else {
        state.gameData = shuffleArray(equipmentData).slice(0, state.maxRounds);
    }

    switchScreen('game');
    loadRound();

    requestAnimationFrame(() => {
        state.map.invalidateSize();
    });
}

function loadRound() {
    resetMapVisuals();
    state.currentEquipment = state.gameData[state.round - 1];
    state.userGuess = null;
    state.selectedCountry = null;

    dom.score.textContent = state.score;
    dom.round.textContent = `${state.round}/${state.maxRounds}`;

    // Get random image if equipment has multiple images (support both old 'image' and new 'images' format)
    let imageSrc;
    if (state.currentEquipment.images && state.currentEquipment.images.length > 0) {
        // Randomly select one image from the array
        const randomIndex = Math.floor(Math.random() * state.currentEquipment.images.length);
        imageSrc = state.currentEquipment.images[randomIndex];
    } else {
        // Fallback to single image property
        imageSrc = state.currentEquipment.image;
    }

    dom.image.src = imageSrc;
    dom.thumbnailImage.src = imageSrc;



    // Show popup, hide thumbnail
    dom.equipmentPopup.classList.remove('minimized');
    dom.equipmentThumbnail.classList.add('hidden');

    const loader = document.querySelector('.loader');
    loader.classList.remove('hidden');
    loader.textContent = "ACCESSING ARCHIVE...";
    dom.image.classList.remove('loaded');

    dom.image.onload = () => {
        loader.classList.add('hidden');
        dom.image.classList.add('loaded');
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

    const equipment = state.currentEquipment;
    const actual = { lat: equipment.coords[0], lng: equipment.coords[1] };

    let isCorrectCountry = false;

    if (state.selectedCountry) {
        const aliases = COUNTRY_ALIASES[equipment.origin] || [equipment.origin];
        isCorrectCountry = aliases.some(alias =>
            state.selectedCountry.toLowerCase() === alias.toLowerCase() ||
            state.selectedCountry.toLowerCase().includes(alias.toLowerCase()) ||
            alias.toLowerCase().includes(state.selectedCountry.toLowerCase())
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

    state.score += points;

    // Store current round result (will be completed after bonus)
    state.currentRoundResult = {
        round: state.round,
        equipment: state.currentEquipment.name,
        origin: state.currentEquipment.origin,
        type: state.currentEquipment.type,
        locationCorrect: isCorrectCountry,
        locationPoints: points,
        bonusCorrect: false,  // Will be updated after bonus
        bonusPoints: 0,
        totalPoints: points
    };

    showRoundResult(distanceKm, points, actual, state.selectedCountry || "Unknown Territory", isCorrectCountry);
}

function showRoundResult(distance, points, actual, detectedName, isCorrect) {
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

    dom.resultDetails.origin.textContent = state.currentEquipment.origin;

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

    // Reset bonus section for new round
    state.bonusSubmitted = false;
    dom.bonus.section.classList.remove('disabled');
    dom.bonus.result.textContent = '';
    dom.bonus.result.className = 'bonus-result';

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
        const bonusPoints = 5000;
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

    // Save the round result
    if (state.currentRoundResult) {
        state.roundResults.push({ ...state.currentRoundResult });
        state.currentRoundResult = null;
    }

    // Show equipment summary after bonus is answered
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

    // Populate summary fields
    dom.summary.year.textContent = equipment.inService;
    dom.summary.status.textContent = equipment.status;
    dom.summary.users.textContent = equipment.users.join(', ');

    // Populate detailed specs
    document.getElementById('summary-speed').textContent = equipment.specs.speed || '-';
    document.getElementById('summary-armament').textContent = equipment.specs.armament || '-';

    // Get range info with appropriate label
    const rangeInfo = getRangeInfo(equipment.specs);
    document.getElementById('summary-range').textContent = rangeInfo.value;
    document.getElementById('summary-range-label').textContent = rangeInfo.label + ':';

    // Populate image credit if available
    const creditElement = document.getElementById('summary-image-credit');
    if (equipment.imageCredit) {
        if (typeof equipment.imageCredit === 'string') {
            creditElement.textContent = equipment.imageCredit;
        } else {
            // Handle object format: { author, source, license, url }
            const credit = equipment.imageCredit;
            const creditText = `Photo: ${credit.author} / ${credit.source} / ${credit.license}`;
            if (credit.url) {
                creditElement.innerHTML = `<a href="${credit.url}" target="_blank" rel="noopener">${creditText}</a>`;
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
        } else if (features.wings) {
            // WEFT Format (Aircraft)
            labels = ["W - WINGS:", "E - ENGINE:", "F - FUSELAGE:", "T - TAIL:"];
            values = [features.wings, features.engine, features.fuselage, features.tail];
        } else {
            // WHAT Format (Tanks/Vehicles) - Default
            labels = ["W - WHEELS:", "H - HULL:", "A - ARMAMENT:", "T - TURRET:"];
            values = [features.wheels, features.hull, features.armament, features.turret];
        }

        // Populate generic fields
        for (let i = 0; i < 4; i++) {
            const labelElement = document.getElementById(`result-recognition-label-${i + 1}`);
            const valueElement = document.getElementById(`result-recognition-value-${i + 1}`);
            if (labelElement && valueElement) {
                labelElement.textContent = labels[i];
                valueElement.textContent = values[i] || '-';
            }
        }

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
        { text: '"I\'m an expert in everything. Except for the things I don\'t know, and those things aren\'t worth knowing."', author: 'Lord Flashheart (Blackadder)' },
        { text: '"Success is a science; if you have the conditions, you get the result."', author: 'Oscar Wilde' },
        { text: '"I have nothing to declare except my genius."', author: 'Oscar Wilde' },
        { text: '"Soldiers! I am pleased with you. On the day of Austerlitz, you have justified all that I expected from your intrepidity; you have adorned your eagles with immortal glory."', author: 'Napoleon Bonaparte' },
        { text: '"Far better it is to dare mighty things, to win glorious triumphs… than to rank with those poor spirits who neither enjoy nor suffer much."', author: 'Theodore Roosevelt' },
        { text: '"Victorious warriors win first and then go to war."', author: 'Sun Tzu' },
        { text: '"Excellence is never an accident."', author: 'Aristotle' },
        { text: '"To improve is to change; to be perfect is to change often."', author: 'Winston Churchill' },
        { text: '"Excellence is a continuous process, not an accident."', author: 'Leonardo da Vinci' },
        { text: '"The superior man is modest in his speech, but exceeds in his actions."', author: 'Confucius' }
    ],
    'John Rambo': [
        { text: '"To survive a war, you gotta become war."', author: 'Rambo' },
        { text: '"They drew first blood, not me."', author: 'Rambo' },
        { text: '"I\'m no tourist."', author: 'Rambo' },
        { text: '"Who are you?" — "Your worst nightmare."', author: 'Rambo' }
    ],
    'John Matrix (Commando)': [
        { text: '"I eat Green Berets for breakfast. And right now I\'m very hungry!"', author: 'John Matrix' },
        { text: '"Let off some steam, Bennett."', author: 'John Matrix' },
        { text: '"Leave anything for us?" — "Just bodies."', author: 'General Kirby & John Matrix' }
    ],
    'Maj Richard Sharpe': [
        { text: '"War\'s not about glory. It\'s about staying alive long enough to see the next dawn."', author: 'Sharpe' },
        { text: '"Fight well, fight hard!"', author: 'Sharpe' }
    ],
    'Maj Winters': [
        { text: '"We\'re paratroopers, Lieutenant. We\'re supposed to be surrounded."', author: 'Maj Winters' },
        { text: '"I\'m not asking you to do anything I wouldn\'t do myself. Now, let\'s go."', author: 'Maj Winters' },
        { text: '"Captain Sobel, we salute the rank, not the man."', author: 'Maj Winters' }
    ],
    'Johnny Rico': [
        { text: '"Come on you apes, you wanna live forever?!"', author: 'Johnny Rico' },
        { text: '"The only good bug is a dead bug!"', author: 'Johnny Rico' },
        { text: '"No guts, no glory."', author: 'Johnny Rico' }
    ],
    'Lt Aldo Rain': [
        { text: '"You know somethin\', Utivich? I think this just might be my masterpiece."', author: 'Lt Aldo Rain' }
    ],
    'Pte Gump': [
        { text: '"I\'m pretty tired... I think I\'ll go home now."', author: 'Pte Gump' },
        { text: '"I may not be a smart man, but I know what love is."', author: 'Pte Gump' },
        { text: '"Sometimes, there just aren\'t enough rocks."', author: 'Pte Gump' }
    ],
    'Capt Sobel': [
        { text: '"Your weekend pass is revoked."', author: 'Capt Sobel' },
        { text: '"Hi-ho, Silver!"', author: 'Capt Sobel' },
        { text: '"You people are the sorriest excuse for soldiers I\'ve ever seen."', author: 'Capt Sobel' }
    ],
    'Gen Melchett': [
        { text: '"There is one thing that will help you through this, Blackadder: total, utter, blind stupidity!"', author: 'Gen Melchett' },
        { text: '"Doing precisely what we\'ve done eighteen times before is exactly the last thing they would expect us to do this time!"', author: 'Gen Melchett' }
    ],
    'Pte Baldrick': [
        { text: '"I\'m not a complete idiot. Some parts are missing."', author: 'Pte Baldrick' },
        { text: '"Don\'t worry, sir. I\'ve got a cunning plan."', author: 'Pte Baldrick' }
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
    // Play game over fanfare
    playGameOverSound();

    // Populate final score
    document.getElementById('final-score').textContent = state.score;

    // Calculate performance rating
    const maxPossibleScore = state.maxRounds * 10000; // 5000 location + 5000 bonus
    const percentage = (state.score / maxPossibleScore) * 100;
    let rating = 'LIZZARD'; // 0-9%

    if (percentage >= 100) rating = 'God of War';
    else if (percentage >= 90) rating = 'John Rambo';
    else if (percentage >= 80) rating = 'John Matrix (Commando)';
    else if (percentage >= 75) rating = 'Maj Richard Sharpe';
    else if (percentage >= 70) rating = 'Maj Winters';
    else if (percentage >= 60) rating = 'Johnny Rico';
    else if (percentage >= 50) rating = 'Lt Aldo Rain';
    else if (percentage >= 40) rating = 'Pte Gump';
    else if (percentage >= 30) rating = 'Capt Sobel';
    else if (percentage >= 20) rating = 'Gen Melchett';
    else if (percentage >= 10) rating = 'Pte Baldrick';

    document.getElementById('rating-value').textContent = rating;

    // Apply RAG color class based on percentage
    const scoreRating = document.getElementById('score-rating');
    scoreRating.classList.remove('rating-red', 'rating-amber', 'rating-green', 'rating-gold');

    if (percentage >= 100) {
        scoreRating.classList.add('rating-gold');
    } else if (percentage >= 80) {
        scoreRating.classList.add('rating-green');
    } else if (percentage >= 50) {
        scoreRating.classList.add('rating-amber');
    } else {
        scoreRating.classList.add('rating-red');
    }

    // Display performance quote if available for this rating
    const quoteContainer = document.getElementById('rating-quote');
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const quote = getRandomQuote(rating);

    if (quote) {
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = `— ${quote.author}`;
        quoteContainer.classList.remove('hidden');
    } else {
        quoteContainer.classList.add('hidden');
    }



    // Calculate stats
    const correctLocations = state.roundResults.filter(r => r.locationCorrect).length;
    const correctIds = state.roundResults.filter(r => r.bonusCorrect).length;
    const accuracy = Math.round((state.score / maxPossibleScore) * 100);

    document.getElementById('stat-correct-locations').textContent = `${correctLocations}/${state.maxRounds}`;
    document.getElementById('stat-correct-ids').textContent = `${correctIds}/${state.maxRounds}`;
    document.getElementById('stat-accuracy').textContent = `${accuracy}%`;

    // Handle daily summary display and stats button
    const dailySummaryBar = document.getElementById('daily-summary-bar');
    const viewDailyStatsBtn = document.getElementById('view-daily-stats-btn');

    if (state.isDailyMode && state.playerName) {
        // Show the stats button for daily challenges
        if (viewDailyStatsBtn) {
            viewDailyStatsBtn.classList.remove('hidden');
        }

        // Get previous best score BEFORE submitting new score
        const dataBeforeSubmit = getDailyData();
        const previousBestScore = dataBeforeSubmit.stats?.bestScore || 0;

        // Submit score
        submitDailyScore(state.playerName, state.score);

        // Get updated stats
        const dataAfterSubmit = getDailyData();
        const stats = dataAfterSubmit.stats;

        // Check if this is a new high score
        const isNewHighScore = state.score > previousBestScore && previousBestScore > 0;
        const isFirstScore = previousBestScore === 0;

        // Build summary content
        const summaryContent = document.getElementById('daily-summary-content');
        let html = '';

        if (isNewHighScore) {
            html += `<span class="summary-highlight new-high">🏆 NEW HIGH SCORE!</span>`;
        } else if (isFirstScore) {
            html += `<span class="summary-highlight first-score">⭐ First Daily Challenge Complete!</span>`;
        }

        // Add streak info
        if (stats && stats.currentStreak > 0) {
            html += `<span class="summary-streak">🔥 ${stats.currentStreak} Day Streak</span>`;
        }

        summaryContent.innerHTML = html;

        // Show the bar (only if there's content to show)
        if (html) {
            dailySummaryBar.classList.remove('hidden');
        } else {
            dailySummaryBar.classList.add('hidden');
        }
    } else {
        // Hide summary bar and stats button for non-daily games
        dailySummaryBar.classList.add('hidden');
        if (viewDailyStatsBtn) {
            viewDailyStatsBtn.classList.add('hidden');
        }
    }

    switchScreen('gameOver');
}

// Helpers
function switchScreen(screenName) {
    Object.values(screens).forEach(el => el.classList.add('hidden'));

    if (screenName === 'result') {
        screens.game.classList.remove('hidden');
        screens.result.classList.remove('hidden');
    } else {
        screens[screenName].classList.remove('hidden');
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

// Equipment Popup Controls
function minimizeEquipment() {
    dom.equipmentPopup.classList.add('minimized');
    dom.equipmentThumbnail.classList.remove('hidden');
    // Set thumbnail image to match current equipment
    dom.thumbnailImage.src = dom.image.src;
}

function maximizeEquipment() {
    dom.equipmentPopup.classList.remove('minimized');
    dom.equipmentThumbnail.classList.add('hidden');
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
            // Special handling for APC/IFV category
            if (practiceState.currentCategory === 'APC/IFV') {
                return eq.type === 'Infantry Fighting Vehicle' ||
                    eq.type === 'Armoured Personnel Carrier' ||
                    eq.type === 'Armoured Fighting Vehicle' ||
                    eq.type === 'Amphibious Combat Vehicle' ||
                    eq.type === 'Amphibious Fighting Vehicle' ||
                    eq.type === 'Protected Mobility Vehicle';
            }
            // Special handling for Light Vehicles category
            if (practiceState.currentCategory === 'Light Vehicles') {
                return eq.type === 'Light Utility Vehicle' ||
                    eq.type === 'MRAP Vehicle' ||
                    eq.type === 'Protected Patrol Vehicle' ||
                    eq.type === 'Patrol Vehicle';
            }
            // Special handling for Drones & Missiles category
            if (practiceState.currentCategory === 'Drones & Missiles') {
                return eq.type === 'Combat Drone' ||
                    eq.type === 'Reconnaissance Drone' ||
                    eq.type === 'Cruise Missile' ||
                    eq.type === 'Anti-Tank Missile' ||
                    eq.type === 'Intercontinental Ballistic Missile' ||
                    eq.type === 'Tactical Ballistic Missile';
            }
            // Special handling for Support Vehicles category
            if (practiceState.currentCategory === 'Support Vehicles') {
                return eq.type === 'Electronic Warfare System' ||
                    eq.type === 'Command and Communication Vehicle' ||
                    eq.type === 'Armoured Vehicle Launched Bridge' ||
                    eq.type === 'Wheeled Vehicle-Launched Bridge' ||
                    eq.type === 'Mine-Clearing Vehicle' ||
                    eq.type === 'Minelayer' ||
                    eq.type === 'Multi-Purpose Tracked Vehicle';
            }
            // Special handling for aircraft category - include all aircraft types including helicopters
            if (practiceState.currentCategory === 'Fighter Aircraft') {
                return eq.type.includes('Aircraft') || eq.type.includes('Helicopter');
            }
            // Special handling for Small Arms category - include rifles, pistols, sniper rifles, shotguns, machine guns
            if (practiceState.currentCategory === 'Small Arms') {
                return eq.type === 'Assault Rifle' ||
                    eq.type === 'Sniper Rifle' ||
                    eq.type === 'Pistol' ||
                    eq.type === 'Combat Shotgun' ||
                    eq.type === 'Submachine Gun' ||
                    eq.type === 'Small Arms' ||
                    eq.type === 'Machine Gun';
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
        <img class="equipment-card-image" src="${imageSrc}" alt="${equipment.name}" onerror="this.src='https://placehold.co/200x220/1a1a1a/00ff88?text=${encodeURIComponent(equipment.name)}'">
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

    // Dot click navigation
    const dots = document.querySelectorAll('.page-dot');
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
    const dots = document.querySelectorAll('.page-dot');
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
        } else if (features.wings) {
            // WEFT Format (Aircraft)
            labels = ["W - WINGS:", "E - ENGINE:", "F - FUSELAGE:", "T - TAIL:"];
            values = [features.wings, features.engine, features.fuselage, features.tail];
        } else {
            // WHAT Format (Tanks/Vehicles) - Default
            labels = ["W - WHEELS:", "H - HULL:", "A - ARMAMENT:", "T - TURRET:"];
            values = [features.wheels, features.hull, features.armament, features.turret];
        }

        // Populate generic fields
        for (let i = 0; i < 4; i++) {
            document.getElementById(`recognition-label-${i + 1}`).textContent = labels[i];
            document.getElementById(`recognition-value-${i + 1}`).textContent = values[i] || '-';
        }

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
            const text = `Photo: ${credit.author} / ${credit.source} / ${credit.license}`;
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

    // Options modal - View Leaderboard button
    viewLeaderboardBtn.addEventListener('click', () => {
        optionsModal.classList.add('hidden');
        updateLeaderboardModal();
        leaderboardModal.classList.remove('hidden');
    });

    // Leaderboard modal - Close button (top X)
    leaderboardCloseBtn.addEventListener('click', () => {
        leaderboardModal.classList.add('hidden');
        optionsModal.classList.remove('hidden');
    });

    // Leaderboard modal - Close button (bottom)
    const leaderboardCloseBottomBtn = document.getElementById('leaderboard-close-btn-bottom');
    if (leaderboardCloseBottomBtn) {
        leaderboardCloseBottomBtn.addEventListener('click', () => {
            leaderboardModal.classList.add('hidden');
            optionsModal.classList.remove('hidden');
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

    // Fixed Y-axis scale: 0 - 50,000
    const maxScore = 50000;
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
    const shuffled = [...equipmentData];

    // Fisher-Yates shuffle with seeded random
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(seededRandom(seed + i) * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, state.maxRounds);
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
        timestamp: Date.now()
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
