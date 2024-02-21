import ReactSelect from "react-select";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "@/components/ui/error-message";

function Select({
  name,
  options,
  className,
  placeholder,
  rightIcon,
  isDisabled,
}: Components.ISelect) {
  const {
    formState: { errors },
    setValue,
  } = useFormContext();

  return (
    <div
      className={cn(
        "inline-block w-[300px] font-light relative",
        "xxl:w-[200px]",
        "sm:!w-full",
        className
      )}
    >
      <ReactSelect
        id={name}
        isDisabled={isDisabled}
        placeholder={placeholder}
        options={options}
        onChange={(choices) => {
          setValue(name, choices?.value);
          return choices;
        }}
        components={{
          IndicatorsContainer: () => {
            return (
              <div className="absolute right-11 top-[45%]">{rightIcon}</div>
            );
          },
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            borderRadius: "calc(var(--radius) - 6px)",
            background: "#EDF0F5",
            borderColor: "EDF0F5",
            cursor: "pointer",
            fontWeight: 600,
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            fontWeight: 300,
          }),
        }}
      />
      <ErrorMessage error={errors && (errors[name]?.message as string)} />
    </div>
  );
}

export default Select;
