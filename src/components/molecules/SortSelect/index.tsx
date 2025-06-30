import { type Sort } from "@/types/components/sort";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/Select";

type SortSelectProps = {
  sorts: Sort[];
  onSortChange: (sort: Sort) => void;
  defaultSort?: Sort;
};

export function SortSelect({
  sorts,
  onSortChange,
  defaultSort,
}: SortSelectProps) {
  return (
    <Select
      defaultValue={defaultSort ? JSON.stringify(defaultSort) : undefined}
      onValueChange={(value) => {
        const selectedSort = JSON.parse(value) as Sort;
        onSortChange(selectedSort);
      }}
    >
      <SelectTrigger className="w-[180px] bg-white">
        <SelectValue placeholder="Select a sort option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort Options</SelectLabel>
          {sorts.map((sort, index) => (
            <SelectItem key={index} value={JSON.stringify(sort)}>
              {sort.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
