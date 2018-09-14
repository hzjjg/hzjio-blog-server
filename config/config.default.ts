import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/** 数据库连接方式 */
export const ORM_CONFIG: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
};