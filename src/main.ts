import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 👇 Global validation pipe
  app.useGlobalPipes(new ValidationPipe({ 
    whitelist: true,       // strips unknown properties
    forbidNonWhitelisted: true, // rejects unknown properties
    transform: true        // auto-transforms types (string -> number, etc.)
  }));
  await app.listen(process.env.DB_PORT || '4001');
  console.log(`🚀 Device Management service running on port 4001`);
}
bootstrap();