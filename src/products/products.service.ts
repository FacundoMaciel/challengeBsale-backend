import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Product } from './product.entity';
import { Repository } from 'typeorm'

@Injectable()
export class ProductsService {

    constructor(@InjectRepository(Product) private productRepository: Repository<Product>) {}

    async getProducts() {
     return this.productRepository.find({
        relations: ['theCategory']
     })
    }

    async queryBuilder (alias: string) {
        return this.productRepository.createQueryBuilder(alias);
    }
}
