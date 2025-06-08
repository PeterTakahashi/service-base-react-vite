import { useEffect } from "react";
import { useBreadcrumb } from "@/features/hooks/context/useBreadcrumb";

export function useUserApiKeysPageBreadcrumbs() {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbs([{ label: "API Keys" }]);
    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);
}
