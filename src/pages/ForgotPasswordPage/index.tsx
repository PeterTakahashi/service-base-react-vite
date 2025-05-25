import type { FC } from "react";
import { ForgotPasswordForm } from "@/components/forms/ForgotPasswordForm";
import { useForgotPasswordForm } from "@/features/hooks/form/auth/useForgotPasswordForm";
import { AuthLayout } from "@/components/layout/AuthLayout";

export const ForgotPasswordPage: FC = () => {
  const { onSubmitForgotPassword, errorMessage } = useForgotPasswordForm();

  return (
    <AuthLayout title="Forgot your password?">
      <ForgotPasswordForm onSubmit={onSubmitForgotPassword} />

      {errorMessage && (
        <p className="mt-4 text-center text-sm text-red-600">{errorMessage}</p>
      )}

      <div className="mt-10 text-center text-sm/6 text-gray-500">
        Remembered your password?{" "}
        <a
          href="/signin"
          className="font-semibold text-teal-600 hover:text-teal-500"
        >
          Sign in
        </a>
      </div>
    </AuthLayout>
  );
};
