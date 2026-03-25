import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { Products } from "./product.interface";
import { ApiExceptionFilter } from "src/common/api-exception.filter";
import { Module } from "@nestjs/common";

@Module({
    imports:[],
    controllers:[ProductController],
    providers:[
        ProductService,
       
    ]
})
export class ProductModule {}