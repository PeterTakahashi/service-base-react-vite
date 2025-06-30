import { CheckboxColumnFilter } from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof CheckboxColumnFilter> = {
  title: "Molecules/ColumnFilters/CheckboxColumnFilter",
  component: CheckboxColumnFilter,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "onChange" },
    label: {
      control: "text",
      description: "Label for the checkbox filter",
    },
    options: {
      control: "object",
      description:
        "Array of options for the checkbox filter, each with a label and value",
    },
  },
};
export default meta;
type Story = StoryObj<typeof CheckboxColumnFilter>;
export const Default: Story = {
  args: {
    label: "Filter by Status",
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
    selectedValues: [],
    onChange: (selectedValues) =>
      console.log("Selected Values:", selectedValues),
  },
};

export const WithSelectedValues: Story = {
  args: {
    label: "Filter by Category",
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
    selectedValues: ["option1", "option3"],
    onChange: (selectedValues) =>
      console.log("Selected Values:", selectedValues),
  },
};
