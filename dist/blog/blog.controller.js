"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const blog_service_1 = require("./blog.service");
const article_dto_1 = require("src/dtos/article.dto");
let BlogController = class BlogController {
    constructor(_blogService) {
        this._blogService = _blogService;
    }
    getAll() {
        common_1.Logger.log("Get all articles", "BlogController");
        return this._blogService.getArticles();
    }
    getOne(articleId) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log("get one article", "BlogController");
            const article = yield this._blogService.getOneArticle(articleId);
            if (article) {
                return article;
            }
            else {
                throw new common_1.HttpException('Article not found', common_1.HttpStatus.NOT_FOUND);
            }
        });
    }
    create(articleDto) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log("Create an article", "BlogController");
            const article = yield this._blogService.createArticle(articleDto);
            if (article)
                return article;
            throw new common_1.HttpException('Article not created', common_1.HttpStatus.NOT_MODIFIED);
        });
    }
    update(articleId, articleDto) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log("Update an article", "BlogController");
            const article = yield this._blogService.updateArticle(articleId, articleDto);
            if (article)
                return article;
            throw new common_1.HttpException('Article not modified', common_1.HttpStatus.NOT_MODIFIED);
        });
    }
    remove(articleId) {
        return __awaiter(this, void 0, void 0, function* () {
            common_1.Logger.log("Remove an article", "BlogController");
            const article = yield this._blogService.removeArticle(articleId);
            if (article)
                return article;
            throw new common_1.HttpException('Article not found', common_1.HttpStatus.NOT_FOUND);
        });
    }
};
__decorate([
    common_1.Get('getAllArticles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "getAll", null);
__decorate([
    common_1.Get('getOneArticle/:articleId'),
    __param(0, common_1.Param('articleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getOne", null);
__decorate([
    common_1.Post('createOneArticle'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_dto_1.ArticleDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "create", null);
__decorate([
    common_1.Put('updateOneArticle/:articleId'),
    __param(0, common_1.Param('articleId')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "update", null);
__decorate([
    common_1.Delete(':articleId'),
    __param(0, common_1.Param('articleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "remove", null);
BlogController = __decorate([
    common_1.Controller('blog'),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], BlogController);
exports.BlogController = BlogController;
//# sourceMappingURL=blog.controller.js.map