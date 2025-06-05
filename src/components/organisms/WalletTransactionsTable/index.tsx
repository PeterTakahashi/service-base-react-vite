import React, { useState } from "react";
import { DataTable } from "@/components/molecules/DataTable";
import { columns } from "./columns";
import type { PaginationState } from "@tanstack/react-table";
import { useWalletTransactions } from "@/features/hooks/swr/fetcher/walletTransactions/useWalletTransactions";
import type { WalletTransactionListRequestQuery } from "@/types/api/walletTransaction/walletTransaction";

type WalletTransactionTableProps = object;

export const WalletTransactionsTable: React.FC<
  WalletTransactionTableProps
> = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [query, setQuery] = useState<WalletTransactionListRequestQuery>({
    sorted_by: "created_at",
    sorted_order: "asc",
  });
  const { walletTransactions, meta } = useWalletTransactions(query);
  const totalCount = meta?.total_count || 0;
  const pageCount = Math.ceil(totalCount / pagination.pageSize);

  return (
    <DataTable
      columns={columns}
      data={walletTransactions}
      pagination={pagination}
      totalCount={totalCount}
      setPagination={setPagination}
      pageCount={pageCount}
      className="bg-white"
      query={query as Record<string, string>}
      setQuery={setQuery}
    />
  );
};
