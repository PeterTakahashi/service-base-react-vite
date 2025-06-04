import useSWR from "swr";
import { fetcher } from "@/features/hooks/swr/fetcher/fetcher";
import type {
  WalletTransactionListResponse,
  WalletTransactionListRequestQuery,
} from "@/types/api/walletTransaction/walletTransaction";
import { buildQueryString } from "@/lib/buildQueryString";

export function useWalletTransactions(
  query: WalletTransactionListRequestQuery = {}
) {
  const queryString = buildQueryString(query);
  const { data, error, isLoading, mutate } =
    useSWR<WalletTransactionListResponse>(
      `/wallet-transactions?${queryString}`,
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
