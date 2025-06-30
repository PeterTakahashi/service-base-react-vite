import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserApiKeyForm } from "./index";

const meta: Meta<typeof UserApiKeyForm> = {
  title: "molecules/Forms/UserApiKeyForm",
  component: UserApiKeyForm,
  tags: ["autodocs"],
  argTypes: {
    onSubmit: { action: "submit" },
  },
};
export default meta;

type Story = StoryObj<typeof UserApiKeyForm>;

export const Default: Story = {
  args: {
    onSubmit: (data) => console.log(data),
    isMutating: false,
    isLoading: false,
  },
};

export const WithLoading: Story = {
  args: {
    onSubmit: (data) => console.log(data),
    isMutating: true,
    isLoading: true,
    mutationType: "create",
  },
};
