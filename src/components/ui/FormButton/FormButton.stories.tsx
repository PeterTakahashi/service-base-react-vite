import type { Meta, StoryObj } from "@storybook/react";
import { FormButton } from "./index";

const meta: Meta<typeof FormButton> = {
  title: "UI/FormButton",
  component: FormButton,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FormButton>;

export const Default: Story = {
  args: {
    children: "Submit",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};
