import * as React from "react";
import { cn } from "@/lib/utils/cn";

function Input({
  className,
  type,
  errorMessage,
  ...props
}: React.ComponentProps<"input"> & { errorMessage?: string | undefined }) {
  const hasError = Boolean(errorMessage);
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-gray-400 dark:placeholder:text-gray-500 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/30 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100",
        hasError &&
          "border-red-600 focus-visible:border-red-600 focus-visible:ring-red-600/10 focus-visible:ring-[3px] placeholder:text-red-300 dark:placeholder:text-red-200",
        className
      )}
      {...props}
    />
  );
}

export { Input };
