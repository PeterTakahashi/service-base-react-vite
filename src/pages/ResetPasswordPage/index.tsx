import type { FC } from "react";
import { ResetPasswordForm } from "@/components/molecules/forms/ResetPasswordForm";
import { useResetPasswordForm } from "@/features/hooks/form/auth/useResetPasswordForm";
import { AuthLayout } from "@/components/layout/AuthLayout";

export const ResetPasswordPage: FC = () => {
  const { onSubmitResetPassword, errorDetails } = useResetPasswordForm();

  return (
    <AuthLayout title="Reset your password">
      <ResetPasswordForm
        onSubmit={onSubmitResetPassword}
        errorDetails={errorDetails}
      />
    </AuthLayout>
  );
};
