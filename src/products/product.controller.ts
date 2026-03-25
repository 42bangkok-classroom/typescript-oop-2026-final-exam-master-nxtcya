import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Products } from './product.interface';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): Products[] {
    return this.productService.findAll();
  }
}
