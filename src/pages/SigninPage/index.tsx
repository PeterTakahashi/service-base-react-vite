import type { FC } from "react";
import { AuthForm } from "@/components/molecules/forms/AuthForm";
import { useSignInForm } from "@/features/hooks/form/auth/useSignInForm";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Link } from "react-router-dom";

export const SigninPage: FC = () => {
  const { onSubmitSignIn, errorDetails } = useSignInForm();

  return (
    <AuthLayout title="Sign in to your account">
      <AuthForm
        mode="signin"
        errorDetails={errorDetails}
        onSubmit={onSubmitSignIn}
      />

      <div className="mt-10 text-center text-sm/6 text-gray-500">
        <div>
          No account yet?{" "}
          <Link
            to="/signup"
            className="font-semibold text-primary-600 hover:text-primary-500"
          >
            Create an account
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};
