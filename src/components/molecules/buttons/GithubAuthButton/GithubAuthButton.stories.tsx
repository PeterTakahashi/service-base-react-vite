import type { Meta, StoryObj } from "@storybook/react-vite";
import { GithubAuthButton } from ".";

const meta: Meta<typeof GithubAuthButton> = {
  title: "molecules/Buttons/GithubAuthButton",
  component: GithubAuthButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      action: "clicked",
      description: "Function to call when the button is clicked",
    },
  },
};
export default meta;
type Story = StoryObj<typeof GithubAuthButton>;
export const Default: Story = {
  args: {
    onClick: () => console.log("Github Auth button clicked"),
  },
  render: (args) => <GithubAuthButton {...args} />,
};
