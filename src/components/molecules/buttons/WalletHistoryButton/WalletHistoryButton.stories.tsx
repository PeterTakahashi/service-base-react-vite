import type { Meta, StoryObj } from "@storybook/react";
import { WalletHistoryButton } from "./index";

const meta: Meta<typeof WalletHistoryButton> = {
  title: "molecules/Buttons/WalletHistoryButton",
  component: WalletHistoryButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      action: "clicked",
      description: "Function to call when the button is clicked",
    },
  },
};
export default meta;
type Story = StoryObj<typeof WalletHistoryButton>;
export const Default: Story = {
  args: {
    onClick: () => console.log("Add Funds button clicked"),
  },
  render: (args) => <WalletHistoryButton {...args} />,
};
