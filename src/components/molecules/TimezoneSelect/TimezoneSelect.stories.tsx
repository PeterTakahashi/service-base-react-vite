import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TimezoneSelect } from "./index";
import { getTimezone } from "@/lib/utils/getTimezone";

const meta: Meta<typeof TimezoneSelect> = {
  title: "molecules/TimezoneSelect",
  component: TimezoneSelect,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TimezoneSelect>;

const TimezoneSelectStory = (
  args: React.ComponentProps<typeof TimezoneSelect>
) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  return <TimezoneSelect {...args} value={value} setValue={setValue} />;
};

export const Default: Story = {
  render: (args) => <TimezoneSelectStory {...args} />,
  args: {},
};

const TimezoneSelectWithDefaultValueStory = (
  args: React.ComponentProps<typeof TimezoneSelect>
) => {
  const [value, setValue] = useState<string | undefined>(getTimezone());

  return <TimezoneSelect {...args} value={value} setValue={setValue} />;
};

export const WithDefaultValue: Story = {
  render: (args) => <TimezoneSelectWithDefaultValueStory {...args} />,
  args: {},
};

export const Loading: Story = {
  render: (args) => <TimezoneSelectStory {...args} />,
  args: {
    isLoading: true,
  },
};
