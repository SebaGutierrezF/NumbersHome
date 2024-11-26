FROM node:18-alpine

WORKDIR /app

# Copiar package.json y package-lock.json
COPY ../package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código del servidor
COPY . ./server

EXPOSE 3000

CMD ["node", "server/server.js"]
