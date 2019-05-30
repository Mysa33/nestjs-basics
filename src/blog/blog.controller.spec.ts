import { Test, TestingModule,  } from '@nestjs/testing';
import { HttpModule, Inject } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { ArticleEntity } from './entities/article.entity';
import {ArticleDto} from '../dtos/article.dto';

describe('BlogController', () => {
  let controller: BlogController;
  let service: BlogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[],
      providers :[BlogService],
      controllers: [BlogController]
      
    }).compile();

    service = module.get<BlogService>(BlogService)
    controller = module.get<BlogController>(BlogController);
  });

  it('should be defined', async () => {
    expect(controller).toBeUndefined();
  });
});
