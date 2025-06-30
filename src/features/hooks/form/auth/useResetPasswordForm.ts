import { useParams, useNavigate } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";

import type { ResetPasswordValues } from "@/components/molecules/forms/ResetPasswordForm";
import { useResetPasswordMutation } from "@/features/hooks/swr/mutation/auth/useResetPasswordMutation";
import type { ErrorDetail } from "@/types/api/error";
import { errorDetails } from "@/lib/errorDetails";

const tokenMissingErrorDetail = errorDetails.token_missing;

export const useResetPasswordForm = () => {
  const { token } = useParams<{ token: string }>();
  const [errorDetails, setErrorDetails] = useState<ErrorDetail[] | null>(null);
  const navigate = useNavigate();

  const {
    trigger,
    isMutating,
    errorDetails: serverErrorDetails,
  } = useResetPasswordMutation();

  const onSubmitResetPassword = useCallback(
    async (values: ResetPasswordValues) => {
      const { password } = values;

      if (!token) {
        setErrorDetails([tokenMissingErrorDetail]);
        return;
      }

      await trigger({ password, token });
      setErrorDetails(null);
      navigate("/signin", {
        state: { successMessage: "Password reset successfully" },
      });
    },
    [token, navigate, trigger]
  );

  useEffect(() => {
    if (serverErrorDetails) {
      setErrorDetails(serverErrorDetails);
    }
  }, [serverErrorDetails]);

  return {
    onSubmitResetPassword,
    errorDetails,
    isMutating,
  };
};
