import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './filters/http-exception.filter';
import momentTimezone from 'moment-timezone';

  async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalFilters(new AllExceptionsFilter());
    Date.prototype.toJSON = function(): any {
      return momentTimezone(this).tz('America/São_Paulo').format('YYYY-MM-DD HH:mm:ss.SSS')
    }

    await app.listen(3000);
  }

bootstrap();