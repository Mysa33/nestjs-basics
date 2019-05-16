"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_module_1 = require("./app.module");
const blog_module_1 = require("./blog/blog.module");
const comments_module_1 = require("./comments/comments.module");
exports.routes = [{
        path: '/',
        module: app_module_1.AppModule,
        children: [
            {
                path: 'blog',
                module: blog_module_1.BlogModule,
            },
            {
                path: 'comments',
                module: comments_module_1.CommentsModule,
            },
        ],
    }];
//# sourceMappingURL=routes.const.js.map