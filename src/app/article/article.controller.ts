import { Controller, Get, Param, Post, Put, Body, Delete, Query, Req } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto, UpdateArticleDto } from './article.dto';

@Controller('article')
export class ArticleController {
    constructor(private articleService: ArticleService) { }

    @Get()
    async findAll(@Query() query) {
        const result =  this.articleService.findAll(query);
        return result;
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        const result =  this.articleService.findOne(id);
        return result;
    }

    @Post()
    async create(@Body() createArticleDto: CreateArticleDto){
        const result =  this.articleService.create(createArticleDto);
        return result;
    }

    @Put(':id')
    async update(@Param('id') id, @Body() updateArticleDto: UpdateArticleDto){
        const result =  this.articleService.update(id, updateArticleDto);
        return result;
    }

    @Delete(':id')
    async remove(@Param('id') id) {
      const result =  await this.articleService.remove(id);
      return result;
    }

}