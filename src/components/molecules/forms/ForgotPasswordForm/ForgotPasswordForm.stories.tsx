import type { Meta, StoryObj } from "@storybook/react";
import { ForgotPasswordForm } from "./index";

const meta: Meta<typeof ForgotPasswordForm> = {
  title: "molecules/Forms/ForgotPasswordForm",
  component: ForgotPasswordForm,
  tags: ["autodocs"],
  argTypes: {
    onSubmit: { action: "submit" },
  },
};
export default meta;

type Story = StoryObj<typeof ForgotPasswordForm>;

export const Default: Story = {};
