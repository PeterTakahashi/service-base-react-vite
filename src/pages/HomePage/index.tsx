import type { FC } from "react";
import { useVerifiedUser } from "@/features/hooks/swr/fetcher/user/useVerifiedUser";
import { useLogout } from "@/features/hooks/auth/useLogout";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/ui/Header";
import { serviceName } from "@/config";

export const HomePage: FC = () => {
  const { user } = useVerifiedUser();
  const { onLogout } = useLogout();
  const navigate = useNavigate();

  if (!user) return;

  return (
    <div className="min-h-screen">
      <Header
        title={serviceName}
        onDeposit={() => navigate("/deposit")}
        onEditProfile={() => navigate("/me/edit")}
        onLogout={onLogout}
      />
      <div className="flex flex-col items-center justify-center min-h-80 px-4 py-4">
        <h1 className="text-4xl font-bold mb-4">Welcome, {user.email}!</h1>
        <p className="text-lg text-gray-700">You have verified your account.</p>
      </div>
    </div>
  );
};
