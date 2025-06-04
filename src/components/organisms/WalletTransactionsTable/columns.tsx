import type { ColumnDef } from "@tanstack/react-table";
import type {
  WalletTransactionRead,
  WalletTransactionStatus,
  WalletTransactionType,
} from "@/types/api/walletTransaction/walletTransaction";
import { toUsdFloat } from "@/lib/toUsdFloat";
import { WalletTransactionStatusBadge } from "@/components/molecules/WalletTransactionStatusBadge";
import { WalletTransactionTypeBadge } from "@/components/molecules/WalletTransactionTypeBadge";

type Row = WalletTransactionRead[number];

export const columns: ColumnDef<Row>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Amount",
    accessorKey: "amount",
    cell: ({ row }) => {
      const amount: number = row.getValue("amount");
      const formattedAmount = toUsdFloat(amount);
      return `$${formattedAmount}`;
    },
  },
  {
    header: "Type",
    accessorKey: "wallet_transaction_type",
    cell: ({ row }) => {
      const type: WalletTransactionType = row.getValue(
        "wallet_transaction_type"
      );
      return <WalletTransactionTypeBadge type={type} />;
    },
  },
  {
    header: "Status",
    accessorKey: "wallet_transaction_status",
    cell: ({ row }) => {
      const status: WalletTransactionStatus = row.getValue(
        "wallet_transaction_status"
      );
      return <WalletTransactionStatusBadge status={status} />;
    },
  },
  {
    header: "Created At",
    accessorKey: "created_at",
    cell: ({ row }) => new Date(row.getValue("created_at")).toLocaleString(),
  },
  {
    header: "Updated At",
    accessorKey: "updated_at",
    cell: ({ row }) => new Date(row.getValue("updated_at")).toLocaleString(),
  },
];
