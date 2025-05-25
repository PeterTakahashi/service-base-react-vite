import { z } from "zod";
import { specialChars } from "@/lib/specialChars";

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .regex(/\d/, "Password must contain at least one digit")
  .regex(/[A-Za-z]/, "Password must contain at least one letter")
  .regex(specialChars, "Password must contain at least one special character");
