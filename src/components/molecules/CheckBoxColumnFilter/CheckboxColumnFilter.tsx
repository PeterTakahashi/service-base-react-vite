import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { DropdownFilter } from "@/components/molecules/DropdownFilter";
import { Checkbox } from "@/components/ui/Checkbox";

type Option = {
  label: string;
  value: string;
};
type CheckboxColumnFilterProps = {
  options: Option[];
  selectedValues?: string[];
  onChange: (selectedValues: string[]) => void;
};

export function CheckboxColumnFilter({
  options,
  onChange,
  selectedValues = [],
}: CheckboxColumnFilterProps) {
  const [localSelectedValues, setLocalSelectedValues] =
    useState<string[]>(selectedValues);

  const handleCheckboxChange = (value: string) => {
    setLocalSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const reset = () => {
    setLocalSelectedValues([]);
  };

  return (
    <DropdownFilter>
      {options.map((option) => (
        <div key={option.value}>
          <Label>
            <Checkbox
              checked={localSelectedValues.includes(option.value)}
              onCheckedChange={() => handleCheckboxChange(option.value)}
              className="mr-2"
            />
            {option.label}
          </Label>
        </div>
      ))}
      <Button variant={"outline"} className="mt-4 w-full" onClick={reset}>
        Reset
      </Button>
      <Button className="w-full" onClick={() => onChange(localSelectedValues)}>
        Apply
      </Button>
    </DropdownFilter>
  );
}
