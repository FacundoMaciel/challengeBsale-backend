import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('api/category')
export class CategoryController {
  constructor(private categoriesService: CategoryService) {}

  @Get()
  getProducts() {
    return this.categoriesService.getProducts();
  }
}
