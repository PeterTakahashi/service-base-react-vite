import type { FC } from "react";
import { ForgotPasswordForm } from "@/components/molecules/forms/ForgotPasswordForm";
import { useForgotPasswordForm } from "@/features/hooks/form/auth/useForgotPasswordForm";
import { AuthLayout } from "@/components/layout/AuthLayout";

export const ForgotPasswordPage: FC = () => {
  const { onSubmitForgotPassword, errorDetails } = useForgotPasswordForm();

  return (
    <AuthLayout title="Forgot your password?">
      <ForgotPasswordForm
        onSubmit={onSubmitForgotPassword}
        errorDetails={errorDetails}
      />

      <div className="mt-10 text-center text-sm/6 text-gray-500">
        Remembered your password?{" "}
        <a
          href="/signin"
          className="font-semibold text-primary-600 hover:text-primary-500"
        >
          Sign in
        </a>
      </div>
    </AuthLayout>
  );
};
