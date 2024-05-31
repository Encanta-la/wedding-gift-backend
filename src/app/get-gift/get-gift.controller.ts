import { Controller, Post, Body, Param, Delete } from '@nestjs/common';
import { GetGiftService } from './get-gift.service';
import { CreateGetGiftDto } from './dto/create-get-gift.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('get-gift')
@ApiTags('get-gift')
export class GetGiftController {
  constructor(private readonly getGiftService: GetGiftService) {}

  @Post()
  create(@Body() createGetGiftDto: CreateGetGiftDto) {
    return this.getGiftService.create(createGetGiftDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.getGiftService.remove(+id);
  }
}
