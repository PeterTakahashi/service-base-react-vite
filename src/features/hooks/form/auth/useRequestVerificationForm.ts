import { useEffect, useState, useCallback } from "react";
import { useUser } from "@/features/hooks/swr/fetcher/user/useUser";
import { useRequestVerifyTokenMutation } from "@/features/hooks/swr/mutation/auth/useRequestVerifyTokenMutation";
import { useNavigate } from "react-router-dom";

export function useRequestVerificationForm() {
  const { trigger: requestVerifyToken, errorDetails } =
    useRequestVerifyTokenMutation();
  const navigate = useNavigate();
  const [isMailSent, setIsMailSent] = useState(false);
  const { user, isLoading, isError } = useUser();

  const handleRequestVerifyToken = useCallback(
    async (email: string) => {
      try {
        await requestVerifyToken({ email });
        setIsMailSent(true);
      } catch (error) {
        console.error(error);
      }
    },
    [requestVerifyToken]
  );

  useEffect(() => {
    if (!isLoading && user && user.is_verified) {
      navigate("/", { state: { successMessage: "You are already verified." } });
      return;
    }
    if (!isLoading && user && !user.is_verified && !isMailSent) {
      handleRequestVerifyToken(user.email);
    }
  }, [isLoading, user, isMailSent, navigate, handleRequestVerifyToken]);

  return {
    user,
    isLoading,
    isError,
    errorDetails,
    handleRequestVerifyToken,
  };
}
