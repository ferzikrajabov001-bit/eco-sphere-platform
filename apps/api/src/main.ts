import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Разрешаем запросы с фронтенда
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  });

  // Глобальная валидация всех входящих данных
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // удаляет поля, которых нет в DTO
    forbidNonWhitelisted: true,
    transform: true,
  }));

  await app.listen(3001);
  console.log('🚀 API is running on: http://localhost:3001');
}
bootstrap();
