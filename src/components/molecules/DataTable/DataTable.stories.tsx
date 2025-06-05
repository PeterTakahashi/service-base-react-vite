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
} from "@/components/ui/DropdownMenu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type {
  ColumnDef,
  PaginationState,
  ColumnFiltersState,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/Input";

type Row = {
  id: string;
  name: string;
  age: number;
  email: string;
  balance: number;
};

const columns: ColumnDef<Row>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Age",
    accessorKey: "age",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Balance",
    accessorKey: "balance",
    cell: ({ row }) => `$${row.getValue("balance")}`,
  },
  {
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

const Wrapper = ({ enableColumnFilters = true }) => {
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
      columns={columns}
      data={pageData}
      totalCount={allData.length}
      pagination={pagination}
      setPagination={setPagination}
      pageCount={pageCount}
      filterInput={filterInput}
      enableColumnFilters={enableColumnFilters}
      sorts={sorts}
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
  render: () => <Wrapper enableColumnFilters={true} />,
};

export const WithoutColumnFilters: StoryObj = {
  render: () => <Wrapper enableColumnFilters={false} />,
};
