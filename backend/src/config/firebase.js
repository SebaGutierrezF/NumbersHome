// firebase.js
import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

// Inicializar Firebase Admin
try {
    let serviceAccount;
    const rawServiceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;

    if (!rawServiceAccount) {
        throw new Error('FIREBASE_SERVICE_ACCOUNT environment variable is not defined');
    }

    try {
        // Intentar parsear la variable de entorno como JSON
        serviceAccount = JSON.parse(rawServiceAccount);
    } catch (parseError) {
        console.error('Error parsing FIREBASE_SERVICE_ACCOUNT:', parseError);
        
        // Verificar si es una cadena base64
        try {
            const decodedServiceAccount = Buffer.from(rawServiceAccount, 'base64').toString();
            serviceAccount = JSON.parse(decodedServiceAccount);
            console.log('Successfully parsed base64 service account');
        } catch (base64Error) {
            console.error('Error parsing base64 service account:', base64Error);
            throw new Error('FIREBASE_SERVICE_ACCOUNT must be a valid JSON or base64 encoded JSON');
        }
    }

    // Validar que el serviceAccount tenga los campos requeridos
    const requiredFields = ['type', 'project_id', 'private_key_id', 'private_key', 'client_email'];
    const missingFields = requiredFields.filter(field => !serviceAccount[field]);
    
    if (missingFields.length > 0) {
        throw new Error(`Service account is missing required fields: ${missingFields.join(', ')}`);
    }

    // Inicializar Firebase Admin
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });

    console.log('Firebase Admin initialized successfully for project:', serviceAccount.project_id);
} catch (error) {
    console.error('Error initializing Firebase Admin:', error);
    throw error; // Propagar el error para que pueda ser manejado por el servidor
}

// Exportar las instancias necesarias
export const db = admin.firestore();
export const auth = admin.auth();
export default admin;
