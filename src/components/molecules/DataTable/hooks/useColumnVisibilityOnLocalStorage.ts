import { useCallback, useState } from "react";
import type { VisibilityState, Updater } from "@tanstack/react-table";

export function useColumnVisibilityOnLocalStorage(
  tableName: string,
  defaultVisibility: VisibilityState
) {
  const storageKey = `datatable-column-visibility-${tableName}`;
  const [columnVisibility, setColumnVisibilityState] =
    useState<VisibilityState>(() => {
      if (typeof window === "undefined") return defaultVisibility;
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return defaultVisibility;
        }
      }
      return defaultVisibility;
    });

  const setColumnVisibility = useCallback(
    (updaterOrValue: VisibilityState | Updater<VisibilityState>) => {
      setColumnVisibilityState((prev) => {
        const next =
          typeof updaterOrValue === "function"
            ? (updaterOrValue as (old: VisibilityState) => VisibilityState)(
                prev
              )
            : updaterOrValue;
        localStorage.setItem(storageKey, JSON.stringify(next));
        return next;
      });
    },
    [storageKey]
  );

  return [columnVisibility, setColumnVisibility] as const;
}
