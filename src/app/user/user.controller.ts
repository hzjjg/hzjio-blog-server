import { Controller, Get, Query, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create_user.dto';

@Controller('user')
export class UserController{
    constructor(private userService: UserService){}

    @Get()
    async findALl(@Query() query){
        return await this.userService.findAll(query);
    }

    @Post()
    async create(createUserDto: CreateUserDto){
        return await this.userService.create(createUserDto);
    }
}
