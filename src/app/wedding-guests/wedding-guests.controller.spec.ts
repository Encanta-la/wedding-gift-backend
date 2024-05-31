import { Test, TestingModule } from '@nestjs/testing';
import { WeddingGuestsController } from './wedding-guests.controller';
import { WeddingGuestsService } from './wedding-guests.service';

describe('WeddingGuestsController', () => {
  let controller: WeddingGuestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeddingGuestsController],
      providers: [WeddingGuestsService],
    }).compile();

    controller = module.get<WeddingGuestsController>(WeddingGuestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
