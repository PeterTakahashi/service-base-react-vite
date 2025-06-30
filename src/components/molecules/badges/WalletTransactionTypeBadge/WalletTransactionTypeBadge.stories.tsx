import { type WalletTransactionType } from "@/types/api/userWalletTransaction/userWalletTransaction";
import { WalletTransactionTypeBadge } from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof WalletTransactionTypeBadge> = {
  title: "Molecules/Badges/WalletTransactionTypeBadge",
  component: WalletTransactionTypeBadge,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["deposit", "spend"] as WalletTransactionType[],
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof WalletTransactionTypeBadge>;
export const Default: Story = {
  args: {
    type: "deposit",
  },
};
export const Spend: Story = {
  args: {
    type: "spend",
  },
};
