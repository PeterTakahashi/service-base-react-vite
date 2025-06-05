import type { FC } from "react";
import { useVerifiedUser } from "@/features/hooks/swr/fetcher/user/useVerifiedUser";
import { UserApiKeysTable } from "@/components/organisms/UserApiKeysTable";

export const UserApiKeysPage: FC = () => {
  const { user } = useVerifiedUser();

  if (!user) return;

  return (
    <div>
      <h1 className="text-2xl sm:text-2xl font-bold">API Keys</h1>
      <UserApiKeysTable />
    </div>
  );
};
