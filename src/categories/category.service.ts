import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()// Decorador que permite que el servicio pueda ser inyectado en controladores y en otros servicios
export class CategoryService {

// Tomando la entidad aprobada indicando el tipo <Category>
constructor(
    @InjectRepository(Category) private categoriesRepository: Repository<Category>,
) {}


// Función asincrona (async) para obtener las categorias mediante el metodo find
    async getCategory() {
        return this.categoriesRepository.find()
    }

}
