// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Obtener configuración de Firebase desde las variables de entorno
const firebaseConfig = {
    apiKey: window.secrets?.VITE_FIREBASE_API_KEY,
    authDomain: window.secrets?.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: window.secrets?.VITE_FIREBASE_PROJECT_ID,
    storageBucket: window.secrets?.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: window.secrets?.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: window.secrets?.VITE_FIREBASE_APP_ID,
    measurementId: window.secrets?.VITE_MEASUREMENT_ID
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar los servicios
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
