import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateUserApiKeyMutation } from "@/features/hooks/swr/mutation/userApiKey/useUpdateUserApiKeyMutation";
import type { UserApiKeyCreateValues } from "@/features/zodSchemas/userApiKey/userApiKeyCreateSchema";
import type { UserApiKeyCreateRequestBody } from "@/types/api/userApiKey/userApiKeyForm";
import { parseAxiosErrorDetails } from "@/lib/parseAxiosErrorDetails";
import type { ErrorDetail } from "@/types/api/error";

export function useUpdateUserApiKeyForm(id: string) {
  const [errorDetails, setErrorDetails] = useState<ErrorDetail[] | null>(null);
  const { trigger: updateUserApiKeyTrigger, isMutating } =
    useUpdateUserApiKeyMutation(id);
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
        setErrorDetails(parseAxiosErrorDetails(error));
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
