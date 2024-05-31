import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const createGiftDto = extendApi(
  z
    .object({
      name: z.string(),
      photoUrl: z.string(),
      description: z.string(),
      voltage: z.number(),
      color: z.string(),
      price: z.number(),
    })
    .required(),
  {
    title: 'Create Gift',
    description: 'A gift for someone special',
  },
);

export class CreateGiftDto extends createZodDto(createGiftDto) {}
