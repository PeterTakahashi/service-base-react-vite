import type { FC } from "react";
import { useVerifiedUser } from "@/features/hooks/swr/fetcher/user/useVerifiedUser";
import { UserEditForm } from "@/components/molecules/forms/UserEditForm";
import { useEditUserForm } from "@/features/hooks/form/user/useEditUserForm";
import { UserRoundPenIcon } from "lucide-react";
import { useEditUserPageBreadcrumbs } from "./breadcrumbs";

export const EditUserPage: FC = () => {
  const { user } = useVerifiedUser();
  const { onSubmitEditUser, errorDetails } = useEditUserForm();

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
        errorDetails={errorDetails}
      />
    </div>
  );
};
