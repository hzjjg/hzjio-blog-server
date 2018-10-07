import { IsString, IsEmail, Matches, MinLength, Length, ValidateIf } from 'class-validator';

export class CreateUserDto{

    @IsString()
    @Length(3, 30)
    readonly nickname: string;

    @Matches( /^[1][0-9]{10}$/)
    readonly phone: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    readonly password: string;
}