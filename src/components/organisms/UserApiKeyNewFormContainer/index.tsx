import { UserApiKeyNewForm } from "@/components/molecules/forms/UserApiKeyNewForm";
import { type FC } from "react";
import { useCreateUserApiKeyForm } from "@/features/hooks/form/userApiKey/useCreateUserApiKeyForm";

export const UserApiKeyNewFormContainer: FC = () => {
  const {
    onSubmitCreateUserApiKey: onSubmit,
    isMutating,
    errorMessage,
  } = useCreateUserApiKeyForm();

  return (
    <UserApiKeyNewForm
      onSubmit={onSubmit}
      errorMessage={errorMessage}
      isMutating={isMutating}
    />
  );
};
