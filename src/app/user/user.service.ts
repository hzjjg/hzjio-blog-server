import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create_user.dto';

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}

    async findAll(query: any){
        return await  this.userRepository.find(query);
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
}