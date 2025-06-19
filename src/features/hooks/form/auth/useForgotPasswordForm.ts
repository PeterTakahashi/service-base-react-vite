import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForgotPasswordMutation } from "@/features/hooks/swr/mutation/auth/useForgotPasswordMutation";
import { type ForgotPasswordValues } from "@/components/molecules/forms/ForgotPasswordForm";
import { parseAxiosErrorDetails } from "@/lib/parseAxiosErrorDetails";
import type { ErrorDetail } from "@/types/api/error";

export const useForgotPasswordForm = () => {
  const [errorDetails, setErrorDetails] = useState<ErrorDetail[] | null>(null);
  const { trigger: forgotPasswordTrigger, isMutating } =
    useForgotPasswordMutation();
  const navigate = useNavigate();

  const onSubmitForgotPassword = useCallback(
    async (data: ForgotPasswordValues): Promise<void> => {
      try {
        await forgotPasswordTrigger(data);
        navigate("/sent-reset-password-mail");
      } catch (error) {
        setErrorDetails(parseAxiosErrorDetails(error));
      }
    },
    [forgotPasswordTrigger, navigate]
  );

  return {
    errorDetails,
    onSubmitForgotPassword,
    isMutating,
  };
};
