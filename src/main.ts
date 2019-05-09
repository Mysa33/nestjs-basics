import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata";
import {createConnection} from "typeorm";
import {ArticleEntity} from "./blog/entities/article.entity";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "miage",
  entities: [
      ArticleEntity
  ],
  synchronize: true,
  logging: false
}).then(connection => {
  console.log("DB connected ! ", connection);
}).catch(error => console.log(error));