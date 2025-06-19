import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSignInMutation } from "@/features/hooks/swr/mutation/auth/useSignInMutation";
import type { SignInValues } from "@/components/molecules/forms/AuthForm";
import { parseAxiosErrorDetails } from "@/lib/parseAxiosErrorDetails";
import type { ErrorDetail } from "@/types/api/error";
import { useAuth } from "@/features/hooks/context/useAuth";

export function useSignInForm() {
  const navigate = useNavigate();
  const { trigger, isMutating } = useSignInMutation();
  const [errorDetails, setErrorDetails] = useState<ErrorDetail[] | null>(null);
  const { setIsLoggedIn } = useAuth();

  const onSubmitSignIn = async (data: SignInValues) => {
    try {
      await trigger({
        username: data.email,
        password: data.password,
        scope: "",
        grant_type: "password",
      });
      setIsLoggedIn(true);
      navigate("/", {
        state: { successMessage: "Logged in successfully" },
      });
    } catch (error) {
      setErrorDetails(parseAxiosErrorDetails(error));
    }
  };

  return {
    onSubmitSignIn,
    errorDetails,
    isMutating,
  };
}
