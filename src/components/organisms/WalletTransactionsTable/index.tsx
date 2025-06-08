import React, { useState, useEffect } from "react";
import { DataTable } from "@/components/molecules/DataTable";
import { columns } from "./columns";
import { sorts, defaultSort } from "./sorts";
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
    limit: pagination.pageSize,
    offset: pagination.pageIndex * pagination.pageSize,
  });

  const { isLoading, walletTransactions, meta } = useWalletTransactions(query);
  const totalCount = meta?.total_count || 0;
  const pageCount = Math.ceil(totalCount / pagination.pageSize);

  useEffect(() => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      limit: pagination.pageSize,
      offset: pagination.pageIndex * pagination.pageSize,
    }));
  }, [pagination]);

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
      sorts={sorts}
      defaultSort={defaultSort}
      isLoading={isLoading}
    />
  );
};
