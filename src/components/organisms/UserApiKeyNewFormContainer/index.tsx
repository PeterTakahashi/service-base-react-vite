import { UserApiKeyForm } from "@/components/molecules/forms/UserApiKeyForm";
import { type FC } from "react";
import { useCreateUserApiKeyForm } from "@/features/hooks/form/userApiKey/useCreateUserApiKeyForm";

export const UserApiKeyNewFormContainer: FC = () => {
  const {
    onSubmitCreateUserApiKey: onSubmit,
    isMutating,
    errorMessage,
  } = useCreateUserApiKeyForm();

  return (
    <UserApiKeyForm
      onSubmit={onSubmit}
      errorMessage={errorMessage}
      isMutating={isMutating}
    />
  );
};
