import axios, { AxiosError } from "axios";
import type { ErrorResponse, ErrorDetail } from "@/types/api/error";
import { errorDetails } from "@/lib/errorDetails";

const defaultErrorDetail: ErrorDetail = errorDetails.internal_server_error;

export function parseAxiosErrorDetails(error: unknown): ErrorDetail[] {
  if (!axios.isAxiosError(error)) {
    return [defaultErrorDetail];
  }

  const axiosError = error as AxiosError<ErrorResponse>;
  const response = axiosError.response;
  if (!response) {
    return [defaultErrorDetail];
  }
  const data = response.data;
  return data.errors;
}
