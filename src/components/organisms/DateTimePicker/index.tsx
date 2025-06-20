import React from "react";
import {
  useController,
  useFormContext,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { DateTimePicker as MoleculeDateTimePicker } from "@/components/molecules/DateTimePicker";
import { toIsoString } from "@/lib/utils/toIsoString";
import { getTimezone } from "@/lib/utils/getTimezone";
// ――――――――――――――――――――――――――― Types ――――――――――――――――――――――――――――

/**
 * **Generics‑friendly** props so that the component plays nicely with any
 * `react-hook-form` value shape.
 */
export type RHFDateTimePickerProps<T extends FieldValues> = {
  /**
   * **The form field that will store the combined ISO‑8601 string** produced
   * from the user’s selections.  This is usually the same key you previously
   * used for the simple `DatePicker` (e.g. `"expires_at"`).
   */
  name: Path<T>;

  /** Optional presentation props forwarded to the underlying molecule */
  dateLabel?: string | React.ReactNode;
  timeLabel?: string | React.ReactNode;
  className?: string;
  isLoading?: boolean;
  timezone?: string | undefined;
};

// ――――――――――――――――――――――――――― Helpers ――――――――――――――――――――――――――――

/** Format to `HH:mm` in 24h */
const formatTime = (d: Date | undefined) =>
  d
    ? `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`
    : "";

// ――――――――――――――――――――――――― Component ――――――――――――――――――――――――――

export const DateTimePicker = <T extends FieldValues>(
  props: RHFDateTimePickerProps<T>
) => {
  const {
    name,
    dateLabel,
    timeLabel,
    className,
    timezone = getTimezone(),
    isLoading,
  } = props;

  // Obtain RHF helpers for the single ISO string field
  const { control } = useFormContext<T>();
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { error },
  } = useController({ name, control });

  // Derive local pieces from the stored ISO string
  const initialDate = React.useMemo(
    () => (value ? new Date(value as string) : undefined),
    [value]
  );
  const [date, setDate] = React.useState<Date | undefined>(initialDate);
  const [time, setTime] = React.useState<string | undefined>(
    initialDate ? formatTime(initialDate) : "00:00"
  );

  // Anytime the local pieces change, recompute the ISO string that RHF will store
  React.useEffect(() => {
    const iso = toIsoString(date, time, timezone);
    onChange(iso);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, time, timezone]);

  return (
    <MoleculeDateTimePicker
      /* Required IDs so the molecule generates unique htmlFor attributes */
      dateId={`${name}-date`}
      timeId={`${name}-time`}
      /* Current values */
      date={date}
      setDate={setDate}
      time={time}
      setTime={setTime}
      /* Presentation */
      dateLabel={dateLabel}
      timeLabel={timeLabel}
      errorMessage={error?.message}
      className={className}
      isLoading={isLoading}
      /* Forward ref / blur so RHF registers input interaction */
      inputRef={ref}
      onBlur={onBlur}
    />
  );
};
