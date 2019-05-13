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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let ArticleEntity = class ArticleEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'article_id' }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ArticleEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ type: 'text', name: 'corps' }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "body", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], ArticleEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], ArticleEntity.prototype, "publiched", void 0);
__decorate([
    typeorm_1.Column({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], ArticleEntity.prototype, "likes", void 0);
ArticleEntity = __decorate([
    typeorm_1.Entity()
], ArticleEntity);
exports.ArticleEntity = ArticleEntity;
//# sourceMappingURL=article.entity.js.map