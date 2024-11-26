// firebase.js
import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

// Inicializar Firebase Admin
try {
    let serviceAccount;
    
    try {
        // Intentar parsear la variable de entorno como JSON
        serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    } catch (parseError) {
        console.error('Error parsing FIREBASE_SERVICE_ACCOUNT:', parseError);
        // Si no se puede parsear, usar el valor como está
        serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;
    }

    if (!serviceAccount) {
        throw new Error('FIREBASE_SERVICE_ACCOUNT is not defined');
    }

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });

    console.log('Firebase Admin initialized successfully');
} catch (error) {
    console.error('Error initializing Firebase Admin:', error);
    throw error; // Propagar el error en lugar de terminar el proceso
}

export const db = admin.firestore();
export default admin;
