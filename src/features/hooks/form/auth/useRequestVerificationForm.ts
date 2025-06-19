import { useEffect, useState } from "react";
import { useUser } from "@/features/hooks/swr/fetcher/user/useUser";
import { useRequestVerifyTokenMutation } from "@/features/hooks/swr/mutation/auth/useRequestVerifyTokenMutation";
import { useNavigate } from "react-router-dom";
import { parseAxiosErrorDetails } from "@/lib/parseAxiosErrorDetails";
import type { ErrorDetail } from "@/types/api/error";

export function useRequestVerificationForm() {
  const { trigger: requestVerifyToken } = useRequestVerifyTokenMutation();
  const navigate = useNavigate();
  const [isMailSent, setIsMailSent] = useState(false);
  const [errorDetails, setErrorDetails] = useState<ErrorDetail[] | null>(null);
  const { user, isLoading, isError } = useUser();

  useEffect(() => {
    if (!isLoading && user && user.is_verified) {
      navigate("/", { state: { successMessage: "You are already verified." } });
      return;
    }
    if (!isLoading && user && !user.is_verified && !isMailSent) {
      (async () => {
        try {
          await requestVerifyToken({ email: user.email });
          setIsMailSent(true);
        } catch (error) {
          setErrorDetails(parseAxiosErrorDetails(error));
        }
      })();
    }
  }, [isLoading, user, isMailSent, navigate, requestVerifyToken]);

  return {
    user,
    isLoading,
    isError,
    errorDetails,
  };
}
