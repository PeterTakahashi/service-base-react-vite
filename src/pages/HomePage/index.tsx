import type { FC } from "react";
import { useVerifiedUser } from "@/features/hooks/swr/fetcher/user/useVerifiedUser";
import { toUsdFloat } from "@/lib/toUsdFloat";

export const HomePage: FC = () => {
  const { user } = useVerifiedUser();

  if (!user) return;

  return (
    <div>
      <div className="flex flex-col items-center justify-center px-4 py-4">
        <h1 className="text-4xl font-bold mb-4">Welcome, {user.email}!</h1>
        <p className="text-lg text-gray-700">You have verified your account.</p>
        <p className="text-lg text-gray-700 mt-2">
          Your wallet balance is:{" "}
          <strong>${toUsdFloat(user.wallet?.balance)}</strong>
        </p>
      </div>
    </div>
  );
};
