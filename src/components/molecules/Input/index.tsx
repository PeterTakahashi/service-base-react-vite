import * as React from "react";
import { Input as InputPrimitive } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

function Input({
  className,
  type,
  errorMessage,
  label,
  ...props
}: React.ComponentProps<"input"> & {
  errorMessage?: string | undefined;
  label?: string | React.ReactNode;
}) {
  const hasError = Boolean(errorMessage);
  return (
    <>
      <div className="min-h-15 grid items-center gap-1.5">
        {label && <Label htmlFor={props.id}>{label}</Label>}
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
