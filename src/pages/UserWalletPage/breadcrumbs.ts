import { useEffect } from "react";
import { useBreadcrumb } from "@/features/hooks/context/useBreadcrumb";

export function useUserWalletPageBreadcrumbs() {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbs([{ label: "Wallet" }]);
    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);
}
