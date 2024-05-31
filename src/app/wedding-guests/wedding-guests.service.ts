import { Injectable } from '@nestjs/common';
import { CreateWeddingGuestDto } from './dto/create-wedding-guest.dto';
import { UpdateWeddingGuestDto } from './dto/update-wedding-guest.dto';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class WeddingGuestsService {
  constructor(private prismaService: PrismaService) {}

  create(createWeddingGuestDto: CreateWeddingGuestDto) {
    return this.prismaService.weddingGuest.create({
      data: createWeddingGuestDto,
    });
  }

  findAll() {
    return this.prismaService.weddingGuest.findMany();
  }

  findOne(id: number) {
    return this.prismaService.weddingGuest.findUnique({
      where: { id },
    });
  }

  update(id: number, updateWeddingGuestDto: UpdateWeddingGuestDto) {
    return this.prismaService.weddingGuest.update({
      where: { id },
      data: updateWeddingGuestDto,
    });
  }

  remove(id: number) {
    return this.prismaService.weddingGuest.delete({
      where: { id },
    });
  }
}
