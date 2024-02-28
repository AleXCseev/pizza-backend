import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument, Types } from "mongoose"

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
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

    @Prop({required: true})
    productId: Types.ObjectId
}

export const ProductSchema = SchemaFactory.createForClass(Product)