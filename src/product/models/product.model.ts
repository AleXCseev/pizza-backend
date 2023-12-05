import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop({required: true})
    name: string

    @Prop({required: true})
    price: number

    @Prop({required: true})
    ingredients: string[]

    @Prop({required: true})
    image: string

    @Prop({required: true})
    rating: number
}

export const ProductSchema = SchemaFactory.createForClass(Product)