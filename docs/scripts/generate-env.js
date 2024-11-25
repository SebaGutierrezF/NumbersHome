import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envContent = `window.env = {
    VITE_FIREBASE_API_KEY: '${process.env.VITE_FIREBASE_API_KEY}',
    VITE_FIREBASE_AUTH_DOMAIN: '${process.env.VITE_FIREBASE_AUTH_DOMAIN}',
    VITE_FIREBASE_PROJECT_ID: '${process.env.VITE_FIREBASE_PROJECT_ID}',
    VITE_FIREBASE_STORAGE_BUCKET: '${process.env.VITE_FIREBASE_STORAGE_BUCKET}',
    VITE_FIREBASE_MESSAGING_SENDER_ID: '${process.env.VITE_FIREBASE_MESSAGING_SENDER_ID}',
    VITE_FIREBASE_APP_ID: '${process.env.VITE_FIREBASE_APP_ID}',
    VITE_MEASUREMENT_ID: '${process.env.VITE_MEASUREMENT_ID}'
};`;

try {
    await writeFile(join(__dirname, '../dist/env.js'), envContent);
    console.log('Environment variables generated successfully!');
} catch (error) {
    console.error('Error generating environment variables:', error);
    process.exit(1);
}
