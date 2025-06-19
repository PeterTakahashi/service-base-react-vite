import { useParams, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

import type { ResetPasswordValues } from "@/components/molecules/forms/ResetPasswordForm";
import { useResetPasswordMutation } from "@/features/hooks/swr/mutation/auth/useResetPasswordMutation";
import { parseAxiosErrorDetails } from "@/lib/parseAxiosErrorDetails";
import type { ErrorDetail } from "@/types/api/error";
import { errorDetails } from "@/lib/errorDetails";

const tokenMissingErrorDetail = errorDetails.token_missing;

export const useResetPasswordForm = () => {
  const { token } = useParams<{ token: string }>();
  const [errorDetails, setErrorDetails] = useState<ErrorDetail[] | null>(null);
  const navigate = useNavigate();

  const { trigger, isMutating } = useResetPasswordMutation();

  const onSubmitResetPassword = useCallback(
    async (values: ResetPasswordValues) => {
      const { password } = values;

      if (!token) {
        setErrorDetails([tokenMissingErrorDetail]);
        return;
      }

      try {
        await trigger({ password, token });
        setErrorDetails(null);
        navigate("/signin", {
          state: { successMessage: "Password reset successfully" },
        });
      } catch (error) {
        setErrorDetails(parseAxiosErrorDetails(error));
      }
    },
    [token, navigate, trigger]
  );

  return {
    onSubmitResetPassword,
    errorDetails,
    isMutating,
  };
};
