import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DateTimePicker } from "./index";

const meta: Meta<typeof DateTimePicker> = {
  title: "molecules/DateTimePicker",
  component: DateTimePicker,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DateTimePicker>;

const DateTimePickerStory = (
  args: React.ComponentProps<typeof DateTimePicker>
) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>("12:00:00");

  return (
    <DateTimePicker
      {...args}
      date={date}
      setDate={setDate}
      time={time}
      setTime={setTime}
    />
  );
};

export const Default: Story = {
  render: (args) => <DateTimePickerStory {...args} />,
  args: {
    dateId: "date",
    timeId: "time",
    dateLabel: "Date",
    timeLabel: "Time",
  },
};

export const Loading: Story = {
  render: (args) => <DateTimePickerStory {...args} />,
  args: {
    dateId: "date",
    timeId: "time",
    dateLabel: "Date",
    timeLabel: "Time",
    isLoading: true,
  },
};

export const WithError: Story = {
  render: (args) => <DateTimePickerStory {...args} />,
  args: {
    dateId: "date",
    timeId: "time",
    dateLabel: "Date",
    timeLabel: "Time",
    errorMessage: "Please enter a valid date and time",
  },
};
