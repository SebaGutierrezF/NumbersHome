# NumbersHome - Validación de Números Telefónicos

Aplicación web para validar números telefónicos internacionales y obtener información detallada sobre ellos.

## Características

- Validación de números telefónicos internacionales
- Información detallada del número (país, operador, tipo)
- Visualización de ubicación en mapa
- Cache de resultados con Firebase
- Interfaz de usuario moderna y responsiva

## Tecnologías

- Frontend:
  - Vite
  - Firebase (Firestore)
  - Leaflet (mapas)
  - CSS moderno
- Backend:
  - Node.js
  - Express
  - Firebase Admin SDK
  - NumLookup API

## Estructura del Proyecto

```
NumberHome/
├── frontend/                # Aplicación frontend (Vite)
│   ├── src/
│   │   ├── components/     # Componentes UI
│   │   ├── config/        # Configuración (Firebase)
│   │   ├── services/      # Servicios (API)
│   │   └── styles/        # Estilos CSS
│   ├── public/            # Archivos estáticos
│   └── index.html         # Página principal
│
├── backend/               # Servidor Express
│   ├── src/
│   │   ├── config/       # Configuraciones
│   │   ├── controllers/  # Controladores
│   │   ├── services/     # Servicios
│   │   └── server.js     # Punto de entrada
│   └── .env              # Variables de entorno
│
└── README.md             # Este archivo
```

## Configuración

1. Frontend:
   ```bash
   cd frontend
   npm install
   cp .env.example .env    # Configura las variables de Firebase
   npm run dev
   ```

2. Backend:
   ```bash
   cd backend
   npm install
   cp .env.example .env    # Configura API_KEY y Firebase Admin
   npm run dev
   ```

## Variables de Entorno

### Frontend (.env)
```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_MEASUREMENT_ID=
```

### Backend (.env)
```
PORT=3000
CORS_ORIGIN=http://localhost:5173
API_KEY=your_numlookup_api_key
FIREBASE_SERVICE_ACCOUNT={}
```

## Desarrollo

1. Frontend:
   - `npm run dev`: Inicia servidor de desarrollo
   - `npm run build`: Construye para producción
   - `npm run preview`: Vista previa de producción

2. Backend:
   - `npm run dev`: Inicia servidor con nodemon
   - `npm start`: Inicia servidor para producción

## Despliegue

- Frontend: GitHub Pages
- Backend: Render

## Contribuir

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/amazing`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing`)
5. Abre un Pull Request

## Licencia

MIT