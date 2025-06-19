import type { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorDisplay } from "./index";

const meta: Meta<typeof ErrorDisplay> = {
  title: "atoms/ErrorDisplay",
  component: ErrorDisplay,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: { type: "number" },
      description: "HTTP-like status code representing the error",
    },
    errorMessage: {
      control: { type: "text" },
      description: "Error message displayed to the user",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ErrorDisplay>;

export const Default: Story = {
  args: {
    status: 404,
    errorMessage: "Page not found",
  },
};

export const CustomError: Story = {
  args: {
    status: 500,
    errorMessage: "Internal Server Error",
  },
};
