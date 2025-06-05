"use client";

import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { PageSizeSelect } from "@/components/molecules/PageSizeSelect";
import { DateRangeColumnFilter } from "@/components/molecules/DateRangeColumnFilter";
import { CheckboxColumnFilter } from "@/components/molecules/CheckboxColumnFilter";

import * as React from "react";

import { Button } from "@/components/ui/Button";
import type {
  PaginationState,
  OnChangeFn,
  VisibilityState,
} from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pagination: PaginationState;
  setPagination: OnChangeFn<PaginationState>;
  totalCount: number;
  pageCount: number;
  filterInput?: React.ReactNode;
  enableColumnFilters?: boolean;
  className?: string;
  query?: Record<string, string>;
  setQuery?: (query: Record<string, string>) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  pagination,
  setPagination,
  totalCount,
  pageCount,
  filterInput,
  enableColumnFilters = true,
  className = "",
  query = {},
  setQuery = () => {},
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const table = useReactTable({
    data,
    columns,
    pageCount,
    state: { pagination, columnFilters, columnVisibility },
    manualPagination: true,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    manualFiltering: true,
    onPaginationChange: setPagination,
    onColumnVisibilityChange: setColumnVisibility,
  });
  const sorted_by = React.useMemo(() => query.sorted_by, [query]);
  const sorted_order = React.useMemo(() => query.sorted_order, [query]);

  return (
    <div>
      {(filterInput || enableColumnFilters) && (
        <div className="flex items-center py-4">
          {filterInput}
          {enableColumnFilters && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    const header = column.columnDef.header;
                    if (typeof header === "string") {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) =>
                            column.toggleVisibility(!!value)
                          }
                        >
                          {header}
                        </DropdownMenuCheckboxItem>
                      );
                    }
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      )}
      <div className="rounded-md border">
        <Table className={className}>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const meta = header.column.columnDef.meta || {};
                  const filterStartDateKey = meta.filterStartDateKey || "";
                  const filterEndDateKey = meta.filterEndDateKey || "";
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : (
                        <div className="flex items-center">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {header.id === sorted_by && (
                            <div className="ml-1">
                              {sorted_order === "asc" && "↑"}
                              {sorted_order === "desc" && "↓"}
                            </div>
                          )}
                          {meta?.filterType === "checkbox" && (
                            <CheckboxColumnFilter
                              options={meta.filterOptions || []}
                              onChange={(selectedValues: string[]) => {
                                console.log("Filter changed:", selectedValues);
                              }}
                            />
                          )}
                          {meta?.filterType === "dateRange" &&
                            filterStartDateKey &&
                            filterEndDateKey &&
                            query && (
                              <DateRangeColumnFilter
                                startDate={query[filterStartDateKey]}
                                endDate={query[filterEndDateKey]}
                                onChange={(startDate, endDate) => {
                                  const newQuery = { ...query };

                                  if (startDate) {
                                    newQuery[filterStartDateKey] = startDate;
                                  } else {
                                    delete newQuery[filterStartDateKey];
                                  }

                                  if (endDate) {
                                    newQuery[filterEndDateKey] = endDate;
                                  } else {
                                    delete newQuery[filterEndDateKey];
                                  }

                                  setQuery(newQuery);
                                }}
                              />
                            )}
                        </div>
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center py-4">
        <div className="flex-1">
          <span className="text-sm text-muted-foreground">
            {totalCount !== undefined && `Total: ${totalCount} items`} |{" "}
            {pagination.pageIndex + 1} of {pageCount}
          </span>
        </div>
        <div className="justify-end space-x-2 flex items-center">
          <PageSizeSelect
            pageSize={pagination.pageSize}
            onPageSizeChange={(size) => {
              setPagination((prev) => ({ ...prev, pageSize: size }));
            }}
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
