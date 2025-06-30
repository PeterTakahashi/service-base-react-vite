import * as React from "react";
import { Input as InputPrimitive } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";

function Input({
  className,
  type,
  errorMessage,
  label,
  isLoading = false,
  ...props
}: React.ComponentProps<"input"> & {
  errorMessage?: string | undefined;
  label?: string | React.ReactNode;
  isLoading?: boolean;
}) {
  const hasError = Boolean(errorMessage);

  return (
    <>
      <div className="min-h-15 grid items-center gap-1.5">
        {label && (
          <Label htmlFor={props.id} className={isLoading ? "opacity-50" : ""}>
            {label}
          </Label>
        )}

        {isLoading ? (
          <div className="h-10 bg-gray-200 rounded animate-pulse" />
        ) : (
          <>
            <InputPrimitive
              type={type}
              className={className}
              errorMessage={errorMessage}
              {...props}
            />
            {hasError && <p className="text-sm text-red-600">{errorMessage}</p>}
          </>
        )}
      </div>
    </>
  );
}

export { Input };
