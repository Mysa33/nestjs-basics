import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany} from "typeorm";
import {CommentEntity} from '../../comments/entities/comment.entity';

@Entity()
export class ArticleEntity {

    @PrimaryGeneratedColumn({name:'article_id'})
    id: string;

    @Column()
    title: string;

    @Column({type:'text', name:'corps'})
    body: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column({type :'boolean', default: true})
    publiched: boolean;

    @Column({type :'int', default: 0})
    likes: number;

    /*@OneToMany(type => CommentEntity, ArticleEntity => ArticleEntity.photos)
    user: User;*/

}