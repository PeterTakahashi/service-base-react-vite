import type { Meta, StoryObj } from "@storybook/react";
import { UserApiKeyNewForm } from "./index";

const meta: Meta<typeof UserApiKeyNewForm> = {
  title: "molecules/Forms/UserApiKeyNewForm",
  component: UserApiKeyNewForm,
  tags: ["autodocs"],
  argTypes: {
    onSubmit: { action: "submit" },
  },
};
export default meta;

type Story = StoryObj<typeof UserApiKeyNewForm>;

export const Default: Story = {
  args: {
    onSubmit: (data) => console.log(data),
    isMutating: false,
    errorMessage: null,
  },
};
