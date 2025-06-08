import type { FC } from "react";
import { useVerifiedUser } from "@/features/hooks/swr/fetcher/user/useVerifiedUser";
import { UserEditForm } from "@/components/molecules/forms/UserEditForm";
import { useEditUserForm } from "@/features/hooks/form/user/useEditUserForm";
import { UserRoundPenIcon } from "lucide-react";
import { useEditUserPageBreadcrumbs } from "./breadcrumbs";

export const EditUserPage: FC = () => {
  const { user } = useVerifiedUser();
  const { onSubmitEditUser, errorMessage } = useEditUserForm();

  useEditUserPageBreadcrumbs();

  if (!user) return;

  return (
    <div className="max-w-sm mx-auto mt-16">
      <h1 className="text-2xl font-bold mb-4">
        <UserRoundPenIcon className="inline-block mr-2" />
        Edit
      </h1>

      <UserEditForm
        defaultValues={{ email: user.email }}
        onSubmit={onSubmitEditUser}
      />

      {errorMessage && (
        <p className="mt-4 text-center text-sm text-red-600">{errorMessage}</p>
      )}
    </div>
  );
};
