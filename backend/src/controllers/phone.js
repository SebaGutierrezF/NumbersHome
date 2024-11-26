// phone.js
import axios from 'axios';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import dotenv from 'dotenv';
import {
    validatePhoneNumber,
    saveValidationToFirebase,
    getValidationFromFirebase
} from '../services/phoneValidation.js';

// Configurar variables de entorno
dotenv.config();

// Inicializar Firebase Admin
const firebaseAdmin = initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT))
});

const db = getFirestore();

// Validar número de teléfono
export async function validatePhone(req, res) {
    try {
        const { phoneNumber } = req.body;

        if (!phoneNumber) {
            return res.status(400).json({
                error: 'Se requiere un número de teléfono'
            });
        }

        // Primero intentar obtener de cache
        const cachedValidation = await getValidationFromFirebase(phoneNumber);
        if (cachedValidation) {
            return res.json({
                ...cachedValidation,
                cached: true
            });
        }

        // Si no está en cache, validar con API externa
        const validationResult = await validatePhoneNumber(phoneNumber);
        
        // Guardar en Firebase (async)
        saveValidationToFirebase(validationResult).catch(error => {
            console.error('Error saving validation:', error);
        });

        res.json({
            ...validationResult,
            cached: false
        });
    } catch (error) {
        console.error('Error in phone validation:', error);
        res.status(500).json({
            error: 'Error al procesar la validación del número'
        });
    }
}
