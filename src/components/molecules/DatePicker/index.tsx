import React, { type FC } from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/atoms/Button";
import { Calendar } from "@/components/atoms/Calendar";
import { Label } from "@/components/atoms/Label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atoms/Popover";

type DatePickerProps = {
  key: string;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  className?: string;
  label?: string;
};

export const DatePicker: FC<DatePickerProps> = ({
  className,
  date,
  setDate,
  label,
  key,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {label && (
        <Label htmlFor={key} className="px-1">
          {label}
        </Label>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id={key}
            className="w-48 justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
