import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create_user.dto';
import { UpdateUserDto } from './dto/update_user.dto';

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}

    async findAll(query: any){
        return await  this.userRepository.find(query);
    }

    async findOne(id: number){
        return await this.userRepository.findOne(id);
    }

    async findOneByEmail(email: string){
        return await this.userRepository.findOne({email});
    }

    async findOneByPhone(phone: string){
        return await this.userRepository.findOne({phone});
    }

    async create(createUserDto: CreateUserDto){
        const createdUser = this.userRepository.create(createUserDto);
        return await this.userRepository.save(createdUser);
    }

    async update(id: number, updateUserDto: UpdateUserDto){
        return await this.userRepository.update(id, updateUserDto);
    }

    async remove(id: number){
        const user = await this.userRepository.findOne(id);
        if (user){
            return await this.userRepository.remove(user);
        }else{
            return new NotFoundException();
        }
    }
}