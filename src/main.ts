import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { frontUrl } from './utils/frontUrl';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: frontUrl });
  await app.listen(3001);
}
bootstrap();
