import type { components, operations } from "@/types/api/base";

export type UserWalletTransactionListResponse =
  components["schemas"]["UserWalletTransactionListResponse"];

export type UserWalletTransactionRead =
  components["schemas"]["UserWalletTransactionRead"][];

export type UserWalletTransactionListRequestQuery =
  operations["user_wallet_transactions_list_user_wallet_transactions_user_wallet_transactions_get"]["parameters"]["query"];

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
