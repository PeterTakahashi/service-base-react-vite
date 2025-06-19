import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSignUpMutation } from "@/features/hooks/swr/mutation/auth/useSignUpMutation";
import { useSignInMutation } from "@/features/hooks/swr/mutation/auth/useSignInMutation";
import type { SignUpValues } from "@/components/molecules/forms/AuthForm";
import { parseAxiosErrorDetails } from "@/lib/parseAxiosErrorDetails";
import type { ErrorDetail } from "@/types/api/error";

export function useSignUpForm() {
  const navigate = useNavigate();
  const { trigger: signUpTrigger, isMutating: isSignUpMutating } =
    useSignUpMutation();
  const { trigger: signInTrigger, isMutating: isSignInMutating } =
    useSignInMutation();

  const [errorDetails, setErrorDetails] = useState<ErrorDetail[] | null>(null);

  const onSubmitSignUp = async (data: SignUpValues) => {
    try {
      await signUpTrigger({
        email: data.email,
        password: data.password,
      });
      await signInTrigger({
        username: data.email,
        password: data.password,
        scope: "",
        grant_type: "password",
      });

      navigate("/not-verified");
    } catch (error) {
      setErrorDetails(parseAxiosErrorDetails(error));
    }
  };

  return {
    onSubmitSignUp,
    errorDetails,
    isMutating: isSignUpMutating || isSignInMutating,
  };
}
