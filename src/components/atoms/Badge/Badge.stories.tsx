import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./index";

const meta: Meta<typeof Badge> = {
  title: "atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;
export const Default: Story = {
  args: {
    children: "Default Badge",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Badge",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive Badge",
  },
};
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Badge",
  },
};
