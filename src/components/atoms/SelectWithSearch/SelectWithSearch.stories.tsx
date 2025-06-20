import type { Meta, StoryObj } from "@storybook/react-vite";
import { SelectWithSearch } from "./index";

const options = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const meta: Meta<typeof SelectWithSearch> = {
  title: "atoms/SelectWithSearch",
  component: SelectWithSearch,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    onChange: { action: "changed" },
  },
};
export default meta;

type Story = StoryObj<typeof SelectWithSearch>;
export const Default: Story = {
  render: (args) => <SelectWithSearch {...args} options={options} />,
  args: {
    className: "w-80",
    placeholder: "Select a framework",
    value: "",
    onChange: () => {},
  },
};
export const WithValue: Story = {
  render: (args) => <SelectWithSearch {...args} options={options} />,
  args: {
    className: "w-80",
    placeholder: "Select a framework",
    value: "next.js",
    onChange: () => {},
  },
};
