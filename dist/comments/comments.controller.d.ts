import { CommentDto } from '../dtos/comments.dto';
export declare class CommentsController {
    getAll(): any[];
    getOneComment(commentId: number): any[];
    create(commentDto: CommentDto): string;
}
