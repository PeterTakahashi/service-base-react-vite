import React, { useState, useEffect } from "react";
import { DataTable } from "@/components/molecules/DataTable";
import { columns } from "./columns";
import { sorts } from "./sorts";
import { useDefaultSortOnLocalStorage } from "@/components/molecules/DataTable/hooks/useDefaultSortOnLocalstorage";
import type { PaginationState } from "@tanstack/react-table";
import { useUserWalletTransactions } from "@/features/hooks/swr/fetcher/userWalletTransactions/useUserWalletTransactions";
import type { UserWalletTransactionListRequestQuery } from "@/types/api/userWalletTransaction/userWalletTransaction";

type UserWalletTransactionTableProps = object;
const tableName = "userWalletTransactionsTable";

export const UserWalletTransactionsTable: React.FC<
  UserWalletTransactionTableProps
> = () => {
  const [defaultSort, setDefaultSortOnLocalStorage] =
    useDefaultSortOnLocalStorage(tableName, sorts, sorts[0]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [query, setQuery] = useState<UserWalletTransactionListRequestQuery>({
    sorted_by: "created_at",
    sorted_order: "asc",
    limit: pagination.pageSize,
    offset: pagination.pageIndex * pagination.pageSize,
  });

  const { isLoading, walletTransactions, meta } =
    useUserWalletTransactions(query);
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
      tableName={tableName}
      columns={columns}
      data={walletTransactions}
      pagination={pagination}
      totalCount={totalCount}
      setPagination={setPagination}
      pageCount={pageCount}
      query={query as Record<string, string>}
      setQuery={setQuery}
      sorts={sorts}
      defaultSort={defaultSort}
      isLoading={isLoading}
      setDefaultSortOnLocalStorage={setDefaultSortOnLocalStorage}
    />
  );
};
