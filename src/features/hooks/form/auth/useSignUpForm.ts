import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSignUpMutation } from "@/features/hooks/swr/mutation/useSignUpMutation";
import { useSignInMutation } from "@/features/hooks/swr/mutation/useSignInMutation";
import type { SignUpValues } from "@/components/forms/AuthForm";
import { parseAxiosErrorMessage } from "@/lib/parseAxiosErrorMessage";

export function useSignUpForm() {
  const navigate = useNavigate();
  const { trigger: signUpTrigger, isMutating: isSignUpMutating } =
    useSignUpMutation();
  const { trigger: signInTrigger, isMutating: isSignInMutating } =
    useSignInMutation();

  const [errorMessage, setErrorMessage] = useState("");

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
      setErrorMessage(parseAxiosErrorMessage(error));
    }
  };

  return {
    onSubmitSignUp,
    errorMessage,
    isMutating: isSignUpMutating || isSignInMutating,
  };
}
