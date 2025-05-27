import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";

import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { createPaymentIntentSchema } from "@/features/zodSchemas/paymentIntent/createPaymentIntentSchema";

export type PaymentIntentValues = z.infer<typeof createPaymentIntentSchema>;

type PaymentIntentCreateFormProps = {
  onSubmit: (data: PaymentIntentValues) => void;
};

export const PaymentIntentCreateForm: React.FC<
  PaymentIntentCreateFormProps
> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PaymentIntentValues>({
    resolver: zodResolver(createPaymentIntentSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-md space-y-6 rounded-xl bg-white p-8"
    >
      <div className="text-center">
        <p className="text-sm text-gray-500">
          How much would you like to deposit?
        </p>
      </div>

      <div className="grid gap-1.5">
        <Input
          type="number"
          id="amount"
          placeholder="10"
          autoComplete="amount"
          {...register("amount")}
          errorMessage={errors.amount?.message}
        />
      </div>

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
