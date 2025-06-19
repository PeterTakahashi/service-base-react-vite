import type { ErrorDetail } from "@/types/api/error";

export const errorDetails: Record<string, ErrorDetail> = {
  internal_server_error: {
    status: "500",
    code: "internal_server_error",
    title: "Internal Server Error",
    detail: "An unexpected error occurred. Please try again later.",
  },
  token_missing: {
    status: "400",
    code: "token_missing",
    title: "Token Missing",
    detail: "The token is missing. Please provide a valid token.",
  },
};
