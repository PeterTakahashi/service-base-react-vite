import React from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { Button } from "@/components/atoms/Button";

type PaymentFormProps = {
  amount: number;
};

export const PaymentForm: React.FC<PaymentFormProps> = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}`,
      },
    });
    if (error) console.error(error.message);
    setLoading(false);
  };

  return (
    <>
      <p className="text-center mb-4">
        <strong>${(amount / 100).toFixed(2)}</strong>
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <PaymentElement options={{ layout: "tabs" }} />
        <Button
          onClick={handleSubmit}
          disabled={!stripe || loading}
          className="mt-4"
          type="button"
        >
          {loading ? "Processing…" : "Pay"}
        </Button>
      </form>
    </>
  );
};
