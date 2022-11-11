import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';// Importación del servicio

@Controller('api/category')//Decorador que indica a Nest que es un controlador
export class CategoryController {
  constructor(private categoriesService: CategoryService) {}// Inyectando servicio con un constructor

  @Get()
  async getCategory() {
    return this.categoriesService.getCategory();// Invocación al servicio para resolver la petición
  }
}
