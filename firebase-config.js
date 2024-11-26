// Importaciones usando CDN para GitHub Pages
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, query, where, orderBy, limit } from 'firebase/firestore';

// Función para obtener las variables de entorno
function getEnvConfig() {
    // Intentar obtener las variables de window.env (para GitHub Pages)
    if (window.env) {
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
    
    // Si no está window.env, usar import.meta.env (para desarrollo local)
    return {
        apiKey: secrets.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
        measurementId: import.meta.env.VITE_MEASUREMENT_ID
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
        console.log('Document written with ID: ', docRef.id);
        return docRef;
    } catch (error) {
        console.error('Error saving to Firebase:', error);
        throw error;
    }
}

// Función para consultar datos en Firebase
export async function queryFirebase(phoneNumber) {
    try {
        if (!db) {
            throw new Error('Firebase not initialized');
        }
        const q = query(
            collection(db, 'numbers'),
            where('phoneNumber', '==', phoneNumber),
            orderBy('timestamp', 'desc'),
            limit(1)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            return null;
        }
        return querySnapshot.docs[0].data();
    } catch (error) {
        console.error('Error querying Firebase:', error);
        throw error;
    }
}