import { Module } from '@nestjs/common';
import "reflect-metadata";
import { RouterModule } from 'nest-router';
import {TypeOrmModule} from '@nestjs/typeorm'
import { BlogModule } from './blog/blog.module';
import {BlogController} from './blog/blog.controller';
import { CommentsModule } from './comments/comments.module';
import { routes } from './routes.const';

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
  ],
  controllers: [BlogController],
  providers: []
  
})
export class AppModule {
}
