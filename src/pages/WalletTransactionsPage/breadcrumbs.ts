import { useEffect } from "react";
import { useBreadcrumb } from "@/features/hooks/context/useBreadcrumb";

export function useWalletTransactionsPageBreadcrumbs() {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbs([
      { label: "Wallet", href: "/wallet" },
      { label: "Transaction History" },
    ]);
    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);
}
