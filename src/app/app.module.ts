import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ORM_CONFIG } from '../../config/config';
import { ArticleModule } from './article/article.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    ArticleModule,
    TypeOrmModule.forRoot(ORM_CONFIG),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidationPipe,
    // },
  ],
})
export class AppModule {}
