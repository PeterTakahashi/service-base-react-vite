import { UserApiKeyForm } from "@/components/molecules/forms/UserApiKeyForm";
import { type FC } from "react";
import { useCreateUserApiKeyForm } from "@/features/hooks/form/userApiKey/useCreateUserApiKeyForm";

export const UserApiKeyNewFormContainer: FC = () => {
  const {
    onSubmitCreateUserApiKey: onSubmit,
    isMutating,
    errorDetails,
  } = useCreateUserApiKeyForm();

  return (
    <UserApiKeyForm
      onSubmit={onSubmit}
      errorDetails={errorDetails}
      isMutating={isMutating}
    />
  );
};
