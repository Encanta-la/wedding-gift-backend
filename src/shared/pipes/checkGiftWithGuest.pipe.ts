import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  ConflictException,
} from '@nestjs/common';
import { CreateGetGiftDto } from 'src/app/get-gift/dto/create-get-gift.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CheckGiftWithGuestPipe implements PipeTransform {
  constructor(private prismaService: PrismaService) {}

  async transform(value: CreateGetGiftDto, metadata: ArgumentMetadata) {
    const giftId = Number(value.giftId);
    const guestId = Number(value.guestId);

    const gift = await this.prismaService.gift.findUnique({
      where: {
        id: giftId,
        AND: [{ id: giftId }, { giftBuyerId: guestId }],
      },
    });

    if (gift) {
      throw new ConflictException(`Gift #${giftId} already has a buyer`);
    }

    return value;
  }
}
