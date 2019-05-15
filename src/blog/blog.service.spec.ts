import { Test, TestingModule } from '@nestjs/testing';
import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {BlogModule } from './blog.module';
import { BlogService } from './blog.service';
import {BlogController} from './blog.controller';
import {ArticleEntity} from './entities/article.entity';
import {ArticleDto} from '../dtos/article.dto';

describe('BlogService', () => {
  let service: BlogService;
  let blog: ArticleEntity;
  const Articles:ArticleEntity[]= [];

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        BlogModule,
        ArticleEntity,
        ArticleDto,
        TypeOrmModule.forFeature([ArticleDto]),
        HttpModule
      ],
      controllers:[BlogController],
      providers: []
    }).compile();

    service = module.get<BlogService>(BlogService);
  });

  it('should be defined', () => {
    expect(service).toBeUndefined();
  });
});
