import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./index";

const meta: Meta<typeof Header> = {
  title: "UI/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    onEditProfile: { action: "onEditProfile" },
    onLogout: { action: "onLogout" },
  },
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "User Dashboard",
  },
};

export const WithError: Story = {
  args: {
    title: "User Dashboard",
  },
};
