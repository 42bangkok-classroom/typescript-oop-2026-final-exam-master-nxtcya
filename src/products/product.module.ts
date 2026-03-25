import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Products } from './product.interface';
import { APP_FILTER } from '@nestjs/core';
import { ApiExceptionFilter } from 'src/common/api-exception.filter';
import { ApiResponse } from 'src/interfaces/response.interface';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [
    ProductService,
    {
        provide: APP_FILTER,
        useClass: ApiResponse<T>
    },
],
})
export class ProductModule {}
