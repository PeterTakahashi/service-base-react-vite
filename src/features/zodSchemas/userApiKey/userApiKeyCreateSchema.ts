import { z } from "zod";

const urlRegex = /^(https?:\/\/[^\s/$.?#].[^\s]*)$/;
const ipv4Regex =
  /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)$/;

export const UserApiKeyCreateSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be 100 characters or less"),

  expires_at: z
    .string()
    .nullable()
    .optional()
    .refine(
      (value) => {
        if (!value) return true; // Allow empty string / null / undefined
        return /^\d{4}-\d{2}-\d{2}$/.test(value);
      },
      { message: "Invalid date format. Use YYYY-MM-DD." }
    ),

  allowed_origin: z
    .string()
    .nullable()
    .optional()
    .refine(
      (value) => {
        if (!value) return true;
        return value
          .split(",")
          .map((v) => v.trim())
          .every((origin) => urlRegex.test(origin));
      },
      { message: "Invalid URL format in allowed_origin (comma-separated)." }
    ),

  allowed_ip: z
    .string()
    .nullable()
    .optional()
    .refine(
      (value) => {
        if (!value) return true;
        return value
          .split(",")
          .map((v) => v.trim())
          .every((ip) => ipv4Regex.test(ip));
      },
      { message: "Invalid IP address in allowed_ip (comma-separated)." }
    ),
});

export type UserApiKeyCreateValues = z.infer<typeof UserApiKeyCreateSchema>;
