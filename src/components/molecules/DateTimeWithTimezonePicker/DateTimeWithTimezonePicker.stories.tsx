import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DateTimeWithTimezonePicker } from "./index";

const meta: Meta<typeof DateTimeWithTimezonePicker> = {
  title: "molecules/DateTimeWithTimezonePicker",
  component: DateTimeWithTimezonePicker,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DateTimeWithTimezonePicker>;

const DateTimeWithTimezonePickerStory = (
  args: React.ComponentProps<typeof DateTimeWithTimezonePicker>
) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>("12:00:00");

  return (
    <DateTimeWithTimezonePicker
      {...args}
      date={date}
      setDate={setDate}
      time={time}
      setTime={setTime}
    />
  );
};

export const Default: Story = {
  render: (args) => <DateTimeWithTimezonePickerStory {...args} />,
  args: {
    dateId: "date",
    timeId: "time",
    dateLabel: "Date",
    timeLabel: "Time",
    timezoneLabel: "Timezone",
  },
};

export const Loading: Story = {
  render: (args) => <DateTimeWithTimezonePickerStory {...args} />,
  args: {
    dateId: "date",
    timeId: "time",
    dateLabel: "Date",
    timeLabel: "Time",
    timezoneLabel: "Timezone",
    isLoading: true,
  },
};

export const WithError: Story = {
  render: (args) => <DateTimeWithTimezonePickerStory {...args} />,
  args: {
    dateId: "date",
    timeId: "time",
    dateLabel: "Date",
    timeLabel: "Time",
    timezoneLabel: "Timezone",
    errorMessage: "Please enter a valid date and time",
  },
};
