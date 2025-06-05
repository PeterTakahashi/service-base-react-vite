import { PageSizeSelect } from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PageSizeSelect> = {
  title: "Molecules/PageSizeSelect",
  component: PageSizeSelect,
  tags: ["autodocs"],
  argTypes: {
    onPageSizeChange: { action: "onPageSizeChange" },
  },
};

export default meta;
type Story = StoryObj<typeof PageSizeSelect>;
export const Default: Story = {
  args: {
    pageSize: 10,
    onPageSizeChange: (size) => console.log("Page size changed to:", size),
  },
};
