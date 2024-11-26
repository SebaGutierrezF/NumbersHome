// firebase.js
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { logger } from '../utils/logger.js';

let db = null;

export function initializeFirebase() {
    try {
        if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
            throw new Error('FIREBASE_SERVICE_ACCOUNT environment variable is not set');
        }

        // Decodificar el string base64 a JSON
        const base64Decoded = Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT, 'base64').toString('utf-8');
        const serviceAccount = JSON.parse(base64Decoded);
        
        if (!serviceAccount.project_id || !serviceAccount.private_key || !serviceAccount.client_email) {
            throw new Error('Invalid Firebase service account configuration');
        }

        const app = initializeApp({
            credential: cert(serviceAccount)
        });

        db = getFirestore(app);
        logger.info('Firebase initialized successfully for project:', serviceAccount.project_id);
    } catch (error) {
        logger.error('Error initializing Firebase:', error);
        throw error;
    }
}

export function getDb() {
    if (!db) {
        throw new Error('Firebase has not been initialized. Call initializeFirebase() first.');
    }
    return db;
}
