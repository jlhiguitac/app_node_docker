FROM node:20-alpine
# debemos descargar y ejecutar node, luego cambiamos de directorio
WORKDIR /app
#a este directorio pegamos nuestros archivos package.json y package-lock.jason
#estos archivos contienen la información de las dependencias necesarias para nuestra app
#para este caso van a ser express, ejs y morgan 
COPY package*.json ./
#corremos npm para instalar las dependencias
RUN npm install 
#copiamos todos los archivos necesarios a la carpeta del contenedor
COPY . .
#Inicializamos, start es un script para iniciar la ejecución
CMD ["npm", "start"]
