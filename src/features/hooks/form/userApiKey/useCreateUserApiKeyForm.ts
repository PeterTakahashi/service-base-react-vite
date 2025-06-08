import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateUserApiKeyMutation } from "@/features/hooks/swr/mutation/useCreateUserApiKeyMutation";
import type { UserApiKeyCreateValues } from "@/features/zodSchemas/userApiKey/userApiKeyCreateSchema";
import type { UserApiKeyCreateRequestBody } from "@/types/api/userApiKey/userApiKeyForm";
import { parseAxiosErrorMessage } from "@/lib/parseAxiosErrorMessage";

export function useCreateUserApiKeyForm() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { trigger: createUserApiKeyTrigger, isMutating } =
    useCreateUserApiKeyMutation();
  const navigate = useNavigate();

  const onSubmitCreateUserApiKey = useCallback(
    async (data: UserApiKeyCreateValues) => {
      try {
        const requestData: UserApiKeyCreateRequestBody =
          data as UserApiKeyCreateRequestBody;
        await createUserApiKeyTrigger(requestData);
        navigate("/user-api-keys", {
          state: { successMessage: "User API key created successfully" },
        });
      } catch (error) {
        setErrorMessage(parseAxiosErrorMessage(error));
      }
    },
    [createUserApiKeyTrigger, navigate]
  );

  return {
    onSubmitCreateUserApiKey,
    errorMessage,
    isMutating,
  };
}
