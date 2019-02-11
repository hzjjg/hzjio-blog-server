import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    validationError: {
      target: true,
      value: true,
    },
  }));
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
