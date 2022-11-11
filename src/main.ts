import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Archivo de entrada de la aplicación que utiliza la función central NestFactory 
// para crear una instancia de aplicación Nest.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);//
  app.enableCors();// Habilitación para no tener problemas de Cors
  await app.listen(process.env.PORT || 3000); // PORT Heroku OR LocalHost:3000
}
bootstrap();
