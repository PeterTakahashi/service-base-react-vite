import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserEditForm } from "./index";
import type { UserEditValues } from "./index";

const meta: Meta<typeof UserEditForm> = {
  title: "molecules/Forms/UserEditForm",
  component: UserEditForm,
  tags: ["autodocs"],
  argTypes: {
    onSubmit: { action: "submit" },
  },
};
export default meta;

type Story = StoryObj<typeof UserEditForm>;

export const Default: Story = {
  args: {
    defaultValues: {
      email: "user@example.com",
    } as UserEditValues,
  },
};
