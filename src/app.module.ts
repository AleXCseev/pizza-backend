import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';



@Module({
  imports: [ 
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig
    }), 
    ProductModule, 
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
