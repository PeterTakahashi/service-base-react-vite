import type { FC } from "react";
import { useVerifiedUser } from "@/features/hooks/swr/fetcher/user/useVerifiedUser";
import { UserApiKeyNewFormContainer } from "@/components/organisms/UserApiKeyNewFormContainer";
import { useUserApiKeysNewPageBreadcrumbs } from "./breadcrumbs";

export const UserApiKeyNewPage: FC = () => {
  const { user } = useVerifiedUser();

  useUserApiKeysNewPageBreadcrumbs();

  if (!user) return;

  return (
    <div className="max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl sm:text-2xl font-bold">Create API Key</h1>
      </div>
      <UserApiKeyNewFormContainer />
    </div>
  );
};
