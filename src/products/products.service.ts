import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Product } from './product.entity';
import { Repository } from 'typeorm'

@Injectable()// Decorador que permite que el servicio pueda ser inyectado en controladores y en otros servicios
export class ProductsService {

    // Tomando la entidad aprobada indicando el tipo <Product>
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>) {}

    /*
    Función asincrona (async) para obtener todos los productos mediante el metodo find
    con la propiedad relations para mostrar en donde de encuentra la relacion
    entre las tabalas Product y Category
    */
    async getProducts() {
     return this.productRepository.find({
        relations: ['theCategory']
     })
    }

    async queryBuilder (alias: string) {
        return this.productRepository.createQueryBuilder(alias);
    }
}
