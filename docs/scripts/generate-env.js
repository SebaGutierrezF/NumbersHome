import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envContent = `
// Este archivo es generado automáticamente - No editar manualmente
window.secrets = {
    VITE_FIREBASE_API_KEY: "${process.env.VITE_FIREBASE_API_KEY}",
    VITE_FIREBASE_AUTH_DOMAIN: "${process.env.VITE_FIREBASE_AUTH_DOMAIN}",
    VITE_FIREBASE_PROJECT_ID: "${process.env.VITE_FIREBASE_PROJECT_ID}",
    VITE_FIREBASE_STORAGE_BUCKET: "${process.env.VITE_FIREBASE_STORAGE_BUCKET}",
    VITE_FIREBASE_MESSAGING_SENDER_ID: "${process.env.VITE_FIREBASE_MESSAGING_SENDER_ID}",
    VITE_FIREBASE_APP_ID: "${process.env.VITE_FIREBASE_APP_ID}",
    VITE_MEASUREMENT_ID: "${process.env.VITE_MEASUREMENT_ID}"
};
`;

const envPath = join(__dirname, '../env.js');

try {
    writeFileSync(envPath, envContent);
    console.log('env.js generado exitosamente');
} catch (error) {
    console.error('Error generando env.js:', error);
    process.exit(1);
}
