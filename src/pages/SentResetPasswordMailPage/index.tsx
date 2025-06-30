import type { FC } from "react";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Link } from "react-router-dom";

export const SentResetPasswordMailPage: FC = () => {
  return (
    <AuthLayout title="Check your email">
      <p className="mt-4 text-center text-sm text-gray-500">
        We have sent you an email with a link to reset your password.
      </p>

      <div className="mt-10 text-center text-sm/6 text-gray-500">
        <div>
          Remembered your password?{" "}
          <Link
            to="/signin"
            className="font-semibold text-primary-600 hover:text-primary-500"
          >
            Sign in
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};
