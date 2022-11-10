import { Controller, Get, Req } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Request } from 'express'

@Controller('api/products')
export class ProductsController {

    constructor( private productsService: ProductsService) {}

    @Get()
    async getProducts() {
        return this.productsService.getProducts();
    }
    
    @Get('product')
    async getProduct(@Req() req: Request) {
        
        const builder = await this.productsService.queryBuilder('product')

        if(req.query.s) {
            builder.where('product.name LIKE :s', {s: `%${req.query.s}%`})
        }
        
        const sort: any = req.query.sort;

        if (sort) {
            builder.orderBy('product.price', sort.toUpperCase())
        }

        return await builder.getMany();

    }
    @Get('category')
    async getCategory(@Req() req: Request) {
        
        const builder = await this.productsService.queryBuilder('product')

        if(req.query.c) {
            builder.where('product.category LIKE :c', {c: `%${req.query.c}%`})
        }

        return await builder.getMany();

    }
}

