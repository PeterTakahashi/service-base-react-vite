import { useEffect } from "react";
import { useUser } from "@/features/hooks/swr/fetcher/user/useUser";
import { useVerifyTokenMutation } from "@/features/hooks/swr/mutation/useVerifyTokenMutation";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export function useVerifyToken() {
  const { token } = useParams<{ token: string }>();
  const { user, isLoading, mutate } = useUser();
  const navigate = useNavigate();
  const { trigger: verifyToken } = useVerifyTokenMutation();

  useEffect(() => {
    const doVerify = async () => {
      if (!token) return;
      if (user?.is_verified) {
        navigate("/");
        return;
      }

      try {
        const verifiedUser = await verifyToken({ token });
        if (verifiedUser.is_verified) {
          navigate("/", {
            state: { successMessage: "Your email has been verified." },
          });
        } else {
          navigate("/not-verified");
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (!isLoading && user && !user.is_verified && token) {
      doVerify();
    } else if (!isLoading && user && user.is_verified) {
      navigate("/");
    }
  }, [isLoading, user, token, mutate, navigate, verifyToken]);
}
