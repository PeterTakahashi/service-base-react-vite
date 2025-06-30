import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { forgotPasswordSchema } from "@/features/zodSchemas/auth/forgotPasswordSchema";
import { Input } from "@/components/molecules/Input";
import { Button } from "@/components/atoms/Button";
import type { ErrorDetail } from "@/types/api/error";
import { ErrorMessagesDisplay } from "@/components/atoms/ErrorMessagesDisplay";
import { useServerErrors } from "@/features/hooks/form/useServerErrors";

export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

type ForgotPasswordProps = {
  onSubmit: (data: ForgotPasswordValues) => void;
  errorDetails?: ErrorDetail[] | null;
};

export const ForgotPasswordForm: React.FC<ForgotPasswordProps> = ({
  onSubmit,
  errorDetails,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const globalMessages = useServerErrors<ForgotPasswordValues>(
    errorDetails,
    setError,
    clearErrors
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="w-full max-w-sm mx-auto grid gap-4">
        <div className="grid items-center gap-1.5">
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

        <ErrorMessagesDisplay errorMessages={globalMessages} />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md mt-4"
        >
          {isSubmitting ? "Sending..." : "Send Reset Link"}
        </Button>
      </div>
    </form>
  );
};
