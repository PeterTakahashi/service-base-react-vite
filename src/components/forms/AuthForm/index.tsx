import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { signUpSchema } from "@/features/zodSchemas/auth/signUpSchema";
import { signInSchema } from "@/features/zodSchemas/auth/signInSchema";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { FormButton } from "@/components/ui/FormButton";
import { GithubAuthButton } from "@/components/ui/GithubAuthButton";
import { GoogleAuthButton } from "@/components/ui/GoogleAuthButton";

type AuthFormProps = {
  mode: "signup" | "signin";
  errorMessage: string;
  onSubmit: (data: SignUpValues | SignInValues) => void;
};

export type SignUpValues = z.infer<typeof signUpSchema>;
export type SignInValues = z.infer<typeof signInSchema>;

export const AuthForm: React.FC<AuthFormProps> = ({
  mode,
  errorMessage,
  onSubmit,
}) => {
  const isSignUp = mode === "signup";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpValues & SignInValues>({
    resolver: zodResolver(isSignUp ? signUpSchema : signInSchema),
  });

  const onFormSubmit = async (data: SignUpValues & SignInValues) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
      <div className="w-full max-w-sm mx-auto">
        <div className="grid items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email")}
            required
            autoComplete="email"
            errorMessage={errors.email && errors.email.message}
          />
        </div>

        <div className="grid items-center gap-1.5 mt-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password")}
            required
            autoComplete="current-password"
            errorMessage={errors.password && errors.password.message}
          />
        </div>

        {errorMessage && (
          <p className="mt-4 text-center text-sm text-red-600">
            {errorMessage}
          </p>
        )}

        {!isSignUp && (
          <div>
            <a
              href="/forgot-password"
              className="font-semibold text-sm text-right text-teal-600 hover:text-teal-500"
            >
              Forgot password?
            </a>
          </div>
        )}

        <FormButton
          type="submit"
          disabled={isSubmitting}
          className="flex w-full justify-center mt-8"
        >
          {isSubmitting ? "Sending..." : isSignUp ? "Sign up" : "Sign in"}
        </FormButton>

        <div>
          <div className="relative mt-10">
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
