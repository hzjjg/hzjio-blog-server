import { IsString, IsEmail, Matches } from 'class-validator';

export class CreateUserDto{

    @IsString()
    readonly nickname: string;

    @Matches( /^[1][0-9]{10}$/)
    readonly phone: string;

    @IsEmail()
    readonly emain: string;

    @IsString()
    readonly password: string;
}