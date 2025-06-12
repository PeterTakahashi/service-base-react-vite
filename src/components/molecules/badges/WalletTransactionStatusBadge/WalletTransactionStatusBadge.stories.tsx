import { type WalletTransactionStatus } from "@/types/api/walletTransaction/walletTransaction";
import { WalletTransactionStatusBadge } from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof WalletTransactionStatusBadge> = {
  title: "Molecules/Badges/WalletTransactionStatusBadge",
  component: WalletTransactionStatusBadge,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: {
        type: "select",
        options: [
          "pending",
          "completed",
          "failed",
        ] as WalletTransactionStatus[],
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof WalletTransactionStatusBadge>;
export const Default: Story = {
  args: {
    status: "pending",
  },
};
export const Completed: Story = {
  args: {
    status: "completed",
  },
};
export const Failed: Story = {
  args: {
    status: "failed",
  },
};
