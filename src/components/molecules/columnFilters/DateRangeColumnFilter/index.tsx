import { useState, useEffect } from "react";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { DropdownFilter } from "@/components/molecules/columnFilters/DropdownFilter";

type DateRangeColumnFilterProps = {
  label?: string;
  startDate: string;
  endDate: string;
  onChange: (startDate: string, endDate: string) => void;
};

export function DateRangeColumnFilter({
  label,
  startDate,
  endDate,
  onChange,
}: DateRangeColumnFilterProps) {
  const [open, setOpen] = useState(false);
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
    <DropdownFilter label={label} open={open} onOpenChange={setOpen}>
      <div className="text-sm pt-3">Start date</div>
      <Input
        type="date"
        value={localStartDate}
        onChange={(e) => setLocalStartDate(e.target.value)}
      />
      <div className="text-sm pt-3">End date</div>
      <Input
        type="date"
        value={localEndDate}
        onChange={(e) => setLocalEndDate(e.target.value)}
      />
      {error && <div className="text-sm text-red-600 mt-2">{error}</div>}
      <Button variant={"outline"} className="w-full mt-3" onClick={reset}>
        Reset
      </Button>
      <Button className="w-full" onClick={apply}>
        Apply
      </Button>
    </DropdownFilter>
  );
}
