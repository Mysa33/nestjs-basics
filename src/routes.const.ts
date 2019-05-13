import { RouterModule } from 'nest-router';
import { BlogModule } from './blog/blog.module';
import { CommentsModule } from './comments/comments.module';
export const routes:any[] = [
    {
        path: '/blog',
        module: BlogModule
    },
    {
        path: '/comments',
        module: CommentsModule
    }

];