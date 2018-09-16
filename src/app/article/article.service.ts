import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';
import { CreateArticleDto } from './dto/create_article.dto';
import { UpdateArticleDto } from './dto/update_article.dto';

@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(Article)
        private articleRepository: Repository<Article>,
    ) { }

    async findAll(query: any) {
        return await this.articleRepository.find(query);
    }

    async findOne(id: number){
        return await this.articleRepository.findOne(id);
    }

    async create(article: CreateArticleDto){
        const author = 1;
        const articleEnity =  this.articleRepository.create({...article, author});
        const error = await validate(articleEnity);

        if (error.length > 0){
            throw error;
        }

        return await this.articleRepository.save(articleEnity);
    }

    async update(id: number, article: UpdateArticleDto){
        return await this.articleRepository.update(id, article);
    }

    async remove(id: number){
        const article = await this.articleRepository.findOne(id);
        if (article){
            return await this.articleRepository.remove(article);
        }else{
            return 'no found';
        }
    }
}