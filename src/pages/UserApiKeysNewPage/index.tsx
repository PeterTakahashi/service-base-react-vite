import type { FC } from "react";
import { useVerifiedUser } from "@/features/hooks/swr/fetcher/user/useVerifiedUser";

export const UserApiKeysNewPage: FC = () => {
  const { user } = useVerifiedUser();

  if (!user) return;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl sm:text-2xl font-bold">Create API Key</h1>
      </div>
    </div>
  );
};
