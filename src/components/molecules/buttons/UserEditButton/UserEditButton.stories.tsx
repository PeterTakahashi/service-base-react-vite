import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserEditButton } from "./index";

const meta: Meta<typeof UserEditButton> = {
  title: "molecules/Buttons/UserEditButton",
  component: UserEditButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      action: "clicked",
      description: "Function to call when the button is clicked",
    },
  },
};
export default meta;
type Story = StoryObj<typeof UserEditButton>;
export const Default: Story = {
  args: {
    onClick: () => console.log("User Edit button clicked"),
  },
  render: (args) => <UserEditButton {...args} />,
};
