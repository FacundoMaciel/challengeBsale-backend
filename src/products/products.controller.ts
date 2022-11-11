import { Controller, Get, Req } from '@nestjs/common';
import { ProductsService } from './products.service'; // Importación del servicio
import { Request } from 'express'

@Controller('api/products') //Decorador que indica a Nest que es un controlador
export class ProductsController {

    constructor( private productsService: ProductsService) {} // Inyectando servicio con un constructor

/*
Función asincrona (async) para obtener todos los productos de la ruta establecida en el
decorador @Controller mediante otro decorador para hacer la petición HTTP llamado @Get
*/
    @Get()
    async getProducts() {
        return this.productsService.getProducts();// Invocación al servicio para resolver la petición
    }

/*
Función asincrona (async) para obtener todos los productos y los productos por nombre 
mediante el decorador @Get estableciendo el tipo de request con @Req, 
un constructor de query req, un condicional donde se indica la coincidencia y en donde
se tiene que cumplir la misma. 
*/
    @Get('product')
    async getProduct(@Req() req: Request) {
        
        const builder = await this.productsService.queryBuilder('product')

        if(req.query.s) {
            builder.where('product.name LIKE :s', {s: `%${req.query.s}%`})
        }
/*
Ordenamiento ASC o DESC con metodo sort aplicando conversion a mayusculas para mejor
control (toUpperCase()) con el tipo "any" para que el metodo funcione en TS
 */
        const sort: any = req.query.sort;

        if (sort) {
            builder.orderBy('product.price', sort.toUpperCase())
        }

        return await builder.getMany();

    }

/*
Función asincrona (async) para obtener todos los productos que correspondan a una categoria
mediante el decorador @Get estableciendo el tipo de request con @Req, 
un constructor de query req, un condicional donde se indica la coincidencia y en donde
se tiene que cumplir la misma. 
 */
    @Get('category')
    async getCategory(@Req() req: Request) {
        
        const builder = await this.productsService.queryBuilder('product')

        if(req.query.c) {
            builder.where('product.category LIKE :c', {c: `%${req.query.c}%`})
        }

        return await builder.getMany();

    }
}

