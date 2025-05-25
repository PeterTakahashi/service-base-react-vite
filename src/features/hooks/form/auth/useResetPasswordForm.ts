import { useParams, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

import type { ResetPasswordValues } from "@/components/forms/ResetPasswordForm";
import { useResetPasswordMutation } from "@/features/hooks/swr/mutation/useResetPasswordMutation";
import { parseAxiosErrorMessage } from "@/lib/parseAxiosErrorMessage";

export const useResetPasswordForm = () => {
  const { token } = useParams<{ token: string }>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const { trigger, isMutating } = useResetPasswordMutation();

  const onSubmitResetPassword = useCallback(
    async (values: ResetPasswordValues) => {
      const { password } = values;

      if (!token) {
        setErrorMessage("Token is missing");
        return;
      }

      try {
        await trigger({ password, token });
        setErrorMessage(null);
        navigate("/signin", {
          state: { successMessage: "Password reset successfully" },
        });
      } catch (error) {
        setErrorMessage(parseAxiosErrorMessage(error));
      }
    },
    [token, navigate, trigger]
  );

  return {
    onSubmitResetPassword,
    errorMessage,
    isMutating,
  };
};
