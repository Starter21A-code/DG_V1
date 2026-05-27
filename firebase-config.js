// ============================================================
// Defence Guesser — Firebase Configuration
// Cloud Firestore leaderboard backend
// ============================================================

const firebaseConfig = {
    apiKey: "AIzaSyDlvM842DaVcrMHRgcLxXTpr9X21EPc0_Y",
    authDomain: "defenceguesser-leaderboard.firebaseapp.com",
    projectId: "defenceguesser-leaderboard",
    storageBucket: "defenceguesser-leaderboard.firebasestorage.app",
    messagingSenderId: "376742964325",
    appId: "1:376742964325:web:12cf46b0f36ed4392baa8c",
    measurementId: "G-V3KGQKGKH0"
};

// Initialise Firebase app and expose Firestore globally
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

console.log('[Firebase] Initialised — Firestore ready.');
