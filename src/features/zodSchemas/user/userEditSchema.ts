import { z } from "zod";
import { emailSchema } from "@/features/zodSchemas/common/emailSchema";

export const userEditSchema = z.object({
  email: emailSchema,
});
