// Importaciones usando CDN para GitHub Pages
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore, collection, getDocs, addDoc, query, where, orderBy, limit } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

// Función para obtener las variables de entorno
function getEnvConfig() {
    if (!window.env) {
        console.error('Environment variables not found. Please make sure you have configured the GitHub secrets.');
        throw new Error('Missing environment configuration');
    }

    return {
        apiKey: window.env.VITE_FIREBASE_API_KEY,
        authDomain: window.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: window.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: window.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: window.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: window.env.VITE_FIREBASE_APP_ID,
        measurementId: window.env.VITE_MEASUREMENT_ID
    };
}

const firebaseConfig = getEnvConfig();

// Initialize Firebase
let app;
let db;

try {
    if (!firebaseConfig.projectId) {
        throw new Error('Firebase Project ID is missing');
    }
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log('Firebase initialized successfully');
} catch (error) {
    console.error('Error initializing Firebase:', error);
    throw error;
}

export { db };

// Función para guardar datos en Firebase
export async function saveToFirebase(data) {
    try {
        if (!db) {
            throw new Error('Firebase not initialized');
        }
        console.log('Saving data to Firebase:', { ...data, timestamp: new Date() });
        const docRef = await addDoc(collection(db, 'numbers'), {
            ...data,
            timestamp: new Date()
        });
        console.log('Data saved successfully with ID:', docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error saving to Firebase:", error);
        throw error;
    }
}

// Función para consultar datos en Firebase
export async function queryFirebase(phoneNumber) {
    try {
        if (!db) {
            throw new Error('Firebase not initialized');
        }
        console.log('Querying Firebase for phone number:', phoneNumber);
        const numbersRef = collection(db, 'numbers');
        const q = query(
            numbersRef,
            where('phoneNumber', '==', phoneNumber),
            orderBy('timestamp', 'desc'),
            limit(1)
        );
        const querySnapshot = await getDocs(q);
        console.log('Query result:', querySnapshot.empty ? 'No data found' : 'Data found');
        return querySnapshot.empty ? null : querySnapshot.docs[0].data();
    } catch (error) {
        console.error("Error querying Firebase:", error);
        throw error;
    }
}