import { useEffect } from "react";
import { useBreadcrumb } from "@/features/hooks/context/useBreadcrumb";

export function useUserApiKeyEditPageBreadcrumbs() {
  const { setBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumbs([
      { label: "API Keys", href: "/user-api-keys" },
      { label: "Update API Key" },
    ]);
    return () => setBreadcrumbs([]);
  }, [setBreadcrumbs]);
}
