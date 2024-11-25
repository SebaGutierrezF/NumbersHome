# Phone Validator

Aplicación web para validar números telefónicos internacionales y obtener información detallada sobre ellos.

## Características

- Validación de formato de números telefónicos
- Búsqueda en base de datos Firebase
- Consulta a API externa de validación
- Interfaz multiidioma
- Visualización de resultados detallados

## Configuración

1. Clona el repositorio
2. Copia `.env.example` a `.env`
3. Configura tus variables de entorno:
   ```
   VITE_FIREBASE_API_KEY=tu_api_key
   VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
   VITE_FIREBASE_PROJECT_ID=tu_project_id
   VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
   VITE_FIREBASE_APP_ID=tu_app_id
   ```
4. Instala las dependencias: `npm install`
5. Inicia el servidor de desarrollo: `npm run dev`

## Tecnologías utilizadas

- JavaScript
- Firebase
- Vite
- HTML/CSS