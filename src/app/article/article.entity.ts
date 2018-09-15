import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsDate, Length } from 'class-validator';

@Entity()
export class Article{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    author: number;

    @Column({length: 500})
    title: string;

    /** 摘要 */
    @Column('text')
    summary: string;

    /** 内容 */
    @Column()
    content: string;

    /** 投票 */
    @Column()
    votes: number;

    /** 查看次数 */
    @Column()
    views: number;

    @Column()
    createTime: number;

    @Column()
    lastModifyTime: number;
}