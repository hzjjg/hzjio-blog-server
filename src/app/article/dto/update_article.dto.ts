import { IsString, Length } from 'class-validator';

export class UpdateArticleDto{
    @IsString()
    @Length(3, 30)
    readonly title?: string;

    @IsString()
    @Length(15, 140)
    readonly summary?: string;

    @IsString()
    readonly content?: string;
}