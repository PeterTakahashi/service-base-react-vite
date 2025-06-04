import type { FC } from "react";
import { useVerifiedUser } from "@/features/hooks/swr/fetcher/user/useVerifiedUser";

export const WalletTransactionsPage: FC = () => {
  const { user } = useVerifiedUser();

  if (!user) return;

  return <div>wallet transactions page</div>;
};
