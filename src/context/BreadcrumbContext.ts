import { createContext } from "react";
import type { BreadcrumbContextType } from "@/types/context/BreadcrumbContextType";

export const BreadcrumbContext = createContext<
  BreadcrumbContextType | undefined
>(undefined);
