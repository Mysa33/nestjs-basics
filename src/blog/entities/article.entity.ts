import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class ArticleEntity {

    @PrimaryGeneratedColumn({name:'article_id'})
    id: number;

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

}