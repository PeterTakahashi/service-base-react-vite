import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./index";

const meta: Meta<typeof Label> = {
  title: "atoms/Label",
  component: Label,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Label Text",
  },
};
