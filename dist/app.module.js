"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const nest_router_1 = require("nest-router");
const typeorm_1 = require("@nestjs/typeorm");
const blog_module_1 = require("./blog/blog.module");
const blog_service_1 = require("./blog/blog.service");
const blog_controller_1 = require("./blog/blog.controller");
const comments_module_1 = require("./comments/comments.module");
const comments_controller_1 = require("./comments/comments.controller");
const routes_const_1 = require("./routes.const");
const article_entity_1 = require("./blog/entities/article.entity");
const article_dto_1 = require("./dtos/article.dto");
const app_controller_1 = require("./app.controller");
require("reflect-metadata");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            blog_module_1.BlogModule,
            comments_module_1.CommentsModule,
            nest_router_1.RouterModule.forRoutes(routes_const_1.routes),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'miage',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
                keepConnectionAlive: true,
                retryAttempts: 2,
                retryDelay: 1000
            }),
            common_1.HttpModule,
            article_entity_1.ArticleEntity,
            article_dto_1.ArticleDto
        ],
        controllers: [blog_controller_1.BlogController, comments_controller_1.CommentsController, app_controller_1.AppController],
        providers: [blog_service_1.BlogService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map