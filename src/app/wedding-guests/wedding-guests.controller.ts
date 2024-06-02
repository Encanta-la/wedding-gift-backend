import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { WeddingGuestsService } from './wedding-guests.service';
import { CreateWeddingGuestDto } from './dto/create-wedding-guest.dto';
import { UpdateWeddingGuestDto } from './dto/update-wedding-guest.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('wedding-guests')
@ApiTags('wedding-guests')
export class WeddingGuestsController {
  constructor(private readonly weddingGuestsService: WeddingGuestsService) {}

  @Post()
  create(@Body() createWeddingGuestDto: CreateWeddingGuestDto) {
    return this.weddingGuestsService.create(createWeddingGuestDto);
  }

  @Get()
  findAll() {
    return this.weddingGuestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.weddingGuestsService.findOne(+id);
  }

  @Post('getOrCreate/:phone')
  findByPhoneOrCreateOne(
    @Param('phone') phone: string,
    @Body() createWeddingGuestDto: CreateWeddingGuestDto,
  ) {
    console.log('phone', phone);
    console.log('createWeddingGuestDto', createWeddingGuestDto);

    return this.weddingGuestsService.findByPhoneOrCreateOne(
      phone,
      createWeddingGuestDto,
    );
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateWeddingGuestDto: UpdateWeddingGuestDto,
  ) {
    return this.weddingGuestsService.update(+id, updateWeddingGuestDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.weddingGuestsService.remove(+id);
  }
}
