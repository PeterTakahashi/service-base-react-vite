import type { FC } from "react";
import { AuthForm } from "@/components/molecules/forms/AuthForm";
import { useSignUpForm } from "@/features/hooks/form/auth/useSignUpForm";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Link } from "react-router-dom";

export const SignupPage: FC = () => {
  const { onSubmitSignUp, errorDetails } = useSignUpForm();

  return (
    <AuthLayout title="Create an account">
      <AuthForm
        mode="signup"
        errorDetails={errorDetails}
        onSubmit={onSubmitSignUp}
      />

      <div className="mt-10 text-center text-sm/6 text-gray-500">
        If you already have an account,{" "}
        <Link
          to="/signin"
          className="font-semibold text-primary-600 hover:text-primary-500"
        >
          Sign in
        </Link>
      </div>
    </AuthLayout>
  );
};
