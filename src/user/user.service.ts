import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User, UserDocument } from './model/user.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { genSaltSync, hashSync } from 'bcryptjs'

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) {}

    async createUser(dto: UserDto) {
        const salt = genSaltSync(10);
        const newUser = new this.userModel({
            email: dto.login,
            passwordHash: hashSync(dto.password, salt)
        });
        return newUser.save();
    }

    async findUser(email: string) {
        return this.userModel.findOne({email}).exec();
    }
}
