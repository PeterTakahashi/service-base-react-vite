import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/Select";
import type { Meta, StoryObj } from "@storybook/react-vite";
const meta: Meta<typeof Select> = {
  title: "atomms/Select",
  component: Select,
  tags: ["autodocs"],
};
export default meta;

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

type Story = StoryObj<typeof Select>;
export const Default: Story = {
  render: () => <SelectDemo />,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: "A simple select component with a list of fruits.",
      },
    },
  },
};
