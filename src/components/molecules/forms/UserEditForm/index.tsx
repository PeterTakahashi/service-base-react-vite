import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { userEditSchema } from "@/features/zodSchemas/user/userEditSchema";
import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { Button } from "@/components/atoms/Button";

type UserEditFormProps = {
  onSubmit: (data: UserEditValues) => void;
  defaultValues: UserEditValues;
};

export type UserEditValues = z.infer<typeof userEditSchema>;

export const UserEditForm: React.FC<UserEditFormProps> = ({
  onSubmit,
  defaultValues,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserEditValues>({
    resolver: zodResolver(userEditSchema),
    defaultValues,
  });

  const onFormSubmit = async (data: UserEditValues) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
      <div className="grid w-full max-w-sm items-center gap-1.5">
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

      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full max-w-sm justify-center"
        >
          {isSubmitting ? "Sending..." : "Update"}
        </Button>
      </div>
    </form>
  );
};
