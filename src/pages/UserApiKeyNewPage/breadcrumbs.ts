import { useEffect } from "react";
import { useBreadcrumb } from "@/features/hooks/context/useBreadcrumb";

export function useUserApiKeysNewPageBreadcrumbs() {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbs([
      { label: "API Keys", href: "/user-api-keys" },
      { label: "Create API Key" },
    ]);
    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);
}
