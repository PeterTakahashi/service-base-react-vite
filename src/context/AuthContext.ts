import { createContext } from "react";
import type { AuthContextType } from "@/types/context/AuthContextType";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
