import React from "react";
import { GoogleIcon } from "@/components/icons/googleIcon";

import { useGoogleAuth } from "@/features/hooks/swr/fetcher/auth/useGoogleAuth";

export const GoogleAuthButton: React.FC = () => {
  const { onGoogleAuth } = useGoogleAuth();

  return (
    <button
      type="button"
      onClick={onGoogleAuth}
      className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:ring-transparent"
    >
      <GoogleIcon />
      <span className="text-sm/6 font-semibold">Google</span>
    </button>
  );
};
