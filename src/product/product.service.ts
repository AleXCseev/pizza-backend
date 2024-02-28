import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './models/product.model';
import { Model } from 'mongoose';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>
    ) {}

    async getByName(name: string) {
        return this.productModel.findOne({name})
    }

    async createProduct(product: Omit<ProductDto, "productId">) {
        return this.productModel.create(product);
    }

    async updateProduct(product: ProductDto, id: string) {
        return this.productModel.findByIdAndUpdate(id, product)
    }

    async deleteProduct(id: string) {
        return this.productModel.findByIdAndDelete(id).exec();
    }
}
