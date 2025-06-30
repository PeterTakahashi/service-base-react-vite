import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/features/hooks/context/useAuth";

type PublicOnlyRouteProps = {
  children: React.ReactNode;
};

export function PublicOnlyRoute({ children }: PublicOnlyRouteProps) {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
