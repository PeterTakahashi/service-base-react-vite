import { useCallback } from "react";
import { client } from "@/lib/client";
import { mutate } from "swr";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/features/hooks/context/useAuth";

export function useLogout() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();
  const onLogout = useCallback(async () => {
    try {
      await client.post("/auth/cookie/logout");
    } catch (error) {
      console.error("Logout request failed", error);
    } finally {
      mutate(() => true, undefined, { revalidate: false });
      setIsLoggedIn(false);
      navigate("/signin", {
        state: { successMessage: "Logged out successfully" },
      });
    }
  }, [navigate, setIsLoggedIn]);

  return { onLogout };
}
