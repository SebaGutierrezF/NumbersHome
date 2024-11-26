// Importaciones usando CDN para GitHub Pages
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Obtener configuración de Firebase desde las variables de entorno
const firebaseConfig = {
    apiKey: secrets.VITE_FIREBASE_API_KEY,
    authDomain: secrets.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: secrets.VITE_FIREBASE_PROJECT_ID,
    storageBucket: secrets.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: secrets.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: secrets.VITE_FIREBASE_APP_ID,
    measurementId: secrets.VITE_MEASUREMENT_ID
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar los servicios que necesitas
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };

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