import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ArticleStatus } from 'constants/enums';

@Entity()
export class Article{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    author: number;

    @Column('varchar')
    title: string;

    /** 摘要 */
    @Column('text')
    summary: string;

    /** 内容 */
    @Column('text')
    content: string;

    @Column({ default: ArticleStatus.PUBLISHED })
    status: ArticleStatus;

    /** 投票 */
    @Column('int')
    votes: number = 0;

    /** 查看次数 */
    @Column('int')
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