import { Controller,Header, Get, Logger, Param, Post, Body, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { create } from 'istanbul-reports';
import {BlogService} from './blog.service'
import { ArticleDto } from '../dtos/article.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller("blog")
export class BlogController {

  constructor(
    private readonly _blogService:BlogService
  ){}

  @Get()
  @Header('Cache-Control', 'none')
  @ApiOperation({
    description: 'Get all articles',
    title: 'Get all',
    operationId: 'GET /articles'
  })
  @ApiResponse({ status: 200, description: 'Get all articles' })
  @ApiResponse({ status: 403, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Not found" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  getAll(){
    Logger.log("Get all articles", "BlogController");
    return this._blogService.getArticles();
  }

  @Get(':articleId')
  @Header('Cache-Control', 'none')
  @ApiOperation({
    description: 'Get one article',
    title: 'Get one',
    operationId: 'GET /articles'
  })
  @ApiResponse({ status: 200, description: 'Get one article' })
  @ApiResponse({ status: 403, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Not found" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  async getOne(@Param('articleId')articleId) {
    Logger.log("get one article", "BlogController");
    const article = await this._blogService.getOneArticle(articleId);
    if(article){
      return article;
    }else{
      throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
    }   
  }

  @Post()
  @Header('Cache-Control', 'none')
  @ApiOperation({
    description: 'Create an article',
    title: 'Create one',
    operationId: 'POST /articles'
  })
  @ApiResponse({ status: 200, description: 'Get all articles' })
  @ApiResponse({ status: 403, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Not found" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  async create(@Body() articleDto:ArticleDto) {
    Logger.log("Create an article", "BlogController");
    const article = await this._blogService.createArticle(articleDto);
    if(article)
      return article;
    throw new HttpException('Article not created', HttpStatus.NOT_MODIFIED)
  }

  @Put(':articleId')
  @Header('Cache-Control', 'none')
  @ApiOperation({
    description: 'Update one article',
    title: 'Update one',
    operationId: 'PUT /articles'
  })
  @ApiResponse({ status: 200, description: 'Update one article' })
  @ApiResponse({ status: 403, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Not updated" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  async update(@Param('articleId')articleId, @Body() articleDto){
    Logger.log("Update an article", "BlogController");
    const article = await this._blogService.updateArticle(articleId, articleDto);
    if(article)
      return article;
    throw new HttpException('Article not updated', HttpStatus.NOT_MODIFIED);
  }

  @Delete(':articleId')
  @Header('Cache-Control', 'none')
  @ApiOperation({
    description: 'Delete one article',
    title: 'Delete one',
    operationId: 'PUT /articles'
  })
  @ApiResponse({ status: 200, description: 'Update one article' })
  @ApiResponse({ status: 403, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Not updated" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  async remove(@Param('articleId') articleId){
    Logger.log("Remove an article", "BlogController");
    const article = await this._blogService.removeArticle(articleId);
    if(article)
      return article;
    throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
  }
}
