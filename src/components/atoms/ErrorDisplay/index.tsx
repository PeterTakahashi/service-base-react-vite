import React from "react";
import { Button } from "@/components/atoms/Button";

type ErrorDisplayProps = {
  status: number;
  errorMessage: string;
};

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  status,
  errorMessage,
}) => {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-primary-600">{status}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-gray-900">
          {errorMessage}
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="/">
            <Button>Go back home</Button>
          </a>
        </div>
      </div>
    </main>
  );
};
