import type { FC, ReactNode } from "react";
import { useUser } from "@/features/hooks/swr/fetcher/user/useUser";
import { Loading } from "@/components/atoms/Loading";
import { ErrorDisplay } from "@/components/atoms/ErrorDisplay";
import { SidebarLayout } from "@/components/layout/SideBarLayout";
import { AuthLayout } from "@/components/layout/AuthLayout";

type ProtectedRouteProps = {
  children: ReactNode;
  layout?: string; // "auth" for AuthLayout, "sidebar" for SidebarLayout, or any other string for default layout
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  children,
  layout = "sidebar",
}) => {
  const { user, isLoading, isError } = useUser();

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <ErrorDisplay status={404} errorMessage="User is not found " />;
  } else if (!user) {
    return;
  }

  if (layout === "auth") {
    return <AuthLayout>{children}</AuthLayout>;
  } else if (layout === "sidebar") {
    return <SidebarLayout>{children}</SidebarLayout>;
  }
  return <>{children}</>;
};
