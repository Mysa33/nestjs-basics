import { ApiModelProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ArticleDto{

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
    @IsNumber()
    readonly likes: number;

}