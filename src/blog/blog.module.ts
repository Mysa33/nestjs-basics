import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogController } from './blog.controller';
import {ArticleEntity} from './entities/article.entity'

@Module({
  imports: [
    //TypeOrmModule.forFeature([ArticleEntity])
  ],
  controllers: [BlogController]
})
export class BlogModule {}
