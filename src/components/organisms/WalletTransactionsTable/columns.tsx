import type { ColumnDef } from "@tanstack/react-table";
import type {
  WalletTransactionRead,
  WalletTransactionStatus,
  WalletTransactionType,
} from "@/types/api/walletTransaction/walletTransaction";
import {
  WALLET_TRANSACTION_TYPES,
  WALLET_TRANSACTION_STATUSES,
} from "@/types/api/walletTransaction/walletTransaction";
import { toUsdFloat } from "@/lib/toUsdFloat";
import { WalletTransactionStatusBadge } from "@/components/molecules/badges/WalletTransactionStatusBadge";
import { WalletTransactionTypeBadge } from "@/components/molecules/badges/WalletTransactionTypeBadge";

type Row = WalletTransactionRead[number];

export const columns: ColumnDef<Row>[] = [
  {
    id: "id",
    header: "ID",
    accessorKey: "id",
  },
  {
    id: "amount",
    header: "Amount",
    accessorKey: "amount",
    cell: ({ row }) => {
      const amount: number = row.getValue("amount");
      const formattedAmount = toUsdFloat(amount);
      return `$${formattedAmount}`;
    },
  },
  {
    id: "wallet_transaction_type",
    header: "Type",
    meta: {
      filterType: "checkbox",
      filterKey: "wallet_transaction_type__in",
      filterOptions: WALLET_TRANSACTION_TYPES.map((type) => ({
        label: type,
        value: type,
      })),
    },
    accessorKey: "wallet_transaction_type",
    cell: ({ row }) => {
      const type: WalletTransactionType = row.getValue(
        "wallet_transaction_type"
      );
      return <WalletTransactionTypeBadge type={type} />;
    },
  },
  {
    id: "wallet_transaction_status",
    header: "Status",
    meta: {
      filterType: "checkbox",
      filterKey: "wallet_transaction_status__in",
      filterOptions: WALLET_TRANSACTION_STATUSES.map((status) => ({
        label: status,
        value: status,
      })),
    },
    accessorKey: "wallet_transaction_status",
    cell: ({ row }) => {
      const status: WalletTransactionStatus = row.getValue(
        "wallet_transaction_status"
      );
      return <WalletTransactionStatusBadge status={status} />;
    },
  },
  {
    id: "created_at",
    header: "Created At",
    meta: {
      filterType: "dateRange",
      filterStartDateKey: "created_at__gte",
      filterEndDateKey: "created_at__lte",
    },
    accessorKey: "created_at",
    cell: ({ row }) => new Date(row.getValue("created_at")).toLocaleString(),
  },
  {
    id: "updated_at",
    header: "Updated At",
    meta: {
      filterType: "dateRange",
      filterStartDateKey: "updated_at__gte",
      filterEndDateKey: "updated_at__lte",
      defaultVisible: false,
    },
    accessorKey: "updated_at",
    cell: ({ row }) => new Date(row.getValue("updated_at")).toLocaleString(),
  },
];
