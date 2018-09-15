import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
    votes: number = 0;

    /** 查看次数 */
    @Column()
    views: number = 0;

    @Column()
    createTime: number = 0;

    @Column()
    lastModifyTime: number = 0;
}