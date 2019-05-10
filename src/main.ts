import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata";
import {createConnection} from "typeorm";
import {ArticleEntity} from "./blog/entities/article.entity";
//import {BlogService} from './blog/blog.service';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
