import React, { useState, useEffect } from "react";
import { DataTable } from "@/components/molecules/DataTable";
import { buildColumns } from "./columns";
import { sorts } from "./sorts";
import { useDefaultSortOnLocalStorage } from "@/components/molecules/DataTable/hooks/useDefaultSortOnLocalstorage";
import type { PaginationState } from "@tanstack/react-table";
import { useUserApiKeys } from "@/features/hooks/swr/fetcher/userApiKeys/useUserApiKeys";
import type { UserApiKeyListRequestQuery } from "@/types/api/userApiKey/userApiKey";
import { useNavigate } from "react-router-dom";
import type { UserApiKeyRead } from "@/types/api/userApiKey/userApiKey";
import { useDeleteUserApiKeyMutation } from "@/features/hooks/swr/mutation/userApiKey/useDeleteUserApiKeyMutation";

const tableName = "userApiKeysTable";

export const UserApiKeysTable: React.FC = () => {
  const [defaultSort, setDefaultSortOnLocalStorage] =
    useDefaultSortOnLocalStorage(tableName, sorts, sorts[0]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [query, setQuery] = useState<UserApiKeyListRequestQuery>({
    sorted_by: defaultSort.sorted_by,
    sorted_order: defaultSort.sorted_order,
    limit: pagination.pageSize,
    offset: pagination.pageIndex * pagination.pageSize,
  });

  const { userApiKeys, meta, mutate, isLoading } = useUserApiKeys(query);
  const totalCount = meta?.total_count || 0;
  const pageCount = Math.ceil(totalCount / pagination.pageSize);

  useEffect(() => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      limit: pagination.pageSize,
      offset: pagination.pageIndex * pagination.pageSize,
    }));
  }, [pagination]);

  const navigate = useNavigate();
  const { trigger: deleteUserApiKey } = useDeleteUserApiKeyMutation();

  const handleEdit = (row: UserApiKeyRead) => {
    navigate(`/user-api-keys/${row.id}/edit`);
  };

  const handleDelete = async (row: UserApiKeyRead) => {
    await deleteUserApiKey(row.id);
    await mutate();
  };

  const columns = buildColumns({
    onEdit: handleEdit,
    onDelete: handleDelete,
  });

  return (
    <DataTable
      tableName={tableName}
      columns={columns}
      data={userApiKeys}
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
