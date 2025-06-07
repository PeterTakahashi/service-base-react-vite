import { type FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UserApiKeyCreateSchema,
  type UserApiKeyCreateValues,
} from "@/features/zodSchemas/userApiKey/userApiKeyCreateSchema";
import { Input } from "@/components/molecules/Input";
import { Button } from "@/components/atoms/Button";

type UserApiKeyNewFormProps = {
  onSubmit: (data: UserApiKeyCreateValues) => void;
};
export const UserApiKeyNewForm: FC<UserApiKeyNewFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserApiKeyCreateValues>({
    resolver: zodResolver(UserApiKeyCreateSchema),
  });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          id="name"
          placeholder="My Key"
          label="Name"
          {...register("name")}
          errorMessage={errors.name?.message}
        />
        <Input
          id="expires_at"
          type="date"
          placeholder="YYYY-MM-DD"
          label="Expires At"
          {...register("expires_at")}
          errorMessage={errors.expires_at?.message}
        />
        <Input
          id="allowed_origin"
          placeholder="https://example-one.com,https://example-two.com"
          label="Allowed Origin"
          {...register("allowed_origin")}
          errorMessage={errors.allowed_origin?.message}
        />
        <Input
          id="allowed_ip"
          placeholder="192.168.1.1,192.168.1.2"
          label="Allowed IP"
          {...register("allowed_ip")}
          errorMessage={errors.allowed_ip?.message}
        />

        <Button className="w-full" type="submit" disabled={isSubmitting}>
          Create API Key
        </Button>
      </form>
    </div>
  );
};
