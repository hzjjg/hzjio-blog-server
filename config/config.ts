import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import devConfig from './config.dev';
import prodConfig from './config.prod';

let ORM_CONFIG: TypeOrmModuleOptions;

if (process.env.NODE_ENV === 'development') {
    ORM_CONFIG = devConfig;
} else {
    ORM_CONFIG = prodConfig;
}

export default ORM_CONFIG;