import { type FC } from "react";
import { useVerifyToken } from "@/features/hooks/auth/useVerifyToken";

export const VerifyTokenPage: FC = () => {
  useVerifyToken();

  return null;
};
