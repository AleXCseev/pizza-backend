import { BadRequestException, Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { ALREADY_REGISTER_ERROR } from './user.constants';

@Controller('auth')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @UsePipes(new ValidationPipe())
    @Post('register')
    async register(@Body() dto: UserDto) {
        const oldUser = await this.userService.findUser(dto.login)
        if(oldUser) {
            throw new BadRequestException(ALREADY_REGISTER_ERROR)
        }
        return this.userService.createUser(dto);
    }

    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: UserDto) {

    }
}
