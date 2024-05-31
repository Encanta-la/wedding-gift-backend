import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { GiftService } from './gift.service';
import { CreateGiftDto } from './dto/create-gift.dto';
import { UpdateGiftDto } from './dto/update-gift.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('gift')
@ApiTags('gift')
export class GiftController {
  constructor(private readonly giftService: GiftService) {}

  @Post()
  create(@Body() createGiftDto: CreateGiftDto) {
    return this.giftService.create(createGiftDto);
  }

  @Get()
  findAll() {
    return this.giftService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    const gift = this.giftService.findOne(+id);

    if (!gift) {
      throw new NotFoundException(`Gift #${id} not found`);
    }

    return gift;
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateGiftDto: UpdateGiftDto,
  ) {
    return this.giftService.update(+id, updateGiftDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.giftService.remove(+id);
  }
}
