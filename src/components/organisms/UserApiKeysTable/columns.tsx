import type { ColumnDef } from "@tanstack/react-table";
import type { UserApiKeyRead } from "@/types/api/userApiKey/userApiKey";

type Row = UserApiKeyRead[number];

export const columns: ColumnDef<Row>[] = [
  {
    id: "id",
    header: "ID",
    accessorKey: "id",
    meta: {
      defaultVisible: false,
    },
  },
  {
    id: "name",
    header: "Name",
    accessorKey: "name",
  },
  {
    id: "api_key",
    header: "API Key",
    accessorKey: "api_key",
  },
  {
    id: "expires_at",
    header: "Expires At",
    accessorKey: "expires_at",
    cell: ({ row }) => new Date(row.getValue("expires_at")).toLocaleString(),
  },
  {
    id: "allowed_origin",
    header: "Allowed Origin",
    accessorKey: "allowed_origin",
    cell: ({ row }) => row.getValue("allowed_origin") || "N/A",
  },
  {
    id: "allowed_ip",
    header: "Allowed IP",
    accessorKey: "allowed_ip",
    cell: ({ row }) => row.getValue("allowed_ip") || "N/A",
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
