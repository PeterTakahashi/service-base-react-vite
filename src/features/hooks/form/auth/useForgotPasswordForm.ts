import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useForgotPasswordMutation } from "@/features/hooks/swr/mutation/auth/useForgotPasswordMutation";
import { type ForgotPasswordValues } from "@/components/molecules/forms/ForgotPasswordForm";

export const useForgotPasswordForm = () => {
  const {
    trigger: forgotPasswordTrigger,
    isMutating,
    errorDetails,
  } = useForgotPasswordMutation();
  const navigate = useNavigate();

  const onSubmitForgotPassword = useCallback(
    async (data: ForgotPasswordValues): Promise<void> => {
      try {
        await forgotPasswordTrigger(data);
        navigate("/sent-reset-password-mail");
      } catch (error) {
        console.error(error);
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
