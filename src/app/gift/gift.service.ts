import { Injectable } from '@nestjs/common';
import { CreateGiftDto } from './dto/create-gift.dto';
import { UpdateGiftDto } from './dto/update-gift.dto';

import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class GiftService {
  constructor(private prismaService: PrismaService) {}

  create(createGiftDto: CreateGiftDto) {
    return this.prismaService.gift.create({
      data: createGiftDto,
    });
  }

  findAll() {
    return this.prismaService.gift.findMany({
      orderBy: {
        giftBuyerId: 'desc',
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.gift.findUnique({
      where: { id },
    });
  }

  update(id: number, updateGiftDto: UpdateGiftDto) {
    return this.prismaService.gift.update({
      where: { id },
      data: updateGiftDto,
    });
  }

  remove(id: number) {
    return this.prismaService.gift.delete({
      where: { id },
    });
  }
}
