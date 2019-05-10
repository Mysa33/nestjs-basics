import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogController } from './blog.controller';
import {ArticleEntity} from './entities/article.entity'
import { BlogService } from './blog.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ArticleEntity])
  ],
  controllers: [BlogController],
  providers: [BlogService],
  exports : [BlogService]
  

})
export class BlogModule {}
