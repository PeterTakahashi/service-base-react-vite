import React, { useMemo } from "react";
import moment from "moment-timezone";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/Select";

type TimezoneSelectProps = {
  value: string | undefined;
  setValue: (value: string) => void;
  className?: string;
  placeholder?: string;
  isLoading?: boolean;
};

function groupTimezones() {
  const allZones = moment.tz.names();
  const groups: Record<string, string[]> = {};
  allZones.forEach((tz) => {
    const [continent] = tz.split("/");
    if (!groups[continent]) groups[continent] = [];
    groups[continent].push(tz);
  });
  const order = [
    "Asia",
    "Europe",
    "America",
    "Australia",
    "Africa",
    "Pacific",
    "Atlantic",
    "Indian",
    "Arctic",
    "Antarctica",
  ];
  return order
    .filter((c) => groups[c])
    .map((continent) => ({
      label: continent,
      zones: groups[continent],
    }))
    .concat(
      Object.entries(groups)
        .filter(([c]) => !order.includes(c))
        .map(([label, zones]) => ({ label, zones }))
    );
}

export const TimezoneSelect: React.FC<TimezoneSelectProps> = ({
  value,
  setValue,
  className,
  placeholder = "Select a timezone",
  isLoading = false,
}) => {
  const grouped = useMemo(groupTimezones, []);
  return (
    <>
      {isLoading ? (
        <div className="w-[280px] h-10 bg-gray-200 rounded animate-pulse" />
      ) : (
        <div className="bg-white">
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger className={className ?? "w-[280px]"}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {grouped.map((group) => (
                <SelectGroup key={group.label}>
                  <SelectLabel>{group.label}</SelectLabel>
                  {group.zones.map((tz) => (
                    <SelectItem key={tz} value={tz}>
                      {tz}
                    </SelectItem>
                  ))}
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </>
  );
};
