import { type Sort } from "@/types/components/sort";
import { SortSelect } from "@/components/molecules/SortSelect";

const sorts: Sort[] = [
  { sorted_by: "created_at", sorted_order: "desc", name: "Newest" },
  { sorted_by: "created_at", sorted_order: "asc", name: "Oldest" },
  { sorted_by: "amount", sorted_order: "desc", name: "Highest Amount" },
  { sorted_by: "amount", sorted_order: "asc", name: "Lowest Amount" },
];

export default {
  title: "Molecules/SortSelect",
  component: SortSelect,
};

export const Default = {
  args: {
    sorts,
    onSortChange: (sort: Sort) => {
      console.log("Selected sort:", sort);
    },
  },
};

export const WithInitialValue = {
  args: {
    sorts,
    onSortChange: (sort: Sort) => {
      console.log("Selected sort:", sort);
    },
    defaultSort: sorts[0],
  },
};
