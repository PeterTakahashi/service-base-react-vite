import { Calendar } from "@/components/atoms/Calendar";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Calendar> = {
  title: "atoms/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {},
};
