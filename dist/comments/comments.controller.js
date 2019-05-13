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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const comments_dto_1 = require("../dtos/comments.dto");
let CommentsController = class CommentsController {
    getAll() {
        common_1.Logger.log("Get all comments", "CommentsController");
        return [];
    }
    getOneComment(commentId) {
        common_1.Logger.log("Get one comment", "CommentsController");
        return 'get one comment';
    }
    create(commentDto) {
        common_1.Logger.log("Create an comment", "CommentsController");
        return 'Create one comment';
    }
};
__decorate([
    common_1.Get('/getAllComments'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "getAll", null);
__decorate([
    common_1.Get(':commentId'),
    __param(0, common_1.Param('commentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "getOneComment", null);
__decorate([
    common_1.Post('/createOneComment'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comments_dto_1.CommentDto]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "create", null);
CommentsController = __decorate([
    common_1.Controller()
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map