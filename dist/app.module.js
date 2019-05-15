"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
require("reflect-metadata");
const nest_router_1 = require("nest-router");
const typeorm_1 = require("@nestjs/typeorm");
const blog_module_1 = require("./blog/blog.module");
const blog_controller_1 = require("./blog/blog.controller");
const comments_module_1 = require("./comments/comments.module");
const routes_const_1 = require("./routes.const");
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
        ],
        controllers: [blog_controller_1.BlogController],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map