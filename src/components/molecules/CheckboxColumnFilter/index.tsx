import { useState } from "react";
import { Button } from "@/components/atoms/Button";
import { DropdownFilter } from "@/components/molecules/DropdownFilter";
import { DropdownMenuCheckboxItem } from "@/components/atoms/DropdownMenu";

type Option = {
  label: string;
  value: string;
};
type CheckboxColumnFilterProps = {
  label?: string;
  options: Option[];
  selectedValues?: string[];
  onChange: (selectedValues: string[]) => void;
};

export function CheckboxColumnFilter({
  label,
  options,
  onChange,
  selectedValues = [],
}: CheckboxColumnFilterProps) {
  const [open, setOpen] = useState(false);
  const [localSelectedValues, setLocalSelectedValues] =
    useState<string[]>(selectedValues);

  const handleCheckboxChange = async (value: string) => {
    await setLocalSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const apply = () => {
    onChange(localSelectedValues);
    setOpen(false);
  };

  const reset = () => {
    setLocalSelectedValues([]);
    apply();
  };

  return (
    <DropdownFilter label={label} open={open} onOpenChange={setOpen}>
      {options.map((option) => (
        <div key={option.value}>
          <DropdownMenuCheckboxItem
            onSelect={(e) => e.preventDefault()}
            checked={localSelectedValues.includes(option.value)}
            onCheckedChange={() => handleCheckboxChange(option.value)}
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        </div>
      ))}
      <Button variant={"outline"} className="mt-4 w-full" onClick={reset}>
        Reset
      </Button>
      <Button className="w-full" onClick={apply}>
        Apply
      </Button>
    </DropdownFilter>
  );
}
