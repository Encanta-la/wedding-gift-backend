import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const createGetGiftDto = extendApi(
  z
    .object({
      guestId: z.string(),
      guestMessage: z.string(),
      giftId: z.string(),
    })
    .required(),
  {
    title: 'Get Gift from Guest',
    description: 'A gift from a guest',
  },
);

export class CreateGetGiftDto extends createZodDto(createGetGiftDto) {}
