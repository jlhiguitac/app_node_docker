# Repositorio app_node_docker
Este repositorio contiene una aplicación web básica que utiliza como infraestructura el web framework Express y NodeJS
como servidor para enrutar 3 páginas web simples. Las páginas web utilizan estandar HTML5 y framework Bootstrap para algunos estilos CSS.

## Entorno de desarrollo
Esta app fue desarrollada utilizando:
* [Visual Studio Code](https://code.visualstudio.com/)
* [Nodejs](https://nodejs.org/en)
* [Express](https://expressjs.com/)
* [HTML5](https://developer.mozilla.org/es/docs/Glossary/HTML5)
* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)
* [Git-GitHub](https://docs.github.com/en)

# Despliegue:
* 1 - Primero se debe clonar el repositorio, para esto se debe ejecutar la siguiente linea de comandos desde la terminal:
```
$ git clone https://github.com/jlhiguitac/app_node_docker.git
```
* 2 - Desde la carpeta donde se descargó el repositorio, con [Docker](https://www.docker.com/) previamente instalado se debe ejecutar la siguiente linea de comandos:
```
$ cd path_to_workdir

$ docker-compose -f .\docker-compose.yaml build

$ docker-compose up -d
```
Para ver la aplicación se debe ir a la URL: http://localhost:3000
