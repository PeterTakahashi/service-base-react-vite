import * as React from "react";
import { Input as InputPrimitive } from "@/components/ui/Input";

function Input({
  className,
  type,
  errorMessage,
  ...props
}: React.ComponentProps<"input"> & { errorMessage?: string | undefined }) {
  const hasError = Boolean(errorMessage);
  return (
    <>
      <div className="min-h-15">
        <InputPrimitive
          type={type}
          className={className}
          errorMessage={errorMessage}
          {...props}
        />
        {hasError && (
          <div className="h-10">
            <p className="text-sm text-red-600">{errorMessage}</p>
          </div>
        )}
      </div>
    </>
  );
}

export { Input };
