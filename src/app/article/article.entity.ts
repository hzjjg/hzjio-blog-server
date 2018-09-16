import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, ManyToOne, JoinTable, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

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

    // @BeforeInsert()
    // beforeCreate() {
    //     this.createdDate = new Date();
    //     this.updatedDate = new Date();
    // }

    // @BeforeUpdate()
    // beforeUpdate() {
    //     this.updatedDate = new Date();
    // }
}