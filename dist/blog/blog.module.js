"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const testing_1 = require("@nestjs/testing");
const blog_controller_1 = require("./blog.controller");
const article_entity_1 = require("./entities/article.entity");
const blog_service_1 = require("./blog.service");
const article_dto_1 = require("../dtos/article.dto");
let BlogModule = class BlogModule {
};
BlogModule = __decorate([
    common_1.Module({
        imports: [
            article_dto_1.ArticleDto,
            typeorm_1.TypeOrmModule.forFeature([article_entity_1.ArticleEntity]),
            common_1.HttpModule,
            testing_1.TestingModule
        ],
        controllers: [blog_controller_1.BlogController],
        providers: [blog_service_1.BlogService],
        exports: [blog_service_1.BlogService]
    })
], BlogModule);
exports.BlogModule = BlogModule;
//# sourceMappingURL=blog.module.js.map