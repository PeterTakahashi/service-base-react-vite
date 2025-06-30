import { TextColumnFilter } from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof TextColumnFilter> = {
  title: "Molecules/ColumnFilters/TextColumnFilter",
  component: TextColumnFilter,
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    columnName: "name",
    value: "",
    onChange: (value: string) => console.log("onChange", value),
  },
};
