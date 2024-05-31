import { Test, TestingModule } from '@nestjs/testing';
import { GetGiftController } from './get-gift.controller';
import { GetGiftService } from './get-gift.service';

describe('GetGiftController', () => {
  let controller: GetGiftController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetGiftController],
      providers: [GetGiftService],
    }).compile();

    controller = module.get<GetGiftController>(GetGiftController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
