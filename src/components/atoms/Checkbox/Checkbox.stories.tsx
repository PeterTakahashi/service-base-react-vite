import { Checkbox } from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Checkbox> = {
  title: "atoms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "onChange" },
    onBlur: { action: "onBlur" },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;
export const Default: Story = {
  args: {
    checked: false,
  },
};
export const Checked: Story = {
  args: {
    checked: true,
  },
};
export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
};
