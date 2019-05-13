import { Repository } from 'typeorm';
import { ArticleEntity } from './entities/article.entity';
import { ArticleDto } from '../dtos/article.dto';
export declare class BlogService {
    private readonly articlesRepository;
    constructor(articlesRepository: Repository<ArticleEntity>);
    getArticles(): Promise<ArticleEntity[]>;
    getOneArticle(articleId: number): Promise<ArticleEntity>;
    createArticle(articleDto: ArticleDto): Promise<ArticleDto & ArticleEntity>;
    updateArticle(articleId: number, articleDto: ArticleDto): Promise<ArticleEntity>;
    removeArticle(articleId: number): Promise<ArticleEntity>;
}
