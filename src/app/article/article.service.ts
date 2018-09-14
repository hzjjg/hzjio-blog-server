import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService{
    findAll(){
        return 'article list';
    }
}