import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [ 
    MongooseModule.forRoot('mongodb://admin:admin@127.0.0.1:27017/pizzaDb?authSource=admin'), 
    ProductModule, 
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
