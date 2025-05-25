import type { FC } from "react";
import { ErrorDisplay } from "@/components/ui/ErrorDisplay";

export const NotFoundPage: FC = () => {
  return <ErrorDisplay status={404} errorMessage="Page not found" />;
};
