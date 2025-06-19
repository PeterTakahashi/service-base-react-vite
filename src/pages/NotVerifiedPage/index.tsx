import { type FC } from "react";
import { useRequestVerificationForm } from "@/features/hooks/form/auth/useRequestVerificationForm";
import { useLogout } from "@/features/hooks/auth/useLogout";
import { Button } from "@/components/atoms/Button";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export const NotVerifiedPage: FC = () => {
  const { onLogout } = useLogout();
  const { user, errorDetails, handleRequestVerifyToken } =
    useRequestVerificationForm();
  if (!user) return null;

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Your account is not verified yet!</h1>
      <p className="text-green-600">
        Verification email sent. Please check your inbox.
      </p>
      {errorDetails &&
        errorDetails.map((errorDetail, index) => (
          <p key={index} className="text-red-500">
            {errorDetail.detail}
          </p>
        ))}
      <div className="text-center text-sm/6 text-gray-500">
        <div>
          Did you receive the email?{" "}
          <Link
            to=""
            onClick={() => {
              handleRequestVerifyToken(user.email);
              toast.success("Verification email sent successfully!");
            }}
            className="font-semibold text-primary-600 hover:text-primary-500"
          >
            Resend verification email
          </Link>
        </div>
      </div>
      <Button className="mt-10" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
};
