import { Controller, Get, Param, Post, Put, Body, Delete, Query } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
    constructor(private articleService: ArticleService) { }

    @Get()
    findAll(@Query() query) {
        return this.articleService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return id;
    }

    @Post()
    create(@Body() article){
        return 'create';
    }

    @Put(':id')
    update(@Param('id') id, @Body() article){

    }

    @Delete(':id')
    remove(@Param('id') id) {
      return id;
    }

}