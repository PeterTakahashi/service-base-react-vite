import type { ColumnDef } from "@tanstack/react-table";
import type { UserApiKeyRead } from "@/types/api/userApiKey/userApiKey";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/atoms/DropdownMenu";
import { Button } from "@/components/atoms/Button";
import { MoreHorizontal, SquarePen, Copy, Trash2 } from "lucide-react";

type Row = UserApiKeyRead;

type BuildColumnsProps = {
  onEdit: (row: Row) => void;
  onDelete: (row: Row) => void;
};

export const buildColumns = ({
  onEdit,
  onDelete,
}: BuildColumnsProps): ColumnDef<Row>[] => [
  {
    id: "name",
    header: "Name",
    accessorKey: "name",
    meta: {
      defaultVisible: false,
    },
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
    cell: ({ row }) =>
      row.getValue("expires_at")
        ? new Date(row.getValue("expires_at")).toLocaleString()
        : "N/A",
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
  {
    header: "Actions",
    accessorKey: "actions",
    cell: ({ row }) => {
      const rowData = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(row.getValue("api_key"))
              }
            >
              <Copy className="h-4 w-4" />
              Copy API Key
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => onEdit(rowData)}>
              <SquarePen className="h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDelete(rowData)}>
              <Trash2 className="h-4 w-4" />
              Destroy
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
