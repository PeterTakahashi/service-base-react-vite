import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { forgotPasswordSchema } from "@/features/zodSchemas/auth/forgotPasswordSchema";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { FormButton } from "@/components/ui/FormButton";

export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

type ForgotPasswordProps = {
  onSubmit: (data: ForgotPasswordValues) => void;
};

export const ForgotPasswordForm: React.FC<ForgotPasswordProps> = ({
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

        <FormButton
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md mt-4"
        >
          {isSubmitting ? "Sending..." : "Send Reset Link"}
        </FormButton>
      </div>
    </form>
  );
};
