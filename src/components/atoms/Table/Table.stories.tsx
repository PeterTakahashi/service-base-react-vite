import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Table> = {
  title: "atomms/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
      description: "Content to be inserted into the table",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Table>;
export const Default: Story = {
  args: {
    children: (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header 1</TableHead>
            <TableHead>Header 2</TableHead>
            <TableHead>Header 3</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
            <TableCell>Cell 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell 4</TableCell>
            <TableCell>Cell 5</TableCell>
            <TableCell>Cell 6</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
  },
};
