import { z } from "zod";
import { passwordSchema } from "@/features/zodSchemas/common/passwordSchema";
import { emailSchema } from "@/features/zodSchemas/common/emailSchema";

export const signUpSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
