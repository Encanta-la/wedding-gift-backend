import { Module } from '@nestjs/common';
import { GetGiftService } from './get-gift.service';
import { GetGiftController } from './get-gift.controller';
import { PrismaModule } from 'src/shared/prisma/prisma.module';

@Module({
  controllers: [GetGiftController],
  providers: [GetGiftService],
  imports: [PrismaModule],
})
export class GetGiftModule {}
