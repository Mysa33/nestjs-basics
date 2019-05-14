import { RouterModule, Routes } from 'nest-router';
import { BlogModule } from './blog/blog.module';
import { CommentsModule } from './comments/comments.module';
export const routes:Routes = [
    {
        path: '/blog',
        module: BlogModule
    },
    {
        path: '/comments',
        module: CommentsModule
    }

];