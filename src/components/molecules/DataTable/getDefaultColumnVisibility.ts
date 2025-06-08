import { type ColumnDef } from "@tanstack/react-table";

export function getDefaultColumnVisibility<TData, TValue>(
  columns: ColumnDef<TData, TValue>[]
) {
  return columns.reduce(
    (acc, col) => {
      const visible = col.meta?.defaultVisible;
      const key = col.id;
      if (visible === false && key) {
        acc[key] = false;
      }
      return acc;
    },
    {} as Record<string, boolean>
  );
}
