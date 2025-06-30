import type { FC } from "react";
import { ErrorDisplay } from "@/components/atoms/ErrorDisplay";

export const NotFoundPage: FC = () => {
  return <ErrorDisplay status={404} errorMessage="Page not found" />;
};
