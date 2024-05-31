import '@wahyubucil/nestjs-zod-openapi/boot';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { patchNestjsSwagger } from '@wahyubucil/nestjs-zod-openapi';

// #region BigInt JSON
declare global {
  interface BigInt {
    toJSON(): string;
  }
}

BigInt.prototype.toJSON = function () {
  return this.toString();
};
// #endregion

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // #region Swagger

  const config = new DocumentBuilder()
    .setTitle('Casei Presentes')
    .setDescription('Uma API de Presentes para a Casei')
    .setVersion('0.1')
    .build();

  patchNestjsSwagger({ schemasSort: 'alpha' });

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
  // #endregion

  await app.listen(5000);
}
bootstrap();
