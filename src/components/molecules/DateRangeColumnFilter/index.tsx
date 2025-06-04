import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { DropdownFilter } from "@/components/molecules/DropdownFilter";

type DateRangeColumnFilterProps = {
  startDate: string;
  endDate: string;
  onChange: (startDate: string, endDate: string) => void;
};

export function DateRangeColumnFilter({
  startDate,
  endDate,
  onChange,
}: DateRangeColumnFilterProps) {
  const [localStartDate, setLocalStartDate] = useState(startDate ?? "");
  const [localEndDate, setLocalEndDate] = useState(endDate ?? "");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLocalStartDate(startDate ?? "");
    setLocalEndDate(endDate ?? "");
  }, [startDate, endDate]);

  const apply = () => {
    if (!validStartDateAndEndDate()) {
      setError("Start date must be before End date");
      return;
    } else {
      setError(null);
    }
    onChange(localStartDate, localEndDate);
  };

  const validStartDateAndEndDate = () => {
    const startDateDate = new Date(localStartDate);
    const endDateDate = new Date(localEndDate);
    if (!isNaN(startDateDate.getTime()) && !isNaN(endDateDate.getTime())) {
      return startDateDate <= endDateDate;
    } else {
      return true;
    }
  };

  const reset = () => {
    setError(null);
    setLocalStartDate("");
    setLocalEndDate("");
    apply();
  };

  return (
    <DropdownFilter>
      <Label>Start date</Label>
      <Input
        type="date"
        value={localStartDate}
        onChange={(e) => setLocalStartDate(e.target.value)}
      />
      <Label>End date</Label>
      <Input
        type="date"
        value={localEndDate}
        onChange={(e) => setLocalEndDate(e.target.value)}
      />
      {error && <div className="text-sm text-red-600 mt-2">{error}</div>}
      <Button variant={"outline"} className="w-full" onClick={reset}>
        Reset
      </Button>
      <Button className="w-full" onClick={apply}>
        Apply
      </Button>
    </DropdownFilter>
  );
}
