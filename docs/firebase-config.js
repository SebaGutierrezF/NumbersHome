// Importaciones usando CDN para GitHub Pages
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore, collection, getDocs, addDoc, query, where, orderBy, limit } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { firebaseConfig } from './config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Función para guardar datos en Firebase
export async function saveToFirebase(data) {
    try {
        const docRef = await addDoc(collection(db, 'numbers'), {
            ...data,
            timestamp: new Date()
        });
        return docRef.id;
    } catch (error) {
        console.error("Error saving to Firebase: ", error);
        throw error;
    }
}

// Función para consultar datos en Firebase
export async function queryFirebase(phoneNumber) {
    try {
        const numbersRef = collection(db, 'numbers');
        const q = query(
            numbersRef,
            where('phoneNumber', '==', phoneNumber),
            orderBy('timestamp', 'desc'),
            limit(1)
        );
        const querySnapshot = await getDocs(q);
        return querySnapshot.empty ? null : querySnapshot.docs[0].data();
    } catch (error) {
        console.error("Error querying Firebase: ", error);
        throw error;
    }
}