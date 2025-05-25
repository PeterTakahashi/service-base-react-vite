import type { FC } from "react";
import { AuthLayout } from "@/components/layout/AuthLayout";

export const SentResetPasswordMailPage: FC = () => {
  return (
    <AuthLayout title="Check your email">
      <p className="mt-4 text-center text-sm text-gray-500">
        We have sent you an email with a link to reset your password.
      </p>

      <div className="mt-10 text-center text-sm/6 text-gray-500">
        <div>
          Remembered your password?{" "}
          <a
            href="/signin"
            className="font-semibold text-teal-600 hover:text-teal-500"
          >
            Sign in
          </a>
        </div>
      </div>
    </AuthLayout>
  );
};
