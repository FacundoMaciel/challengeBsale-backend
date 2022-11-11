<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Desafío Bsale

<h1 align="center">Desafío producto Bsale</h1>

## El desafío consiste en:

➔ Construir una tienda online.

➔ Utilizar la base de datos que te proporciona la empresa.

➔ Desplegar productos agrupados por la categoría a la que pertenecen.

➔ Generar por separado backend (API REST) y frontend (aplicación que la consuma)

➔ Agregar un buscador, el cual tiene que estar implementado a nivel de servidor,
mediante una Api Rest cuyo lenguaje y framework puede ser de libre elección.
Es decir, los datos de productos deben llegar filtrados al cliente.

➔ Desarrollar la aplicación de cliente con vanilla javascript/Vanillajs.

➔ Disponibilizar la aplicación en un hosting.

➔ Disponibilizar el código en Github.


## Desarrollo

➔ El backend (API REST) se desarrolló con NestJS TypeOrm, se deployó en Heroku y su codigo esta disponible en GitHub.

➔ El frontend (CLIENTE) se desarrolló con VanillaJs, Jquery y Bootstrap, se deployó en vercel y su codigo esta disponible en GitHub.


## Backend
<h2 align="center">Api Rest</h2>

<h2 align="center">Petición HTTP - Endpoints:</h2>

* GET /

Primera ruta perteneciente al archivo app en donde se hace una peticion get mediante el decorador @Get de Nest y me devuelve una estructura de objeto tipeada por mi en app.service donde se llama a la funcion get creada en app.controllers ambos del app.module

URL: 
  https://challengebsale-backend.herokuapp.com/
     
Estructura: 
{

"msg":"404 Page",

"project":"Desafío producto Bsale",

"author":"Facundo Maciel",

"description":"ApiRest con NestJS TypeOrm y DB mySQL",

"version":"1.0.0"

}

* GET /api/products 











