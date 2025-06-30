import type { Meta, StoryObj } from "@storybook/react-vite";
import { GoogleAuthButton } from "./index";

const meta: Meta<typeof GoogleAuthButton> = {
  title: "molecules/Buttons/GoogleAuthButton",
  component: GoogleAuthButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      action: "clicked",
      description: "Function to call when the button is clicked",
    },
  },
};
export default meta;
type Story = StoryObj<typeof GoogleAuthButton>;
export const Default: Story = {
  args: {
    onClick: () => console.log("Google Auth button clicked"),
  },
  render: (args) => <GoogleAuthButton {...args} />,
};
