import { Controller,Header, Get, Logger, Param, Post, Body, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { create } from 'istanbul-reports';
import {BlogService} from './blog.service'
import { ArticleDto } from '../dtos/article.dto';

@Controller()
export class BlogController {

  constructor(
    private readonly _blogService:BlogService
  ){}

  @Get('getAllArticles')
  @Header('Cache-Control', 'none')
  getAll(){
    Logger.log("Get all articles", "BlogController");
    return this._blogService.getArticles();
  }

  @Get('getOneArticle/:articleId')
  @Header('Cache-Control', 'none')
  async getOne(@Param('articleId')articleId) {
    Logger.log("get one article", "BlogController");
    const article = await this._blogService.getOneArticle(articleId);
    if(article){
      return article;
    }else{
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }   
  }

  @Post('createOneArticle')
  @Header('Cache-Control', 'none')
  async create(@Body() articleDto:ArticleDto) {
    Logger.log("Create an article", "BlogController");
    const article = await this._blogService.createArticle(articleDto);
    if(article)
      return article;
    throw new HttpException('Article not created', HttpStatus.NOT_MODIFIED)
  }

  @Put('/:articleId')
  @Header('Cache-Control', 'none')
  async update(@Param('articleId')articleId, @Body() articleDto){
    Logger.log("Update an article", "BlogController");
    const article = await this._blogService.updateArticle(articleId, articleDto);
    if(article)
      return article;
    throw new HttpException('Article not modified', HttpStatus.NOT_MODIFIED);
  }

  @Delete(':articleId')
  @Header('Cache-Control', 'none')
  async remove(@Param('articleId') articleId){
    Logger.log("Remove an article", "BlogController");
    const article = await this._blogService.removeArticle(articleId);
    if(article)
      return article;
    throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
  }
}
