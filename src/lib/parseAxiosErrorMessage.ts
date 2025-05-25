import axios, { AxiosError } from "axios";
import type { ErrorModel } from "@/types/api/errorModel";
import { errorCodesMap } from "./errorCodesMap";

export function parseAxiosErrorMessage(error: unknown): string {
  // 1) If it's not even an AxiosError, return a generic fallback
  if (!axios.isAxiosError(error)) {
    return "An unexpected error occurred. Please try again later.";
  }

  const axiosError = error as AxiosError<ErrorModel>;
  const status = axiosError.response?.status;
  const data = axiosError.response?.data;
  const detail = data?.detail;

  // 2) If `detail` is a recognized error code, return its mapped message
  if (typeof detail === "string" && errorCodesMap[detail]) {
    return errorCodesMap[detail];
  }

  // 3) Otherwise, check for common statuses
  switch (status) {
    case 400:
      return (
        (typeof detail === "string" && detail) ||
        "Bad request. Please check your input."
      );

    case 401:
      return (
        (typeof detail === "string" && detail) ||
        "Unauthorized. Please sign in and try again."
      );

    case 422:
      return (
        (typeof detail === "string" && detail) ||
        "Validation Error. Please check your input."
      );

    case 500:
      return "A server error occurred. Please try again later.";

    default:
      // 4) Fallback message if we don't recognize the status or detail code
      return (
        (typeof detail === "string" && detail) ||
        "An unexpected error occurred. Please try again."
      );
  }
}
