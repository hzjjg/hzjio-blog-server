import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    role: number;

    @Column()
    nickname: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    creatTime: number;

    @Column()
    lastLoginTime: number;

    @Column()
    loginCount: number;

}