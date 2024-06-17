# version de 
FROM node:16.20.2-alpine3.18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Compila el código TypeScript a JavaScript
RUN npm run build

# Expone el puerto en el que el servidor está escuchando
EXPOSE 3000

# Ejecuta el comando para iniciar la aplicación
CMD ["npm", "start"]
