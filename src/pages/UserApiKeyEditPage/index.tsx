import { type FC } from "react";
import { useParams } from "react-router";
import { useVerifiedUser } from "@/features/hooks/swr/fetcher/user/useVerifiedUser";
import { useUserApiKey } from "@/features/hooks/swr/fetcher/userApiKeys/useUserApiKey";
import { UserApiKeyEditFormContainer } from "@/components/organisms/UserApiKeyEditFormContainer";
import { useUserApiKeyEditPageBreadcrumbs } from "./breadcrumbs";

export const UserApiKeyEditPage: FC = () => {
  const { user } = useVerifiedUser();
  const { id } = useParams<{ id?: string }>();
  const { userApiKey, isLoading } = useUserApiKey(id);

  useUserApiKeyEditPageBreadcrumbs();

  if (!user) return;

  return (
    <div className="max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl sm:text-2xl font-bold">Update API Key</h1>
      </div>
      {userApiKey && (
        <UserApiKeyEditFormContainer
          userApiKey={userApiKey}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};
