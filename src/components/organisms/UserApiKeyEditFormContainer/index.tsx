import { UserApiKeyForm } from "@/components/molecules/forms/UserApiKeyForm";
import { type FC } from "react";
import { useUpdateUserApiKeyForm } from "@/features/hooks/form/userApiKey/useUpdateUserApiKeyForm";
import { type UserApiKeyRead } from "@/types/api/userApiKey/userApiKey";

type UserApiKeyEditFormContainerProps = {
  userApiKey: UserApiKeyRead;
  isLoading: boolean;
};

export const UserApiKeyEditFormContainer: FC<
  UserApiKeyEditFormContainerProps
> = ({ userApiKey, isLoading }) => {
  const {
    onSubmitUpdateUserApiKey: onSubmit,
    isMutating,
    errorMessage,
  } = useUpdateUserApiKeyForm(userApiKey.id);

  return (
    <UserApiKeyForm
      onSubmit={onSubmit}
      errorMessage={errorMessage}
      isMutating={isMutating}
      userApiKey={userApiKey}
      mutationType="update"
      isLoading={isLoading}
    />
  );
};
