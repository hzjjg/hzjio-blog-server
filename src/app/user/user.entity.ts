import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import { UserStatus } from 'constants/enums';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    role: number;

    @Column({ default: UserStatus.AVAILABLE })
    status: UserStatus;

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
}