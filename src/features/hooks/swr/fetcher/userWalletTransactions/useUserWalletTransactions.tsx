import useSWR from "swr";
import { fetcher } from "@/features/hooks/swr/fetcher/fetcher";
import type {
  UserWalletTransactionListRead,
  UserWalletTransactionListRequestQuery,
} from "@/types/api/userWalletTransaction/userWalletTransaction";
import { buildQueryString } from "@/lib/buildQueryString";

export function useUserWalletTransactions(
  query: UserWalletTransactionListRequestQuery = {}
) {
  const queryString = buildQueryString(query);
  const { data, error, isLoading, mutate } =
    useSWR<UserWalletTransactionListRead>(
      `/user-wallet-transactions?${queryString}`,
      fetcher
    );

  const walletTransactions = data?.data || [];
  const meta = data?.meta;

  return {
    walletTransactions,
    meta,
    isLoading,
    isError: error,
    mutate,
  };
}
