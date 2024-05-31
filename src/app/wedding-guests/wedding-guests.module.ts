import { Module } from '@nestjs/common';
import { WeddingGuestsService } from './wedding-guests.service';
import { WeddingGuestsController } from './wedding-guests.controller';
import { PrismaModule } from 'src/shared/prisma/prisma.module';

@Module({
  controllers: [WeddingGuestsController],
  providers: [WeddingGuestsService],
  imports: [PrismaModule],
})
export class WeddingGuestsModule {}
