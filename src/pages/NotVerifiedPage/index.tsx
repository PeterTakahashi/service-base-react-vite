import { type FC } from "react";
import { useRequestVerificationForm } from "@/features/hooks/form/auth/useRequestVerificationForm";
import { useLogout } from "@/features/hooks/auth/useLogout";

export const NotVerifiedPage: FC = () => {
  const { onLogout } = useLogout();
  const { user, errorDetails } = useRequestVerificationForm();
  if (!user) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Your account is not verified yet!
      </h1>
      <p className="text-green-600">
        Verification email sent. Please check your inbox.
      </p>
      {errorDetails &&
        errorDetails.map((errorDetail, index) => (
          <p key={index} className="text-red-500 mt-2">
            {errorDetail.detail}
          </p>
        ))}
      <div className="mt-16 text-center text-sm/6 text-gray-500">
        <div>
          Did you receive the email?{" "}
          <a
            href=""
            className="font-semibold text-primary-600 hover:text-primary-500"
          >
            Resend verification email
          </a>
        </div>
      </div>
      <button
        onClick={onLogout}
        className="mt-4 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
      >
        Logout
      </button>
    </div>
  );
};
