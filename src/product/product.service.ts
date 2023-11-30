import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/product.interface';

const PREFIX = 'http://localhost:3000';

@Injectable()
export class ProductService {
  getAllProducts(): Product[] {
    return [
      {
        id: 1,
        name: 'Name',
        price: 100,
        ingredients: ['sfsf', 'sdfsf', 'asfwef'],
        image: `${PREFIX}/file.png`,
        rating: 5,
      },
    ];
  }
}
