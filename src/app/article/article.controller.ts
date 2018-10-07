import { Controller, Get, Param, Post, Put, Body, Delete, Query } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create_article.dto';
import { UpdateArticleDto } from './dto/update_article.dto';

@Controller('article')
export class ArticleController {
    constructor(private articleService: ArticleService) { }

    @Get()
    async findAll(@Query() query) {
        return await this.articleService.findAll(query);
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        return await this.articleService.findOne(id);
    }

    @Post()
    async create(@Body() createArticleDto: CreateArticleDto){
        return await this.articleService.create(createArticleDto);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() updateArticleDto: UpdateArticleDto){
        return await this.articleService.update(id, updateArticleDto);
    }

    @Delete(':id')
    async remove(@Param('id') id) {
      return await this.articleService.remove(id);
    }

}