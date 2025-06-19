import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { signUpSchema } from "@/features/zodSchemas/auth/signUpSchema";
import { signInSchema } from "@/features/zodSchemas/auth/signInSchema";
import { Input } from "@/components/molecules/Input";
import { Button } from "@/components/atoms/Button";
import { GithubAuthButton } from "@/components/molecules/buttons/GithubAuthButton";
import { GoogleAuthButton } from "@/components/molecules/buttons/GoogleAuthButton";
import type { ErrorDetail } from "@/types/api/error";
import { ErrorMessagesDisplay } from "@/components/atoms/ErrorMessagesDisplay";
import { useServerErrors } from "@/features/hooks/form/useServerErrors";
import { Link } from "react-router-dom";

type AuthFormProps = {
  mode: "signup" | "signin";
  errorDetails: ErrorDetail[] | null;
  onSubmit: (data: SignUpValues | SignInValues) => void;
};

export type SignUpValues = z.infer<typeof signUpSchema>;
export type SignInValues = z.infer<typeof signInSchema>;

export const AuthForm: React.FC<AuthFormProps> = ({
  mode,
  errorDetails,
  onSubmit,
}) => {
  const isSignUp = mode === "signup";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm<SignUpValues & SignInValues>({
    resolver: zodResolver(isSignUp ? signUpSchema : signInSchema),
  });

  const onFormSubmit = async (data: SignUpValues & SignInValues) => {
    onSubmit(data);
  };

  const globalMessages = useServerErrors<SignUpValues & SignInValues>(
    errorDetails,
    setError,
    clearErrors
  );

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
      <div className="w-full max-w-sm mx-auto grid items-center gap-4">
        <div className="grid items-center gap-1">
          <Input
            label="Email"
            type="email"
            id="email"
            placeholder="Email"
            {...register("email")}
            required
            autoComplete="email"
            errorMessage={errors.email && errors.email.message}
          />
        </div>

        <div className="grid items-center gap-1">
          <Input
            label="Password"
            type="password"
            id="password"
            placeholder="Password"
            {...register("password")}
            required
            autoComplete="current-password"
            errorMessage={errors.password && errors.password.message}
          />
        </div>

        <ErrorMessagesDisplay errorMessages={globalMessages} />

        {!isSignUp && (
          <div>
            <Link
              to="/forgot-password"
              className="font-semibold text-sm text-right text-primary-600 hover:text-primary-500"
            >
              Forgot password?
            </Link>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full justify-center mt-4"
        >
          {isSubmitting ? "Sending..." : isSignUp ? "Sign up" : "Sign in"}
        </Button>

        <div>
          <div className="relative mt-2">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center"
            >
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm/6 font-medium">
              <span className="bg-white px-6 text-gray-900">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <GoogleAuthButton />
            <GithubAuthButton />
          </div>
        </div>
      </div>
    </form>
  );
};
