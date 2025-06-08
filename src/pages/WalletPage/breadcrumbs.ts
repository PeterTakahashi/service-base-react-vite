import { useEffect } from "react";
import { useBreadcrumb } from "@/features/hooks/context/useBreadcrumb";

export function useWalletPageBreadcrumbs() {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbs([{ label: "Wallet" }]);
    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);
}
