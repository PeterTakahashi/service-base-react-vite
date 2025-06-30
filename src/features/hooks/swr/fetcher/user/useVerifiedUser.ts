import { useUser } from "@/features/hooks/swr/fetcher/user/useUser";
import { useNavigate } from "react-router-dom";

export function useVerifiedUser() {
  const { user, isLoading, isError, mutate } = useUser();
  const navigate = useNavigate();

  if (!isLoading && user && !user.is_verified) {
    navigate("/not-verified");
  }

  return {
    user,
    isLoading,
    isError,
    mutate,
  };
}
