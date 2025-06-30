import { DateRangeColumnFilter } from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof DateRangeColumnFilter> = {
  title: "Molecules/ColumnFilters/DateRangeColumnFilter",
  component: DateRangeColumnFilter,
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    startDate: "",
    endDate: "",
    onChange: (startDate: string, endDate: string) =>
      console.log("onChange", startDate, endDate),
  },
};
