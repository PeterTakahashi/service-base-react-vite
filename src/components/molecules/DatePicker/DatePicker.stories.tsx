import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DatePicker } from "./index";

const meta: Meta<typeof DatePicker> = {
  title: "molecules/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DatePicker>;

const DatePickerStory = (args: React.ComponentProps<typeof DatePicker>) => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return <DatePicker {...args} date={date} setDate={setDate} />;
};

export const Default: Story = {
  render: (args) => <DatePickerStory {...args} />,
  args: {
    key: "date",
    label: "Date of birth",
  },
};
