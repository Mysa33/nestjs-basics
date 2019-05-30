import { Controller, Get, Logger, Param, Post, Body, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CommentEntity } from './entities/comment.entity';
import {CommentDto} from '../dtos/comments.dto';
@Controller('commments')
export class CommentsController {
    
    @Get()
    getAll(){
        Logger.log("Get all comments", "CommentsController");
        return [];
    }

    @Get(':commentId')
    getOneComment(@Param('commentId') commentId:number){
        Logger.log("Get one comment", "CommentsController");
        return [];
    }

    @Post('')
    create(@Body() commentDto:CommentDto) {
        Logger.log("Create an comment", "CommentsController");
        return 'Create one comment'
    }

}
