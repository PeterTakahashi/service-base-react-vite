import React from "react";

type AuthLayoutProps = {
  title: string;
  children: React.ReactNode;
  serviceName?: string;
};

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  title,
  children,
  serviceName,
}) => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:max-w-md">
        <div className="flex justify-center">
          <span className="text-3xl font-bold">{serviceName}</span>
        </div>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-6 py-12 shadow-sm sm:rounded-lg sm:px-12">
          <h2 className="mb-12 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </div>
  );
};
