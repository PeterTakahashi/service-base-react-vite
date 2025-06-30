import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddFundsButton } from "./index";

const meta: Meta<typeof AddFundsButton> = {
  title: "molecules/Buttons/AddFundsButton",
  component: AddFundsButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      action: "clicked",
      description: "Function to call when the button is clicked",
    },
  },
};
export default meta;
type Story = StoryObj<typeof AddFundsButton>;
export const Default: Story = {
  args: {
    onClick: () => console.log("Add Funds button clicked"),
  },
  render: (args) => <AddFundsButton {...args} />,
};
