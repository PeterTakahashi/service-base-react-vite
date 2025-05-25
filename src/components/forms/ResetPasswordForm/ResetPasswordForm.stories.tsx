import type { Meta, StoryObj } from "@storybook/react";
import { ResetPasswordForm } from "./index";

const meta: Meta<typeof ResetPasswordForm> = {
  title: "Forms/ResetPasswordForm",
  component: ResetPasswordForm,
  tags: ["autodocs"],
  argTypes: {
    onSubmit: { action: "submit" },
  },
};
export default meta;

type Story = StoryObj<typeof ResetPasswordForm>;

export const Default: Story = {};
