import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse } from './interfaces/response.interface';
import { ApiExceptionFilter } from './common/api-exception.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(){
    const data = this.appService.getHello()
    return (success: true, message:"Hello NestJS", data:{})

   // return this.appService.getHello();
  }
}
