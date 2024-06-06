import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const updateGiftDto = extendApi(
  z
    .object({
      name: z.string(),
      photoUrl: z.string(),
      linkUrl: z.string(),
      description: z.string(),
      voltage: z.number(),
      color: z.string(),
      price: z.number(),
    })
    .required(),
  {
    title: 'Update Gift',
    description: 'A gift for someone special',
  },
);

export class UpdateGiftDto extends createZodDto(updateGiftDto) {}
