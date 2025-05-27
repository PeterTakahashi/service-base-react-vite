import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";

import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { FormButton } from "@/components/ui/FormButton";
import { createPaymentIntentSchema } from "@/features/zodSchemas/paymentIntent/createPaymentIntentSchema";

export type paymentIntentValues = z.infer<typeof createPaymentIntentSchema>;

type PaymentIntentCreateFromProps = {
  onSubmit: (data: paymentIntentValues) => void;
};

export const PaymentIntentCreateFrom: React.FC<
  PaymentIntentCreateFromProps
> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<paymentIntentValues>({
    resolver: zodResolver(createPaymentIntentSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
      })}
      className="space-y-6"
    >
      <div className="w-full max-w-sm mx-auto">
        <div className="grid items-center gap-1.5">
          <Label htmlFor="amount">Amount (USD)</Label>
          <Input
            type="number"
            id="amount"
            placeholder="10"
            {...register("amount")}
            required
            autoComplete="amount"
            errorMessage={errors.amount && errors.amount.message}
          />
        </div>

        <FormButton
          type="submit"
          disabled={isSubmitting}
          className="flex w-full justify-center mt-8"
        >
          {isSubmitting ? "Sending..." : "Checkout"}
        </FormButton>
      </div>
    </form>
  );
};
