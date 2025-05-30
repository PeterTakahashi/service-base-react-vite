import type { Meta, StoryObj } from "@storybook/react";
import { AuthLayout } from "./index";

const meta: Meta<typeof AuthLayout> = {
  title: "Layout/AuthLayout",
  component: AuthLayout,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Title displayed at the top of the page",
    },
    children: {
      control: false,
      description: "Content to be inserted into the layout (such as a form)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof AuthLayout>;

export const Default: Story = {
  args: {
    title: "Sign in to your account",
    children: (
      <div style={{ border: "1px solid #ccc", padding: "16px" }}>
        <p>This is a placeholder for the form or other content.</p>
        <p>You can replace this with your actual form component.</p>
      </div>
    ),
  },
};
