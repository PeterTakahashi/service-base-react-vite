import { CheckboxColumnFilter } from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CheckboxColumnFilter> = {
  title: "Molecules/CheckboxColumnFilter",
  component: CheckboxColumnFilter,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "onChange" },
  },
};
export default meta;
type Story = StoryObj<typeof CheckboxColumnFilter>;
export const Default: Story = {
  args: {
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
