import { IsString, IsEmail, Matches } from 'class-validator';

export class UpdateUserDto{

    @IsString()
    readonly nickname: string;

    @Matches( /^[1][0-9]{10}$/)
    readonly phone: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    readonly password: string;
}