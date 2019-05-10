import { Injectable, Inject } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import {ArticleEntity} from './entities/article.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BlogService {

    constructor(
        @InjectRepository(ArticleEntity)
        private readonly articlesRepository : Repository<ArticleEntity>
    ){}

    getArticles(){
      return this.articlesRepository.find();  
    }

    async getOneArticles(articleId: number){
      const article = await this.articlesRepository.findOne(articleId); 
      if(article){
        return article;
      }else{
        return null;
      } 
    }
}
