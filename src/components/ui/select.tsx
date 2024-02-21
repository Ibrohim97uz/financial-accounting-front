import ReactSelect from "react-select";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "@/components/ui/error-message";

function Select({
  name,
  options,
  className,
  icon,
  placeholder,
  rightIcon,
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
        placeholder={placeholder}
        options={options}
        onChange={(choices) => {
          setValue(name, choices?.value);
          return choices;
        }}
        components={{
          IndicatorsContainer: () => {
            if (rightIcon) {
              return (
                <div className="absolute right-11 top-[45%]">{rightIcon}</div>
              );
            }
            return <div className="absolute left-0 top-[45%]">{icon}</div>;
          },
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        styles={{
          valueContainer: (styles) => ({
            ...styles,
            paddingLeft: icon ? "40px" : 0,
          }),
          control: (baseStyles) => ({
            ...baseStyles,
            borderRadius: "calc(var(--radius) - 6px)",
            border: 0,
          }),
        }}
      />
      <ErrorMessage error={errors && (errors[name]?.message as string)} />
    </div>
  );
}

export default Select;
