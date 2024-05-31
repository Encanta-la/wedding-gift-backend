import { Test, TestingModule } from '@nestjs/testing';
import { WeddingGuestsService } from './wedding-guests.service';

describe('WeddingGuestsService', () => {
  let service: WeddingGuestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeddingGuestsService],
    }).compile();

    service = module.get<WeddingGuestsService>(WeddingGuestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
