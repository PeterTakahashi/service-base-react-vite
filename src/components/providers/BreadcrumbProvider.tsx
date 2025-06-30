import React, { useState } from "react";
import { BreadcrumbContext } from "@/context/BreadcrumbContext";
import type { BreadcrumbItem } from "@/types/context/BreadcrumbContextType";

export function BreadcrumbProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);
  return (
    <BreadcrumbContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}
