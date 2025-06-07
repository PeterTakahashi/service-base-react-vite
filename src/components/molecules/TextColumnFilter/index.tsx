import { useState, useEffect } from "react";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { DropdownFilter } from "@/components/molecules/DropdownFilter";

type TextColumnFilterProps = {
  value: string;
  onChange: (value: string) => void;
  columnName: string;
};

export function TextColumnFilter({
  value,
  onChange,
  columnName,
}: TextColumnFilterProps) {
  const [local, setLocal] = useState(value ?? "");

  useEffect(() => {
    setLocal(value ?? "");
  }, [value]);

  const apply = () => {
    onChange(local);
  };

  return (
    <DropdownFilter>
      <Input
        value={local}
        placeholder={`Filter by ${columnName}`}
        onChange={(e) => setLocal(e.target.value)}
      />
      <Button className="w-full" onClick={apply}>
        Apply
      </Button>
    </DropdownFilter>
  );
}
