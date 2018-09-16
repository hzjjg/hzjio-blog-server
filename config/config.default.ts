import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { resolve } from './resolve';
import { CommonSubscriber } from 'database/common_subscriber';

/** 数据库连接方式 */
export const ORM_CONFIG: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [resolve('/**/*.entity{.ts,.js}') ],
    synchronize: true,
};
