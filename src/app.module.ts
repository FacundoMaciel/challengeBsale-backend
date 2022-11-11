import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './categories/category.module';

/*
Implementando la conexion a la BD proporcionada por Bsale,
utilizando metodo de Typeorm TypeOrmModule.forRoot y decorador @Module en un objeto
*/ 
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
      username: 'bsale_test',
      password: 'bsale_test',
      database: 'bsale_test',
      entities: [__dirname + '/**/*.entity{.ts,.js}']   
    }),
    ProductsModule, // Me traigo el modulo completo de productos
    CategoryModule],
  controllers: [AppController], // Lista de controladores
  providers: [AppService], // Lisa de providers
})
export class AppModule {}
