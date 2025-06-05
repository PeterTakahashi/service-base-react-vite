import type { components, operations } from "@/types/api/base";

export type WalletTransactionListResponse =
  components["schemas"]["WalletTransactionListResponse"];

export type WalletTransactionRead =
  components["schemas"]["WalletTransactionRead"][];

export type WalletTransactionListRequestQuery =
  operations["wallet_transactions_list_wallet_transactions_wallet_transactions_get"]["parameters"]["query"];

export type WalletTransactionType =
  components["schemas"]["WalletTransactionType"];

export type WalletTransactionStatus =
  components["schemas"]["WalletTransactionStatus"];

export const WALLET_TRANSACTION_TYPES: WalletTransactionType[] = [
  "deposit",
  "spend",
] as const;

export const WALLET_TRANSACTION_STATUSES: WalletTransactionStatus[] = [
  "pending",
  "completed",
  "failed",
] as const;
