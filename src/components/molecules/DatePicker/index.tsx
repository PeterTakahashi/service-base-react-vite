import React, { type FC } from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";

import { Button } from "@/components/atoms/Button";
import { Calendar } from "@/components/atoms/Calendar";
import { Label } from "@/components/atoms/Label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atoms/Popover";

type DatePickerProps = {
  id: string;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  className?: string;
  errorMessage?: string | undefined;
  label?: string | React.ReactNode;
  isLoading?: boolean;
};

export const DatePicker: FC<DatePickerProps> = ({
  className,
  date,
  setDate,
  errorMessage,
  label,
  id,
  isLoading = false,
}) => {
  const [open, setOpen] = React.useState(false);
  const hasError = Boolean(errorMessage);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {label && (
        <Label htmlFor={id} className={isLoading ? "opacity-50 px-1" : "px-1"}>
          {label}
        </Label>
      )}

      {isLoading ? (
        <div className="w-48 h-10 bg-gray-200 rounded animate-pulse" />
      ) : (
        <>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id={id}
                className={cn(
                  "w-48 justify-between font-normal",
                  !date && "text-gray-400 hover:text-gray-500"
                )}
              >
                {date ? date.toLocaleDateString() : "Select date"}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <div className="flex flex-col">
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setDate(date);
                    setOpen(false);
                  }}
                />
                <div className="flex justify-center mb-2 px-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 w-full"
                    onClick={() => {
                      setDate(undefined);
                      setOpen(false);
                    }}
                  >
                    Clear
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {hasError && <p className="text-sm text-red-600">{errorMessage}</p>}
        </>
      )}
    </div>
  );
};
