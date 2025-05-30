import { z } from "zod";

export const createPaymentIntentSchema = z.object({
  amount: z.coerce.number().int().positive(),
});
