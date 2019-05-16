import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { BlogController } from './blog.controller';
import {ArticleEntity} from './entities/article.entity';
import { Repository, EntityRepository } from 'typeorm';
import { BlogService } from './blog.service';
import {ArticleDto} from '../dtos/article.dto';

@Module({
  imports: [
    ArticleDto,
    Repository,
    TypeOrmModule.forFeature([ArticleEntity]),
    HttpModule,
    TestingModule
  ],
  controllers: [BlogController],
  providers: [BlogService],
  exports : [BlogService]
})
export class BlogModule {}
