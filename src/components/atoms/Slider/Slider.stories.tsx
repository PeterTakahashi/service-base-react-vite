import { cn } from "@/lib/utils/cn";
import { Slider } from "@/components/atoms/Slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  );
}

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof SliderDemo> = {
  title: "atoms/Slider",
  component: SliderDemo,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    max: { control: "number" },
    step: { control: "number" },
  },
};
export default meta;

type Story = StoryObj<typeof SliderDemo>;
export const Default: Story = {
  render: (args) => <SliderDemo {...args} />,
  args: {
    className: "w-80",
    defaultValue: [50],
    max: 100,
    step: 1,
  },
};
