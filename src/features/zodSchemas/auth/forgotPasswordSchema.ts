import { z } from "zod";
import { emailSchema } from "@/features/zodSchemas/common/emailSchema";

export const forgotPasswordSchema = z.object({
  email: emailSchema,
});
