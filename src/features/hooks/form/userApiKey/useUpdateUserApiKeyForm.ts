import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateUserApiKeyMutation } from "@/features/hooks/swr/mutation/userApiKey/useUpdateUserApiKeyMutation";
import type { UserApiKeyCreateValues } from "@/features/zodSchemas/userApiKey/userApiKeyCreateSchema";
import type { UserApiKeyCreateRequestBody } from "@/types/api/userApiKey/userApiKeyForm";

export function useUpdateUserApiKeyForm(id: string) {
  const {
    trigger: updateUserApiKeyTrigger,
    isMutating,
    errorDetails,
  } = useUpdateUserApiKeyMutation(id);
  const navigate = useNavigate();

  const onSubmitUpdateUserApiKey = useCallback(
    async (data: UserApiKeyCreateValues) => {
      try {
        const requestData: UserApiKeyCreateRequestBody =
          data as UserApiKeyCreateRequestBody;
        await updateUserApiKeyTrigger(requestData);
        navigate("/user-api-keys", {
          state: { successMessage: "User API key updated successfully" },
        });
      } catch (error) {
        console.error(error);
      }
    },
    [updateUserApiKeyTrigger, navigate]
  );

  return {
    onSubmitUpdateUserApiKey,
    isMutating,
    errorDetails,
  };
}
