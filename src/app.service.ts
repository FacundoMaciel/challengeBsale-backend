import { Injectable } from '@nestjs/common';

@Injectable() // Decorador que permite que el servicio pueda ser inyectado en controladores y en otros servicios
export class AppService {
  getHello(): Object {
    return {
      "msg":"404 Page",
      "project":"Desafío producto Bsale",
      "author":"Facundo Maciel",
      "description":"ApiRest con NestJS TypeOrm y DB mySQL",
      "version":"1.0.0",
      };
  }
}
