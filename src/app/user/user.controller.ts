import { Controller, Get, Query, Post, Param, Put, Body, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create_user.dto';
import { UpdateUserDto } from './dto/update_user.dto';

@Controller('user')
export class UserController{
    constructor(private userService: UserService){}

    @Get()
    async findAll(@Query() query){
        return await this.userService.findAll(query);
    }

    @Get(':id')
    async findOne(@Param('id') id){
        return await this.userService.findOne(id);
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto){
        return await this.userService.create(createUserDto);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() updateUserDto: UpdateUserDto){
        return await this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    async remove(@Param('id') id){
        return await this.userService.remove(id);
    }
}
