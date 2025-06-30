import {
  Controller,
  useFormContext,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { DatePicker as MoleculeDatePicker } from "@/components/molecules/DatePicker";

type DatePickerProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  isLoading?: boolean;
  className?: string;
};

export const DatePicker = <T extends FieldValues>({
  name,
  label,
  isLoading,
  className,
}: DatePickerProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <MoleculeDatePicker
          id={name}
          label={label}
          date={field.value}
          setDate={field.onChange}
          errorMessage={fieldState.error?.message}
          isLoading={isLoading}
          className={className}
        />
      )}
    />
  );
};
