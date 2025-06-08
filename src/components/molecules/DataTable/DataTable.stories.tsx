import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DataTable } from "./index";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/atoms/DropdownMenu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import type {
  ColumnDef,
  PaginationState,
  ColumnFiltersState,
} from "@tanstack/react-table";
import { Input } from "@/components/atoms/Input";
import { useDefaultSortOnLocalStorage } from "@/components/molecules/DataTable/hooks/useDefaultSortOnLocalstorage";

type Row = {
  id: string;
  name: string;
  age: number;
  email: string;
  balance: number;
};

const columns: ColumnDef<Row>[] = [
  {
    id: "id",
    header: "Name",
    accessorKey: "name",
  },
  {
    id: "age",
    header: "Age",
    accessorKey: "age",
  },
  {
    id: "email",
    header: "Email",
    accessorKey: "email",
  },
  {
    id: "balance",
    header: "Balance",
    accessorKey: "balance",
    cell: ({ row }) => `$${row.getValue("balance")}`,
  },
  {
    id: "actions",
    header: "Actions",
    accessorKey: "actions",
    cell: ({ row }) => (
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
            onClick={() => navigator.clipboard.writeText(row.getValue("id"))}
          >
            Copy ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>View</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

const allData: Row[] = Array.from({ length: 25 }).map((_, i) => ({
  id: `${i + 1}`,
  name: `User ${i + 1}`,
  age: 20 + (i % 10),
  email: `user${i + 1}@example.com`,
  balance: 1000 + i * 100,
}));

const sorts = [
  { sorted_by: "created_at", sorted_order: "desc", name: "Newest" },
  { sorted_by: "created_at", sorted_order: "asc", name: "Oldest" },
  { sorted_by: "amount", sorted_order: "desc", name: "Highest Amount" },
  { sorted_by: "amount", sorted_order: "asc", name: "Lowest Amount" },
];

const Wrapper = ({
  tableName = "defaultTableName",
  enableColumnFilters = true,
  isLoading = false,
}) => {
  const [, setDefaultSortOnLocalStorage] = useDefaultSortOnLocalStorage(
    tableName,
    sorts,
    sorts[0]
  );
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const [, setColumnFilters] = useState<ColumnFiltersState>([]);

  const pageData = allData.slice(
    pagination.pageIndex * pagination.pageSize,
    (pagination.pageIndex + 1) * pagination.pageSize
  );

  const pageCount = Math.ceil(allData.length / pagination.pageSize);

  const filterInput = (
    <Input
      placeholder="Filter emails..."
      onChange={(e) => {
        const value = e.target.value;
        setColumnFilters([{ id: "email", value }]);
      }}
      className="max-w-sm"
    />
  );

  return (
    <DataTable
      tableName={tableName}
      columns={columns}
      data={pageData}
      totalCount={allData.length}
      pagination={pagination}
      setPagination={setPagination}
      pageCount={pageCount}
      filterInput={filterInput}
      enableColumnFilters={enableColumnFilters}
      sorts={sorts}
      isLoading={isLoading}
      setDefaultSortOnLocalStorage={setDefaultSortOnLocalStorage}
    />
  );
};

const meta: Meta<typeof DataTable> = {
  title: "molecules/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Wrapper tableName={"DataTableStory"} enableColumnFilters={true} />
  ),
};

export const WithoutColumnFilters: StoryObj = {
  render: () => (
    <Wrapper tableName={"DataTableStory"} enableColumnFilters={false} />
  ),
};

export const LoadingContent: StoryObj = {
  render: () => (
    <Wrapper
      tableName={"DataTableStory"}
      enableColumnFilters={true}
      isLoading={true}
    />
  ),
};
