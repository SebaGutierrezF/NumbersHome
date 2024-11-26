FROM node:18-alpine

WORKDIR /app

# Copiar package.json y package-lock.json desde la raíz
COPY ../../package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código del servidor
COPY . ./docs/server

EXPOSE 3000

CMD ["npm", "start"]
