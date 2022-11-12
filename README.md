<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Descripción

[Nest](https://github.com/nestjs/nest) framework TypeScript.

## Instalación

```bash
$ npm install
```

## Correr la app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testeo

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Soporte

Nest es un proyecto de código abierto con licencia del MIT. Puede crecer gracias a los patrocinadores y al apoyo de los increíbles patrocinadores. Si desea unirse a ellos, [lea más aquí] (https://docs.nestjs.com/support).

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

Primera ruta perteneciente al archivo app en donde se hace una peticion get mediante el decorador @Get de Nest y me devuelve una estructura de objeto tipeada por mi en app.controller.ts donde se llama a la funcion get creada en app.service.ts ambos del app.module

URL: 
  https://challengebsale-backend.herokuapp.com/
     
Estructura:
```javascript
  {

    "msg":"404 Page",

    "project":"Desafío producto Bsale",

    "author":"Facundo Maciel",

    "description":"ApiRest con NestJS TypeOrm y DB mySQL",

    "version":"1.0.0"

  } 
```


* GET /api/products 

Ruta EndPoint para obtener todos los productos mediante una función asincrona ("getProducts()") creada en el archivo products.service.ts con un metodo get funcional por el decorador @Get de Nest en el archivo products.controller.ts donde se invoca para resolver la petición @Get async getProducts

URL:

https://challengebsale-backend.herokuapp.com/api/products

Estructura JSON:
```javascript
  {

    "id": 5,

    "name": "ENERGETICA MR BIG",

    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",

    "price": 1490,

    "discount": 20,

    "category": 1,

    "theCategory": {
      "id": 1,
      "name": "bebida energetica"
     }

  }
```


* GET /api/products/product?s=coca

Ruta EndPoint para obtener todos los productos que coincidan con la query request mediante una función asincrona @Get(getProduct) que recibe otro decorador @Req del tipo Request.query, se declara una variable de nombre builder que espera la respuesta de una funcion asincrona para encontrar el resultado junto con un condicional if que indica donde coincide la query con la palabra ingresada.

URL:

https://challengebsale-backend.herokuapp.com/api/products/product?s=coca

Estructura JSON:
```javascript
  [
    {

      "id": 37,

      "name": "COCA COLA ZERO DESECHABLE",

      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/cocazero9766.jpg",

      "price": 1490,

      "discount": 0,

      "category": 4

    },

    {
    
      "id": 57,

      "name": "COCA COLA NORMAL DESECHABLE 1500cc",

      "url_image": null,

      "price": 1500,

      "discount": 0,

      "category": 4

    },

    {

      "id": 58,

      "name": "COCA COLA LIGHT DESECHABLE",

      "url_image": null,

      "price": 1500,

      "discount": 0,

      "category": 4

    }
  ]
```

* GET /api/category

Ruta EndPoint para obtener las categorias mediante una función asincrona ("getCategory()") creada en el archivo category.service.ts con un método get funcional por el decorador @Get de Nest en el archivo category.controller.ts donde se invoca para resolver la petición @Get async getCategory con un condicional para comparar y poder buscar productos segun su categoría.

URL: 
  https://challengebsale-backend.herokuapp.com/api/category
     
Estructura JSON:
```javascript
  [
    {

      "id": 1,

      "name": "bebida energetica"

    },

    {

      "id": 2,

      "name": "pisco"

    },

    {

      "id": 3,

      "name": "ron"

    },

    {

      "id": 4,

      "name": "bebida"

    },

    {

      "id": 5,

      "name": "snack"

    },

    {

      "id": 6,

      "name": "cerveza"

    },

    {

      "id": 7,

      "name": "vodka"

    }
  ]
```






