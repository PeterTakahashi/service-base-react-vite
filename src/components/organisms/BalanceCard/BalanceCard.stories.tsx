import type { Meta, StoryObj } from "@storybook/react";
import { BalanceCard } from "./index";

const meta: Meta<typeof BalanceCard> = {
  title: "Organisms/BalanceCard",
  component: BalanceCard,
  tags: ["autodocs"],
  argTypes: {
    balance: {
      control: { type: "number" },
      description: "The balance amount to display",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes for styling",
    },
  },
};
export default meta;
type Story = StoryObj<typeof BalanceCard>;
export const Default: Story = {
  args: {
    balance: 123400,
    className: "w-full max-w-sm",
  },
  render: (args) => <BalanceCard {...args} />,
};
