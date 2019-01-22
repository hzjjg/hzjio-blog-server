import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// 数据库连接方式
export const ORM_CONFIG: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Hzjjg931112.',
    database: 'hzjio_blog_dev',
};