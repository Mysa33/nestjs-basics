import { Test, TestingModule } from '@nestjs/testing';
import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule, getCustomRepositoryToken } from '@nestjs/typeorm';
import { Repository, EntityRepository, getRepository } from 'typeorm';
import {BlogModule } from './blog.module';
import { BlogService } from './blog.service';
import {BlogController} from './blog.controller';
import {ArticleEntity} from './entities/article.entity';
import {ArticleDto} from '../dtos/article.dto';

const exempleRepoWork = {
  find : jest.fn(()=> Promise.resolve()),
};

describe('BlogService', () => {
  let service: BlogService;
  let blog: ArticleEntity;
  const Articles:ArticleEntity[]= [];

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BlogService,
        {
          provide : getCustomRepositoryToken(ArticleEntity),
          useValue:Articles,
        }
      
      ]
    }).compile();

    service = module.get<BlogService>(BlogService);
  });

  it('should be defined', () => {
    expect(service).toBeUndefined();
  });
});
