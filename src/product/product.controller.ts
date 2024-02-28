import { BadRequestException, Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';
import { ALREADY_PRODUCT_ERROR } from './product.constants';

@Controller('products')
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ) {}

    @UsePipes(new ValidationPipe())
    @Post('add')
    async addProduct(@Body() dto: ProductDto) {
        const findProduct = await this.productService.getByName(dto.name)

        if(findProduct) {
            throw new BadRequestException(ALREADY_PRODUCT_ERROR)
        }

        return await this.productService.createProduct(dto);
    }

    @UsePipes(new ValidationPipe())
    @Post('update')
    async updateProduct(@Body() dto: ProductDto, id: string) {
        return this.productService.updateProduct(dto, id)
    }
}
