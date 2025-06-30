import { Label } from "@/components/atoms/Label";
import { Switch } from "@/components/atoms/Switch";

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}

import type { Meta, StoryObj } from "@storybook/react-vite";
const meta: Meta<typeof Switch> = {
  title: "atoms/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Switch>;
export const Default: Story = {
  render: () => <SwitchDemo />,
  args: {},
};
