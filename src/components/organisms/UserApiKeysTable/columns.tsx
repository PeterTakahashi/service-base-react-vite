import type { ColumnDef } from "@tanstack/react-table";
import type { UserApiKeyRead } from "@/types/api/userApiKey/userApiKey";

type Row = UserApiKeyRead[number];

export const columns: ColumnDef<Row>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "API Key",
    accessorKey: "api_key",
  },
  {
    header: "Expires At",
    accessorKey: "expires_at",
    cell: ({ row }) => new Date(row.getValue("expires_at")).toLocaleString(),
  },
  {
    header: "Allowed Origin",
    accessorKey: "allowed_origin",
    cell: ({ row }) => row.getValue("allowed_origin") || "N/A",
  },
  {
    header: "Allowed IP",
    accessorKey: "allowed_ip",
    cell: ({ row }) => row.getValue("allowed_ip") || "N/A",
  },
  {
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
    header: "Updated At",
    meta: {
      filterType: "dateRange",
      filterStartDateKey: "updated_at__gte",
      filterEndDateKey: "updated_at__lte",
    },
    accessorKey: "updated_at",
    cell: ({ row }) => new Date(row.getValue("updated_at")).toLocaleString(),
  },
];
