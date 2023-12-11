import { ConfigService } from "@nestjs/config";
import { MongooseModuleOptions } from "@nestjs/mongoose";

export const getMongoConfig = async (configService: ConfigService): Promise<MongooseModuleOptions> => {
    return {
        uri: getMongoUri(configService),
        ...getMongoOptions(),
    }
}

// 'mongodb://admin:admin@127.0.0.1:27017/pizzaDb?authSource=admin'

const getMongoUri = (configService: ConfigService): string => {
    
}

const getMongoOptions = () => {

}