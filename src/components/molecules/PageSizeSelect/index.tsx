import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

type PageSizeSelectProps = {
  pageSize: number;
  onPageSizeChange: (value: number) => void;
};

export function PageSizeSelect({
  pageSize,
  onPageSizeChange,
}: PageSizeSelectProps) {
  return (
    <Select
      value={pageSize.toString()}
      onValueChange={(value) => {
        onPageSizeChange(Number(value));
      }}
    >
      <SelectTrigger className="w-[80px] bg-white">
        <SelectValue placeholder="Select page size" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Page Size</SelectLabel>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="25">25</SelectItem>
          <SelectItem value="50">50</SelectItem>
          <SelectItem value="100">100</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
