import { useEffect, useState } from "react";
import type { ErrorDetail } from "@/types/api/error";
import { sourceToField } from "@/lib/utils/sourceToField";

/**
 * Maps API ErrorDetail[] to react-hook-form errors,
 * and returns only messages not associated with a specific field.
 *
 * @param errorDetails   Array of errors returned from the API
 * @param setError       RHF's setError function
 * @param clearErrors    RHF's clearErrors function
 * @returns              Array of global (non-field-specific) error messages
 */
export const useServerErrors = <TFieldValues extends Record<string, unknown>>(
  errorDetails: ErrorDetail[] | null | undefined,
  setError: (
    name: keyof TFieldValues,
    error: { type: string; message: string }
  ) => void,
  clearErrors: () => void
) => {
  const [globalMessages, setGlobalMessages] = useState<string[] | null>(null);

  useEffect(() => {
    if (!errorDetails || errorDetails.length === 0) {
      clearErrors();
      setGlobalMessages(null);
      return;
    }

    clearErrors();

    const globals: string[] = [];

    errorDetails.forEach((e) => {
      const field = sourceToField(e.source);
      const message = e.detail || e.title;

      if (field) {
        setError(field as keyof TFieldValues, {
          type: "server",
          message,
        });
      } else {
        globals.push(message);
      }
    });

    setGlobalMessages(globals.length ? globals : null);
  }, [errorDetails, setError, clearErrors]);

  return globalMessages;
};
