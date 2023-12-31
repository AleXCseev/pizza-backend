import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './models/product.model';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>
    ) {}

    async getByName(name: string) {
        return this.productModel.findOne({name})
    }

    async createProduct(product: Product) {
        const newProduct = new this.productModel(product);
        return newProduct.save();
    }
}
