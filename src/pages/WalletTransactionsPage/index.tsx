import type { FC } from "react";
import { useVerifiedUser } from "@/features/hooks/swr/fetcher/user/useVerifiedUser";
import { WalletTransactionsTable } from "@/components/organisms/WalletTransactionsTable";

export const WalletTransactionsPage: FC = () => {
  const { user } = useVerifiedUser();

  if (!user) return;

  return (
    <div>
      <h1 className="text-2xl sm:text-2xl font-bold">Wallet Transactions</h1>
      <WalletTransactionsTable />
    </div>
  );
};
