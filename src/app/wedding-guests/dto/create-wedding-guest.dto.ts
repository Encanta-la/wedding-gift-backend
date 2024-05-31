import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const createWeddingGuestDto = extendApi(
  z
    .object({
      name: z.string(),
      phone: z.string(),
    })
    .required(),
  {
    title: 'Create Wedding Guest',
    description: 'A guest at a wedding',
  },
);

export class CreateWeddingGuestDto extends createZodDto(
  createWeddingGuestDto,
) {}
