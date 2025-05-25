import type { Meta, StoryObj } from "@storybook/react";
import { AuthForm } from "./index";

const meta: Meta<typeof AuthForm> = {
  title: "Forms/AuthForm",
  component: AuthForm,
  tags: ["autodocs"],
  argTypes: {
    onSubmit: { action: "submit" },
  },
};
export default meta;

type Story = StoryObj<typeof AuthForm>;

export const SignUp: Story = {
  args: {
    mode: "signup",
  },
};

export const SignIn: Story = {
  args: {
    mode: "signin",
  },
};
