import type { Meta, StoryObj } from "@storybook/react";
import { PaymentIntentCreateForm } from "./index";
const meta: Meta<typeof PaymentIntentCreateForm> = {
  title: "Forms/PaymentIntentCreateForm",
  component: PaymentIntentCreateForm,
  tags: ["autodocs"],
  argTypes: {
    onSubmit: { action: "submit" },
  },
};
export default meta;

type Story = StoryObj<typeof PaymentIntentCreateForm>;

export const Default: Story = {
  args: {},
};
