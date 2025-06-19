import { type FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UserApiKeyCreateSchema,
  type UserApiKeyCreateValues,
} from "@/features/zodSchemas/userApiKey/userApiKeyCreateSchema";
import { Input } from "@/components/molecules/Input";
import { Button } from "@/components/atoms/Button";
import { type UserApiKeyRead } from "@/types/api/userApiKey/userApiKey";
import type { ErrorDetail } from "@/types/api/error";
import { ErrorMessagesDisplay } from "@/components/atoms/ErrorMessagesDisplay";
import { useServerErrors } from "@/features/hooks/form/useServerErrors";
import { DatePicker } from "@/components/organisms/DatePicker";

type UserApiKeyFormProps = {
  onSubmit: (data: UserApiKeyCreateValues) => void;
  errorDetails: ErrorDetail[] | null;
  isMutating: boolean;
  userApiKey?: UserApiKeyRead;
  isLoading?: boolean;
  mutationType?: "create" | "update";
};

export const UserApiKeyForm: FC<UserApiKeyFormProps> = ({
  onSubmit,
  errorDetails,
  isMutating,
  userApiKey,
  isLoading = false,
  mutationType = "create",
}) => {
  const method = useForm<UserApiKeyCreateValues>({
    resolver: zodResolver(UserApiKeyCreateSchema),
    defaultValues: {
      name: userApiKey?.name || "",
      expires_at: userApiKey?.expires_at
        ? new Date(userApiKey.expires_at).toISOString().slice(0, 10)
        : "",
      allowed_origin: userApiKey?.allowed_origin || "",
      allowed_ip: userApiKey?.allowed_ip || "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = method;

  const globalMessages = useServerErrors<UserApiKeyCreateValues>(
    errorDetails,
    setError,
    clearErrors
  );

  return (
    <FormProvider {...method}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          id="name"
          placeholder="My Key"
          label="Name*"
          {...register("name")}
          errorMessage={errors.name?.message}
          isLoading={isLoading}
        />
        <DatePicker<UserApiKeyCreateValues>
          label="Expires At"
          {...register("expires_at")}
          isLoading={isLoading}
        />
        <Input
          id="allowed_origin"
          placeholder="https://example-one.com,https://example-two.com"
          label="Allowed Origin"
          {...register("allowed_origin")}
          errorMessage={errors.allowed_origin?.message}
          isLoading={isLoading}
        />
        <Input
          id="allowed_ip"
          placeholder="192.168.1.1,192.168.1.2"
          label="Allowed IP"
          {...register("allowed_ip")}
          errorMessage={errors.allowed_ip?.message}
          isLoading={isLoading}
        />

        <ErrorMessagesDisplay errorMessages={globalMessages} />

        <Button
          className="w-full"
          type="submit"
          disabled={isSubmitting || isMutating || isLoading}
        >
          {mutationType === "update" ? "Update API Key" : "Create API Key"}
        </Button>
      </form>
    </FormProvider>
  );
};
