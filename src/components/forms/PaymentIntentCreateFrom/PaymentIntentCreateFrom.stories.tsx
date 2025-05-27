import type { Meta, StoryObj } from "@storybook/react";
import { PaymentIntentCreateFrom } from "./index";
const meta: Meta<typeof PaymentIntentCreateFrom> = {
  title: "Forms/PaymentIntentCreateFrom",
  component: PaymentIntentCreateFrom,
  tags: ["autodocs"],
  argTypes: {
    onSubmit: { action: "submit" },
  },
};
export default meta;

type Story = StoryObj<typeof PaymentIntentCreateFrom>;

export const Default: Story = {
  args: {},
};
