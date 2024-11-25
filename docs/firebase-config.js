import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Funciones de utilidad para Firebase
export const saveToFirebase = async (collection, data) => {
    try {
        const docRef = await addDoc(collection(db, collection), data);
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error('Error saving to Firebase:', error);
        return { success: false, error };
    }
};

export const queryFirebase = async (collectionName, field, value) => {
    try {
        const q = query(
            collection(db, collectionName),
            where(field, '==', value)
        );
        const querySnapshot = await getDocs(q);
        return { success: true, data: querySnapshot };
    } catch (error) {
        console.error('Error querying Firebase:', error);
        return { success: false, error };
    }
};

export { db };