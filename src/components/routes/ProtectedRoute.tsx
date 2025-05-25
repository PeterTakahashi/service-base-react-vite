import type { FC, ReactNode } from "react";
import { useUser } from "@/features/hooks/swr/fetcher/user/useUser";
import { Loading } from "@/components/ui/Loading";
import { ErrorDisplay } from "@/components/ui/ErrorDisplay";

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { user, isLoading, isError } = useUser();

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <ErrorDisplay status={404} errorMessage="User is not found " />;
  } else if (!user) {
    return;
  }
  return <>{children}</>;
};
