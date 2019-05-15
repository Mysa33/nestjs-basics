import { Module, HttpModule} from '@nestjs/common';
import "reflect-metadata";
import { RouterModule } from 'nest-router';
import {TypeOrmModule} from '@nestjs/typeorm'
import { BlogModule } from './blog/blog.module';
import { BlogService } from './blog/blog.service';
import {BlogController} from './blog/blog.controller';
import { CommentsModule } from './comments/comments.module';
import { CommentsController } from './comments/comments.controller';
import { routes } from './routes.const';
import {ArticleEntity} from './blog/entities/article.entity';
import {ArticleDto} from './dtos/article.dto';
@Module({
  imports: [
    BlogModule,
    CommentsModule,
    RouterModule.forRoutes(routes),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'miage',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      keepConnectionAlive: true,
      retryAttempts: 2,
      retryDelay: 1000
    }),
    HttpModule,
    ArticleEntity,
    ArticleDto
  ],
  controllers: [BlogController, CommentsController],
  providers: [BlogService]
  
})
export class AppModule {
}
