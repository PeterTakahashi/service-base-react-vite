import type { ReactNode, FC } from "react";

const FormButton: FC<
  {
    children: ReactNode;
  } & React.ComponentProps<"button">
> = ({ children, type, disabled, className }) => {
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      className={
        `
        rounded-md bg-teal-600 px-3 py-1.5
                     text-sm/6 font-semibold text-white shadow-xs hover:bg-teal-500
                     focus-visible:outline-2 focus-visible:outline-offset-2
                     focus-visible:outline-teal-600` +
        (className ? ` ${className}` : "")
      }
    >
      {children}
    </button>
  );
};

export { FormButton };
