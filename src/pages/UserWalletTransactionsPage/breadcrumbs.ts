import { useEffect } from "react";
import { useBreadcrumb } from "@/features/hooks/context/useBreadcrumb";

export function useUserWalletTransactionsPageBreadcrumbs() {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbs([
      { label: "Wallet", href: "/user-wallet" },
      { label: "Transaction History" },
    ]);
    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);
}
