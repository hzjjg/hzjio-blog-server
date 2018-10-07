import { IsString, Length, IsOptional } from 'class-validator';

export class UpdateArticleDto{
    @IsString()
    @Length(3, 30)
    @IsOptional()
    readonly title: string;

    @IsString()
    @Length(15, 140)
    @IsOptional()
    readonly summary: string;

    @IsString()
    @IsOptional()
    readonly content: string;
}