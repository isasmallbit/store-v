import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,
    origin: ['https://neova.io','https://www.neova.io', 'http://localhost:5173'],
  });

  await app.listen(8080);

  return app.getUrl();
}

bootstrap();
