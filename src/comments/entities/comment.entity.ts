import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity()
export class CommentEntity {

    @Entity('comments')
    @PrimaryGeneratedColumn({name:'comment_id'})
    id: string;

    @Column()
    title: string;

    @Column({type:'text', name:'corps'})
    body: string;

    @CreateDateColumn()
    postedAt: Date;

    @Column({type :'boolean', default: true})
    publiched: boolean;

}