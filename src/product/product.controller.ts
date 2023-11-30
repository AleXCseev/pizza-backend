import { Controller, Get } from '@nestjs/common';
import { Product } from 'src/interfaces/product.interface';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(): Product[] {
    return this.productService.getAllProducts();
  }
}
