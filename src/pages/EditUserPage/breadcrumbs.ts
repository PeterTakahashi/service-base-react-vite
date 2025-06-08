import { useEffect } from "react";
import { useBreadcrumb } from "@/features/hooks/context/useBreadcrumb";

export function useEditUserPageBreadcrumbs() {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbs([
      { label: "Account", href: "/me" },
      { label: "Edit Profile" },
    ]);
    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);
}
