import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";

import { Input } from "@/components/molecules/Input";
import { Button } from "@/components/atoms/Button";
import { createPaymentIntentSchema } from "@/features/zodSchemas/paymentIntent/createPaymentIntentSchema";

import type { ErrorDetail } from "@/types/api/error";
import { ErrorMessagesDisplay } from "@/components/atoms/ErrorMessagesDisplay";
import { useServerErrors } from "@/features/hooks/form/useServerErrors";

export type PaymentIntentValues = z.infer<typeof createPaymentIntentSchema>;

type PaymentIntentCreateFormProps = {
  onSubmit: (data: PaymentIntentValues) => void;
  errorDetails?: ErrorDetail[] | null;
};

const quickAmounts = [10, 50, 100];

export const PaymentIntentCreateForm: React.FC<
  PaymentIntentCreateFormProps
> = ({ onSubmit, errorDetails }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm<PaymentIntentValues>({
    resolver: zodResolver(createPaymentIntentSchema),
  });

  const globalMessages = useServerErrors<PaymentIntentValues>(
    errorDetails,
    setError,
    clearErrors
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-md space-y-6 rounded-xl bg-white"
    >
      <div className="text-center">
        <p className="text-sm text-gray-500">
          How much would you like to deposit?
        </p>
      </div>

      <div className="grid gap-4 max-w-64 mx-auto">
        <div className="relative">
          <Input
            type="number"
            id="amount"
            placeholder="10"
            autoComplete="off"
            className="pr-12 appearance-none [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            {...register("amount", { valueAsNumber: true })}
            errorMessage={errors.amount?.message}
          />
          <span className="absolute inset-y-0 right-4 flex items-center text-sm text-gray-500">
            USD
          </span>
        </div>

        <div className="flex gap-2">
          {quickAmounts.map((value) => (
            <Button
              key={value}
              type="button"
              variant="secondary"
              className="flex-1"
              onClick={() =>
                setValue("amount", value, { shouldValidate: true })
              }
            >
              {value} USD
            </Button>
          ))}
        </div>
      </div>

      <ErrorMessagesDisplay errorMessages={globalMessages} />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-4"
        size="lg"
      >
        {isSubmitting ? "Processing..." : "Add Funds"}
      </Button>
    </form>
  );
};
