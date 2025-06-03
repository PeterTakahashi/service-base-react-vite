import type { FC } from "react";
import { useVerifiedUser } from "@/features/hooks/swr/fetcher/user/useVerifiedUser";
import { BalanceCard } from "@/components/molecules/BalanceCard";
import { AddFundsButton } from "@/components/molecules/AddFundsButton";
import { WalletHistoryButton } from "@/components/molecules/WalletHistoryButton";
import { useNavigate } from "react-router-dom";

export const WalletPage: FC = () => {
  const { user } = useVerifiedUser();
  const navigate = useNavigate();

  if (!user) return;

  return (
    <div>
      <BalanceCard balance={user.wallet?.balance} className="w-full max-w-sm" />
      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:gap-6">
        <AddFundsButton onClick={() => navigate("/deposit")} />
        <WalletHistoryButton
          onClick={() => console.log("View Wallet History button clicked")}
        />
      </div>
    </div>
  );
};
