import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateUserApiKeyMutation } from "@/features/hooks/swr/mutation/userApiKey/useCreateUserApiKeyMutation";
import type { UserApiKeyCreateValues } from "@/features/zodSchemas/userApiKey/userApiKeyCreateSchema";
import type { UserApiKeyCreateRequestBody } from "@/types/api/userApiKey/userApiKeyForm";
import { parseAxiosErrorDetails } from "@/lib/parseAxiosErrorDetails";
import type { ErrorDetail } from "@/types/api/error";

export function useCreateUserApiKeyForm() {
  const [errorDetails, setErrorDetails] = useState<ErrorDetail[] | null>(null);
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
        setErrorDetails(parseAxiosErrorDetails(error));
      }
    },
    [createUserApiKeyTrigger, navigate]
  );

  return {
    onSubmitCreateUserApiKey,
    errorDetails,
    isMutating,
  };
}
