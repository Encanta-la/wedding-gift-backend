import { Injectable } from '@nestjs/common';
import { CreateGetGiftDto } from './dto/create-get-gift.dto';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class GetGiftService {
  constructor(private prismaService: PrismaService) {}

  create(createGetGiftDto: CreateGetGiftDto) {
    const id = Number(createGetGiftDto.giftId);
    const guestId = Number(createGetGiftDto.guestId);

    return this.prismaService.gift.update({
      where: { id },
      data: {
        giftBuyerId: guestId,
        giftBuyerMessage: createGetGiftDto.guestMessage,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.gift.update({
      where: { id },
      data: {
        giftBuyerId: null,
        giftBuyerMessage: null,
      },
    });
  }
}
