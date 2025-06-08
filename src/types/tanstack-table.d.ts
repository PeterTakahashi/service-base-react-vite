import "@tanstack/react-table";

declare module "@tanstack/react-table" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    filterType?: "checkbox" | "dateRange";
    filterKey?: string;
    filterOptions?: { label: string; value: string }[];
    filterStartDateKey?: string;
    filterEndDateKey?: string;
    defaultVisible?: boolean;
  }
}
