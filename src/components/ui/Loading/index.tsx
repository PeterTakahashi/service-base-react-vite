import React from "react";

type LoadingProps = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "danger" | "success" | "warning";
  variant?: "default" | "outline" | "ghost";
  className?: string;
  isLoading?: boolean;
  children?: React.ReactNode;
};

const sizeMap = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-4",
  lg: "h-12 w-12 border-8",
};

const colorMap = {
  primary: "border-teal-500",
  secondary: "border-gray-500",
  danger: "border-red-500",
  success: "border-green-500",
  warning: "border-yellow-500",
};

export const Loading: React.FC<LoadingProps> = ({
  size = "md",
  color = "primary",
  variant = "default",
  className = "",
  isLoading = true,
  children = "Loading",
}) => {
  if (!isLoading) return null;

  const spinnerClass = [
    "animate-spin",
    sizeMap[size],
    colorMap[color],
    "border-t-transparent",
    "rounded-full",
    variant === "outline" ? "border-dashed" : "",
    variant === "ghost" ? "opacity-50" : "",
    className,
  ].join(" ");

  return (
    <div className="flex items-center justify-center h-screen">
      <div className={spinnerClass}></div>
      <span className="ml-2">{children}</span>
    </div>
  );
};
