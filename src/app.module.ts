import { Module, Get } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    BlogModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      database: 'miage',
      entities: ["src/**/**.entity.{ts,js}"],
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
