import React from "react";
import { GithubIcon } from "@/components/icons/githubIcon";
import { useGithubAuth } from "@/features/hooks/swr/fetcher/auth/useGithubAuth";

export const GithubAuthButton: React.FC = () => {
  const { onGithubAuth } = useGithubAuth();

  return (
    <button
      type="button"
      onClick={onGithubAuth}
      className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:ring-transparent"
    >
      <GithubIcon />
      <span className="text-sm/6 font-semibold">GitHub</span>
    </button>
  );
};
