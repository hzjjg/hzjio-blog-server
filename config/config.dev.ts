import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// 数据库连接方式
const ORM_CONFIG: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123',
    database: 'hzjio_blog_dev',
};

export default ORM_CONFIG;
