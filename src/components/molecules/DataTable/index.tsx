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
} from "@/components/atoms/Table";
import { PageSizeSelect } from "@/components/molecules/PageSizeSelect";
import { DateRangeColumnFilter } from "@/components/molecules/columnFilters/DateRangeColumnFilter";
import { CheckboxColumnFilter } from "@/components/molecules/columnFilters/CheckboxColumnFilter";

import * as React from "react";

import { Button } from "@/components/atoms/Button";
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
} from "@/components/atoms/DropdownMenu";
import { type Sort } from "@/types/components/sort";
import { SortSelect } from "@/components/molecules/SortSelect";

type QueryValueType = string | string[];

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pagination: PaginationState;
  setPagination: OnChangeFn<PaginationState>;
  totalCount: number;
  pageCount: number;
  filterInput?: React.ReactNode;
  enableColumnFilters?: boolean;
  sorts: Sort[];
  defaultSort?: Sort;
  className?: string;
  query?: Record<string, QueryValueType>;
  setQuery?: (query: Record<string, QueryValueType>) => void;
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
  sorts,
  defaultSort,
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
      {(filterInput || enableColumnFilters || sorts.length > 0) && (
        <div className="flex items-center py-4">
          {filterInput}
          <div className="flex-1" />
          <div className="flex items-center space-x-2">
            {sorts.length > 0 && (
              <SortSelect
                sorts={sorts}
                defaultSort={defaultSort}
                onSortChange={(newSort) => {
                  const newQuery = { ...query };
                  if (newSort) {
                    newQuery.sorted_by = newSort.sorted_by;
                    newQuery.sorted_order = newSort.sorted_order;
                  } else {
                    delete newQuery.sorted_by;
                    delete newQuery.sorted_order;
                  }
                  setQuery(newQuery);
                }}
              />
            )}
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
                  const filterKey = meta.filterKey || "";
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
                              label={
                                "Search by " + header.column.columnDef.header
                              }
                              options={meta.filterOptions || []}
                              onChange={(selectedValues: string[]) => {
                                const newQuery = { ...query };
                                if (selectedValues.length > 0) {
                                  newQuery[filterKey] = selectedValues;
                                } else {
                                  delete newQuery[filterKey];
                                }
                                setQuery(newQuery);
                              }}
                            />
                          )}
                          {meta?.filterType === "dateRange" &&
                            filterStartDateKey &&
                            filterEndDateKey &&
                            query && (
                              <DateRangeColumnFilter
                                label={
                                  "Search by " + header.column.columnDef.header
                                }
                                startDate={query[filterStartDateKey] as string}
                                endDate={query[filterEndDateKey] as string}
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
