import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ORM_CONFIG from '../../config/config';
import { CommonSubscriber } from '../database/common_subscriber';
import { resolve } from '../utils/resolve';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ORM_CONFIG,
      subscribers: [CommonSubscriber],
      entities: [resolve('./**/*.entity{.ts,.js}')],
      synchronize: true,
    }),
    ArticleModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule { }
