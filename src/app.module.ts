import { Module } from '@nestjs/common';
import "reflect-metadata";
import {TypeOrmModule} from '@nestjs/typeorm'
import { BlogModule } from './blog/blog.module';
import {BlogService} from './blog/blog.service';
import {BlogController} from './blog/blog.controller';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    BlogModule,
    CommentsModule,
    //BlogService
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'miage',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [BlogController],
  providers: []
  
})
export class AppModule {
}
