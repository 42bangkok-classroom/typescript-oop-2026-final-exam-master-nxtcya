import { Injectable } from "@nestjs/common";
import { promises } from "dns";
import * as fs from "fs"
import * as path from "path"
import { ApiResponse } from "src/interfaces/response.interface";
import { Products } from "./product.interface";


@Injectable()
export class ProductService {

    

    findAll():Products[]{
        const rawData = fs.readFileSync("data/products.json","utf-8");
        return JSON.parse(rawData) as Products[]

    }

}
