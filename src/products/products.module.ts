import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Product } from './product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController], // Lista de controladores 
  providers: [ProductsService], // Lista de providers
  exports: [ProductsService] // Exportaciones a otro modulo
})
export class ProductsModule {}
