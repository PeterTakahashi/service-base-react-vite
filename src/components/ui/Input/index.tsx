import * as React from "react";

function Input({
  className,
  type,
  errorMessage,
  ...props
}: React.ComponentProps<"input"> & { errorMessage?: string | undefined }) {
  const hasError = Boolean(errorMessage);
  return (
    <>
      <div className="grid gap-1.5">
        <input
          type={type}
          data-slot="input"
          className={
            "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6" +
            (hasError
              ? "col-start-1 row-start-1 outline-red-300 placeholder:text-red-300 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
              : "focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600") +
            (className ? ` ${className}` : "")
          }
          {...props}
        />
      </div>
      <div className="h-1">
        {hasError && <p className="text-sm text-red-600">{errorMessage}</p>}
      </div>
    </>
  );
}

export { Input };
