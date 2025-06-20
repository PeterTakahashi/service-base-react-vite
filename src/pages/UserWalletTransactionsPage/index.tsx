import type { FC } from "react";
import { useVerifiedUser } from "@/features/hooks/swr/fetcher/user/useVerifiedUser";
import { UserWalletTransactionsTable } from "@/components/organisms/UserWalletTransactionsTable";
import { useUserWalletTransactionsPageBreadcrumbs } from "./breadcrumbs";

export const UserWalletTransactionsPage: FC = () => {
  const { user } = useVerifiedUser();

  useUserWalletTransactionsPageBreadcrumbs();

  if (!user) return;

  return (
    <div>
      <h1 className="text-2xl sm:text-2xl font-bold">Transaction History</h1>
      <UserWalletTransactionsTable />
    </div>
  );
};
