import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserStatus } from '../../constants/enums';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'int', default: 0})
    role: number;

    @Column({ type: 'int', default: UserStatus.AVAILABLE })
    status: UserStatus;

    @Column('varchar')
    nickname: string;

    @Column('varchar')
    phone: string;

    @Column('varchar')
    email: string;

    @Column('varchar')
    password: string;

    @Column({type: 'datetime', nullable: true})
    lastLoginDate: number;

    @Column({ default: 0 })
    loginCount: number;

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