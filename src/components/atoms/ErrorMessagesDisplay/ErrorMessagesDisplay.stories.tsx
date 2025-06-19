import type { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorMessagesDisplay } from "./index";

const meta: Meta<typeof ErrorMessagesDisplay> = {
  title: "atoms/ErrorMessagesDisplay",
  component: ErrorMessagesDisplay,
  tags: ["autodocs"],
  argTypes: {
    errorMessages: {
      description: "Array of error messages to display",
    },
  },
};
export default meta;

type Story = StoryObj<typeof ErrorMessagesDisplay>;
export const Default: Story = {
  args: {
    errorMessages: [
      "This field is required.",
      "Invalid email address.",
      "Password must be at least 8 characters long.",
    ],
  },
};
