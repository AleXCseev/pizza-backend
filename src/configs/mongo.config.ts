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
    return 'mongodb://' +
    configService.get('MONGO_LOGIN') +
    ':' +
    configService.get('MONGO_PASSWORD') +
    '@' +
    configService.get('MONGO_HOST') +
    ':'
    configService.get('MONGO_PORT') +
    '/' +
    configService.get('MONGO_AUTHDATABASE');
}

const getMongoOptions = () => {
    return {
        // useNewUrlParser: true,
        // useCreateIndex: true,
        // useUnifiedTopologi: true,
    }
}