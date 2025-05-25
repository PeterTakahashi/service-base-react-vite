import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSignInMutation } from "@/features/hooks/swr/mutation/useSignInMutation";
import type { SignInValues } from "@/components/forms/AuthForm";
import { parseAxiosErrorMessage } from "@/lib/parseAxiosErrorMessage";
import { useAuth } from "@/features/hooks/context/useAuth";

export function useSignInForm() {
  const navigate = useNavigate();
  const { trigger, isMutating } = useSignInMutation();
  const [errorMessage, setErrorMessage] = useState("");
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
      setErrorMessage(parseAxiosErrorMessage(error));
    }
  };

  return {
    onSubmitSignIn,
    errorMessage,
    isMutating,
  };
}
