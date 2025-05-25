import type { FC } from "react";
import { ResetPasswordForm } from "@/components/forms/ResetPasswordForm";
import { useResetPasswordForm } from "@/features/hooks/form/auth/useResetPasswordForm";
import { AuthLayout } from "@/components/layout/AuthLayout";

export const ResetPasswordPage: FC = () => {
  const { onSubmitResetPassword, errorMessage } = useResetPasswordForm();

  return (
    <AuthLayout title="Reset your password">
      <ResetPasswordForm onSubmit={onSubmitResetPassword} />

      {errorMessage && (
        <p className="mt-4 text-center text-sm text-red-600">{errorMessage}</p>
      )}
    </AuthLayout>
  );
};
