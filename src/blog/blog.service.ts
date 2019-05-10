import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import {ArticleEntity} from './entities/article.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleDto } from '../dtos/article.dto';

@Injectable()
export class BlogService {

    constructor(
        @InjectRepository(ArticleEntity)
        private readonly articlesRepository : Repository<ArticleEntity>
    ){}

    getArticles(){
      return this.articlesRepository.find();  
    }

    async getOneArticle(articleId: number){
      const article = await this.articlesRepository.findOne(articleId); 
      if(article){
        return article;
      }else{
        return null;
      } 
    }

    async createArticle(articleDto:ArticleDto){
      const article = await this.articlesRepository.save(articleDto);
      if(article)
        return article;
      throw new HttpException('Not created', HttpStatus.NOT_FOUND);
    }

    async updateArticle(articleId: number, articleDto: ArticleDto){
      const article = await this.articlesRepository.findOne(articleId);
      if(!article)
        return null;
        await this.articlesRepository.update(articleId, articleDto);
        return await this.articlesRepository.findOne(articleId);
    }

    async removeArticle(articleId: number){
      const article = await this.articlesRepository.findOne(articleId);
      if(!article)
        return null;
      this.articlesRepository.remove(article);
      return article;
    }
}
