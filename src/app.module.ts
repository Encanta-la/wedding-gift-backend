import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GiftModule } from './app/gift/gift.module';
import { PrismaModule } from './shared/prisma/prisma.module';
import { WeddingGuestsModule } from './app/wedding-guests/wedding-guests.module';
import { ZodValidationPipe } from './shared/pipes/zodValidationNStrip.pipe';
import { APP_PIPE } from '@nestjs/core';
import { GetGiftModule } from './app/get-gift/get-gift.module';

@Module({
  imports: [GiftModule, PrismaModule, WeddingGuestsModule, GetGiftModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
