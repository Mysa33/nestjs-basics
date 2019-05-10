import { Controller, Get, Logger, Param, Post, Body, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { create } from 'istanbul-reports';
import {BlogService} from './blog.service'

@Controller('blog')
export class BlogController {

  constructor(
    private readonly _blogService:BlogService
  ){}

  @Get()
  getAll(){
    Logger.log("get all article", "BlogController");
    return this._blogService.getArticles();
  }

  @Get(':articleId')
  async getOne(@Param('articleId')articleId) {
    Logger.log("get one article", "BlogController");
    const article = await this._blogService.getOneArticles(articleId);
    if(article)
      return article;
    throw new HttpException('Article not found', HttpStatus.NOT_FOUND); 
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
