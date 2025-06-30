import { type ErrorSource } from "@/types/api/error";

/**
 * Extracts the field name from ErrorSource.pointer.
 *
 * Example:
 *   "#/email"                       -> "email"
 *
 * Returns null if the format is unexpected.
 */
export const sourceToField = (source?: ErrorSource | null): string | null => {
  const pointer = source?.pointer;
  if (!pointer) return null;

  const cleaned = pointer.replace(/^#?\//, "");

  const segments = cleaned.split("/");
  const field = segments.pop();

  return field || null;
};
