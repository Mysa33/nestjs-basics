import { Controller, Get, Logger, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { create } from 'istanbul-reports';

@Controller('blog')
export class BlogController {
  @Get()
  getAll(){
      Logger.log("get all article", "BlogController");
    return [];
  }

  @Get(':articleId')
  getOne(@Param('articleId')articleId) {
    Logger.log("get one article", "BlogController");
    return 'getOnArticle';
  }

  @Post()
  create(@Body() articleDto) {
    Logger.log("create an article", "BlogController");
    return 'Created article';
  }

  @Put(':articleId')
  update(@Param('articleId')articleId){
    Logger.log("Update an article", "BlogController");
    return 'Updated article';
  }

  @Delete(':articleId')
  remove(@Param('articleId') articleId){
    Logger.log("Remove an article", "BlogController");
    return 'deleted article';
  }
}
