import { IsArray, IsNumber, IsString } from "class-validator";

export class ProductDto {
    @IsString()
    name: string

    @IsNumber()
    price: number

    @IsArray()
    ingredients: string[]

    @IsString()
    image: string

    @IsNumber()
    rating: number

    @IsString()
    productId: string
}