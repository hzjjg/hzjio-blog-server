import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    role: number;

    @Column()
    status: number;

    @Column()
    nickname: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'datetime',
        nullable: true,
    })
    createdDate: Date;

    @Column({
        type: 'datetime',
        nullable: true,
    })
    lastLoginDate: number;

    @Column({
        type: 'datetime',
        nullable: true,
    })
    updatedDate: Date;

    @Column()
    loginCount: number;

    @BeforeInsert()
    beforeCreate() {
        this.createdDate = new Date();
        this.updatedDate = new Date();
    }

    @BeforeUpdate()
    beforeUpdate() {
        this.updatedDate = new Date();
    }

}