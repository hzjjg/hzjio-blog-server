import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ORM_CONFIG } from '../../config/config';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';
import { CommonSubscriber } from 'database/common_subscriber';

@Module({
  imports: [
    TypeOrmModule.forRoot({...ORM_CONFIG, subscribers: [CommonSubscriber]}),
    ArticleModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
