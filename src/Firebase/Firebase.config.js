import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyD-frT67O0bMikyG23OFlI6dXNUpmQ26iU",
    authDomain: "solosphere-99760.firebaseapp.com",
    projectId: "solosphere-99760",
    storageBucket: "solosphere-99760.firebasestorage.app",
    messagingSenderId: "1095221053970",
    appId: "1:1095221053970:web:a0b6bde3ac1b316ebf26cb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);