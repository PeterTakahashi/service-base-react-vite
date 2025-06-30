import React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/atoms/Button";
import { Calendar } from "@/components/atoms/Calendar";
import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atoms/Popover";

import { cn } from "@/lib/utils/cn";

type DateTimePickerProps = {
  dateId: string;
  timeId: string;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  time: string | undefined;
  setTime: (time: string | undefined) => void;
  className?: string;
  errorMessage?: string | undefined;
  dateLabel?: string | React.ReactNode;
  timeLabel?: string | React.ReactNode;
  isLoading?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};

export function DateTimePicker({
  dateId,
  timeId,
  date,
  setDate,
  time,
  setTime,
  className,
  errorMessage,
  dateLabel,
  timeLabel,
  isLoading = false,
  inputRef,
  onBlur,
}: DateTimePickerProps) {
  const [open, setOpen] = React.useState(false);
  const hasError = Boolean(errorMessage);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div className="flex flex-col md:flex-row md:gap-4 gap-2">
        <div className="flex flex-col gap-3">
          {dateLabel ? (
            <Label
              htmlFor={dateId}
              className={isLoading ? "opacity-50 px-1" : "px-1"}
            >
              {dateLabel}
            </Label>
          ) : (
            <div className="pt-0 md:pt-3" />
          )}
          {isLoading ? (
            <div className="w-48 h-10 bg-gray-200 rounded animate-pulse" />
          ) : (
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date-picker"
                  className={cn(
                    "w-48 justify-between font-normal",
                    hasError && "border-red-600",
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
              </PopoverContent>
            </Popover>
          )}
        </div>
        <div className="flex flex-col gap-3">
          {timeLabel ? (
            <Label
              htmlFor={timeId}
              className={isLoading ? "opacity-50 px-1" : "px-1"}
            >
              {timeLabel}
            </Label>
          ) : (
            <div className="pt-0 md:pt-3" />
          )}
          {isLoading ? (
            <div className="w-48 h-10 bg-gray-200 rounded animate-pulse" />
          ) : (
            <Input
              type="time"
              id={timeId}
              value={time}
              onChange={(e) => setTime(e.target.value)}
              ref={inputRef as React.Ref<HTMLInputElement>}
              onBlur={onBlur}
              hasError={hasError}
              className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
            />
          )}
        </div>
      </div>
      {hasError && <p className="text-sm text-red-600">{errorMessage}</p>}
    </div>
  );
}
