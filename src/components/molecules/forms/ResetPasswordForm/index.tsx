import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { resetPasswordSchema } from "@/features/zodSchemas/auth/resetPasswordSchema";
import { Input } from "@/components/molecules/Input";
import { Button } from "@/components/atoms/Button";
import type { ErrorDetail } from "@/types/api/error";
import { ErrorMessagesDisplay } from "@/components/atoms/ErrorMessagesDisplay";
import { useServerErrors } from "@/features/hooks/form/useServerErrors";

export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;

type ResetPasswordProps = {
  onSubmit: (data: ResetPasswordValues) => void;
  errorDetails?: ErrorDetail[] | null;
};

export const ResetPasswordForm: React.FC<ResetPasswordProps> = ({
  onSubmit,
  errorDetails,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const globalMessages = useServerErrors<ResetPasswordValues>(
    errorDetails,
    setError,
    clearErrors
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="w-full max-w-sm mx-auto">
        <div className="grid items-center gap-1.5">
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

        <div className="grid items-center gap-1.5">
          <Input
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
            required
            autoComplete="current-password"
            errorMessage={
              errors.confirmPassword && errors.confirmPassword.message
            }
          />
        </div>

        <ErrorMessagesDisplay errorMessages={globalMessages} />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md mt-4"
        >
          {isSubmitting ? "Sending..." : "Reset Password"}
        </Button>
      </div>
    </form>
  );
};
