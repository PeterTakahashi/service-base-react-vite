import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEditUserMutation } from "@/features/hooks/swr/mutation/user/useEditUserMutation";
import type { UserEditValues } from "@/components/molecules/forms/UserEditForm";
import { type UserUpdate } from "@/types/api/user/user";
import { parseAxiosErrorDetails } from "@/lib/parseAxiosErrorDetails";
import type { ErrorDetail } from "@/types/api/error";

export function useEditUserForm() {
  const [errorDetails, setErrorDetails] = useState<ErrorDetail[] | null>(null);
  const { trigger: editUserTrigger, isMutating } = useEditUserMutation();
  const navigate = useNavigate();

  const onSubmitEditUser = useCallback(
    async (data: UserEditValues) => {
      try {
        const requestData: UserUpdate = {};
        if (data.email) {
          requestData.email = data.email;
        }
        await editUserTrigger(requestData);
        navigate("/me", {
          state: { successMessage: "User updated successfully" },
        });
      } catch (error) {
        setErrorDetails(parseAxiosErrorDetails(error));
      }
    },
    [editUserTrigger, navigate]
  );

  return {
    onSubmitEditUser,
    errorDetails,
    isMutating,
  };
}
