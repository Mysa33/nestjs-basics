import { ApiModelProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CommentDto{

    @ApiModelProperty()
    @IsNotEmpty()
    @IsString()
    readonly title : string;

    @ApiModelProperty()
    @IsNotEmpty()
    @IsString()
    readonly body: string;

    @ApiModelProperty()
    @IsNotEmpty()
    @IsDate()
    readonly postedAt:Date;

}