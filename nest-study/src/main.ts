import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// 3000번 포트로 서버 실행
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 파이프 생성
  // npm install class-validator 필요
  app.useGlobalPipes(
    new ValidationPipe({
      // DTO 형식 유효성 검사 싱기방기
      whitelist : true,
      forbidNonWhitelisted: true,

      // request 측 데이터타입 자동변환 
      transform : true,
      transformOptions: {
        enableImplicitConversion : true,
      }
    }
    )
  );
  await app.listen(3000);
}
bootstrap();
