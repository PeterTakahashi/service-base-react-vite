import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./index";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "onChange" },
    onBlur: { action: "onBlur" },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Type here...",
  },
};

export const WithError: Story = {
  args: {
    placeholder: "Something is wrong",
    errorMessage: "Validation Error!",
  },
};
