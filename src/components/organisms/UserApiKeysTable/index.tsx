import React, { useState, useEffect } from "react";
import { DataTable } from "@/components/molecules/DataTable";
import { buildColumns } from "./columns";
import { sorts } from "./sorts";
import type { PaginationState } from "@tanstack/react-table";
import { useUserApiKeys } from "@/features/hooks/swr/fetcher/userApiKeys/useUserApiKeys";
import type { UserApiKeyListRequestQuery } from "@/types/api/userApiKey/userApiKey";
import { useNavigate } from "react-router-dom";
import type { UserApiKeyRead } from "@/types/api/userApiKey/userApiKey";
import { useDeleteUserApiKeyMutation } from "@/features/hooks/swr/mutation/userApiKey/useDeleteUserApiKeyMutation";

type UserApiKeyTableProps = object;

export const UserApiKeysTable: React.FC<UserApiKeyTableProps> = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [query, setQuery] = useState<UserApiKeyListRequestQuery>({
    sorted_by: "created_at",
    sorted_order: "asc",
    limit: pagination.pageSize,
    offset: pagination.pageIndex * pagination.pageSize,
  });

  const { userApiKeys, meta, mutate } = useUserApiKeys(query);
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
      columns={columns}
      data={userApiKeys}
      pagination={pagination}
      totalCount={totalCount}
      setPagination={setPagination}
      pageCount={pageCount}
      className="bg-white"
      query={query as Record<string, string>}
      setQuery={setQuery}
      sorts={sorts}
    />
  );
};
