import { Module, Get } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    BlogModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
