import { useCallback, useState } from "react";
import { type Sort } from "@/types/components/sort";

export function useDefaultSortOnLocalStorage(
  tableName: string,
  sorts: Sort[],
  fallbackSort: Sort
) {
  const [defaultSort, setDefaultSortOnLocalStorage] = useState<Sort>(() => {
    if (typeof window === "undefined") return fallbackSort;
    const saved = localStorage.getItem(`datatable-sort-${tableName}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (
          sorts.find(
            (s) =>
              s.sorted_by === parsed.sorted_by &&
              s.sorted_order === parsed.sorted_order
          )
        ) {
          return parsed;
        }
      } catch (e) {
        console.error("Failed to parse saved sort:", e);
      }
    }
    return fallbackSort;
  });

  const saveSort = useCallback(
    (sort: Sort) => {
      setDefaultSortOnLocalStorage(sort);
      localStorage.setItem(`datatable-sort-${tableName}`, JSON.stringify(sort));
    },
    [tableName, setDefaultSortOnLocalStorage]
  );

  return [defaultSort, saveSort] as const;
}
