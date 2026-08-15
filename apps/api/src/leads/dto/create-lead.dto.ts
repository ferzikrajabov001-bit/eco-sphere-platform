import { z } from 'zod';

export const CreateLeadSchema = z.object({
  companyName: z.string().min(2, 'Укажите название компании'),
  inn: z.string().optional().or(z.literal('')),
  contactName: z.string().min(2, 'Как к вам обращаться?'),
  phone: z.string().regex(/^\+7[\d\s\-()]{9,14}$/, 'Некорректный номер телефона'),
  email: z.string().email('Введите корректный Email'),
  comment: z.string().optional(),
  products: z.array(z.object({
    productId: z.string(),
    sku: z.string(),
    name: z.string(),
    quantity: z.number().int().positive(),
    price: z.number(),
  })),
  source: z.enum(['CART', 'MAIN_FORM', 'PRODUCT_PAGE']).default('CART'),
});

export type CreateLeadDto = z.infer<typeof CreateLeadSchema>;
