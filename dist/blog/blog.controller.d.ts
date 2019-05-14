import { BlogService } from './blog.service';
import { ArticleDto } from '../dtos/article.dto';
export declare class BlogController {
    private readonly _blogService;
    constructor(_blogService: BlogService);
    getAll(): Promise<import("./entities/article.entity").ArticleEntity[]>;
    getOne(articleId: any): Promise<import("./entities/article.entity").ArticleEntity>;
    create(articleDto: ArticleDto): Promise<ArticleDto & import("./entities/article.entity").ArticleEntity>;
    update(articleId: any, articleDto: any): Promise<import("./entities/article.entity").ArticleEntity>;
    remove(articleId: any): Promise<import("./entities/article.entity").ArticleEntity>;
}
