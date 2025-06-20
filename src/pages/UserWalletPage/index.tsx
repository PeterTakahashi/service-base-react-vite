import type { FC } from "react";
import { useVerifiedUser } from "@/features/hooks/swr/fetcher/user/useVerifiedUser";
import { BalanceCard } from "@/components/molecules/BalanceCard";
import { AddFundsButton } from "@/components/molecules/buttons/AddFundsButton";
import { WalletHistoryButton } from "@/components/molecules/buttons/WalletHistoryButton";
import { useNavigate } from "react-router-dom";
import { useUserWalletPageBreadcrumbs } from "./breadcrumbs";

export const UserWalletPage: FC = () => {
  const { user } = useVerifiedUser();
  const navigate = useNavigate();

  useUserWalletPageBreadcrumbs();

  if (!user) return;

  return (
    <div>
      <BalanceCard
        balance={user.user_wallet?.balance}
        className="w-full max-w-sm"
      />
      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:gap-6">
        <AddFundsButton onClick={() => navigate("/add-funds")} />
        <WalletHistoryButton
          onClick={() => navigate("/user-wallet-transactions")}
        />
      </div>
    </div>
  );
};
