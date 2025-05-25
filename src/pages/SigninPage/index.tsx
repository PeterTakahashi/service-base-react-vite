import type { FC } from "react";
import { AuthForm } from "@/components/forms/AuthForm";
import { useSignInForm } from "@/features/hooks/form/auth/useSignInForm";
import { AuthLayout } from "@/components/layout/AuthLayout";

export const SigninPage: FC = () => {
  const { onSubmitSignIn, errorMessage } = useSignInForm();

  return (
    <AuthLayout title="Sign in to your account">
      <AuthForm
        mode="signin"
        errorMessage={errorMessage}
        onSubmit={onSubmitSignIn}
      />

      <div className="mt-10 text-center text-sm/6 text-gray-500">
        <div>
          No account yet?{" "}
          <a
            href="/signup"
            className="font-semibold text-teal-600 hover:text-teal-500"
          >
            Create an account
          </a>
        </div>
      </div>
    </AuthLayout>
  );
};
