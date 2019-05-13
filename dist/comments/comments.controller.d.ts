import { CommentDto } from '../dtos/comments.dto';
export declare class CommentsController {
    getAll(): any[];
    getOneComment(commentId: any): string;
    create(commentDto: CommentDto): string;
}
