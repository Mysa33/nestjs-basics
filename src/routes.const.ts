import { RouterModule, Routes } from 'nest-router';
import {AppModule} from './app.module';
import { BlogModule } from './blog/blog.module';
import { CommentsModule } from './comments/comments.module';
import { AppController } from './app.controller';
import { BlogController } from './blog/blog.controller';
import { CommentsController } from './comments/comments.controller';

export const routes: Routes = [{
    path: '/',
    module: AppModule,
    children: [
        {
            path: 'blog',
            module: BlogModule,
        },
        {
            path: 'comments',
            module: CommentsModule,
        },
    ],
}];