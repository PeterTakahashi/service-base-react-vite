import { useEffect } from "react";
import { useBreadcrumb } from "@/features/hooks/context/useBreadcrumb";

export function useAddFundsPageBreadcrumbs() {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbs([
      { label: "Wallet", href: "/user-wallet" },
      { label: "Add Funds" },
    ]);
    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);
}
