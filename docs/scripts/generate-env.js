const fs = require('fs');
const path = require('path');
const url = require('url');

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envContent = `window.env = {
    VITE_FIREBASE_API_KEY: '${process.env.VITE_FIREBASE_API_KEY || ""}',
    VITE_FIREBASE_AUTH_DOMAIN: '${process.env.VITE_FIREBASE_AUTH_DOMAIN || ""}',
    VITE_FIREBASE_PROJECT_ID: '${process.env.VITE_FIREBASE_PROJECT_ID || ""}',
    VITE_FIREBASE_STORAGE_BUCKET: '${process.env.VITE_FIREBASE_STORAGE_BUCKET || ""}',
    VITE_FIREBASE_MESSAGING_SENDER_ID: '${process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || ""}',
    VITE_FIREBASE_APP_ID: '${process.env.VITE_FIREBASE_APP_ID || ""}',
    VITE_MEASUREMENT_ID: '${process.env.VITE_MEASUREMENT_ID || ""}'
};`;

try {
    const envPath = path.join(__dirname, '..', 'env.js');
    fs.writeFileSync(envPath, envContent);
    console.log('Environment variables generated successfully!');
} catch (error) {
    console.error('Error generating environment variables:', error);
    process.exit(1);
}
