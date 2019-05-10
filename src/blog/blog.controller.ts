import { Controller, Get, Logger, Param, Post, Body, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { create } from 'istanbul-reports';
import {BlogService} from './blog.service'
import { ArticleDto } from 'src/dtos/article.dto';

@Controller('blog')
export class BlogController {

  constructor(
    private readonly _blogService:BlogService
  ){}

  @Get()
  getAll(){
    Logger.log("Get all article", "BlogController");
    return this._blogService.getArticles();
  }

  @Get(':articleId')
  async getOne(@Param('articleId')articleId) {
    Logger.log("get one article", "BlogController");
    const article = await this._blogService.getOneArticle(articleId);
    if(article)
      return article;
    throw new HttpException('Article not found', HttpStatus.NOT_FOUND); 
  }

  @Post()
  async create(@Body() articleDto) {
    Logger.log("Create an article", "BlogController");
    const article = await this._blogService.createArticle(articleDto);
    if(article)
      return article;
    throw new HttpException('Article not created', HttpStatus.NOT_MODIFIED);
    

  }

  @Put(':articleId')
  async update(@Param('articleId')articleId, @Body() articleDto){
    Logger.log("Update an article", "BlogController");
    const article = await this._blogService.updateArticle(articleId, articleDto);
    if(article)
      return article;
    throw new HttpException('Article not modified', HttpStatus.NOT_MODIFIED);
  }

  @Delete(':articleId')
  remove(@Param('articleId') articleId){
    Logger.log("Remove an article", "BlogController");
    return 'deleted article';
  }
}
