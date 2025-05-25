import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./index";

const meta: Meta<typeof Loading> = {
  title: "UI/Loading",
  component: Loading,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Loading>;
export const Default: Story = {
  args: {
    size: "md",
    color: "primary",
    variant: "default",
    className: "",
    isLoading: true,
    children: "Loading",
  },
  render: (args) => (
    <div className="flex items-center justify-center h-screen">
      <Loading {...args} />
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
