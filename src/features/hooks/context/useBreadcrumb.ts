import { useContext } from "react";
import { BreadcrumbContext } from "@/context/BreadcrumbContext";

export function useBreadcrumb() {
  const context = useContext(BreadcrumbContext);
  if (!context)
    throw new Error("useBreadcrumb must be used within BreadcrumbProvider");
  return context;
}
