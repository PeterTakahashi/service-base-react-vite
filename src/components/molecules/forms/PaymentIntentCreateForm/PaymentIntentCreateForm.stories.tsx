import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaymentIntentCreateForm } from "./index";
const meta: Meta<typeof PaymentIntentCreateForm> = {
  title: "molecules/Forms/PaymentIntentCreateForm",
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
