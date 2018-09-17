import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, ManyToOne, JoinTable, JoinColumn } from 'typeorm';
// import { User } from '../user/user.entity';
import { ArticleStatus } from 'constants/enums';

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

    @Column({ default: ArticleStatus.PUBLISHED })
    status: ArticleStatus;

    /** 投票 */
    @Column()
    votes: number = 0;

    /** 查看次数 */
    @Column()
    views: number = 0;

    @Column({
        type: 'datetime',
        nullable: true,
    })
    createdDate: Date;

    @Column({
        type: 'datetime',
        nullable: true,
    })
    updatedDate: Date;
}