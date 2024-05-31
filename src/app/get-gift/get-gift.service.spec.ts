import { Test, TestingModule } from '@nestjs/testing';
import { GetGiftService } from './get-gift.service';

describe('GetGiftService', () => {
  let service: GetGiftService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetGiftService],
    }).compile();

    service = module.get<GetGiftService>(GetGiftService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
