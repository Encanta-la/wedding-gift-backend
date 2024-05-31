import { Module } from '@nestjs/common';
import { GiftService } from './gift.service';
import { GiftController } from './gift.controller';
import { PrismaModule } from 'src/shared/prisma/prisma.module';

@Module({
  controllers: [GiftController],
  providers: [GiftService],
  imports: [PrismaModule],
})
export class GiftModule {}
