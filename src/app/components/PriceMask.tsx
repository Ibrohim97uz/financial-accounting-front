import ErrorMessage from "@/components/ui/error-message";
import { Input } from "@/components/ui/input";
import { AddSpaceToThousands, RemoveSpaceFromNumber, cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
const MAX_SERVICE_PRICE = 100000000;

function PriceMask({
  label,
  name,
  defaultValue,
  className,
  labelClassName,
  disabled,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  className?: string;
  labelClassName?: string;
  disabled?: boolean;
}) {
  const [inputValue, setInputValue] = useState<string | null>(
    defaultValue ? (AddSpaceToThousands(defaultValue as any) as any) : null
  );
  useEffect(() => {
    setInputValue(defaultValue as any);
  }, [defaultValue]);

  const {
    setValue,
    formState: { errors },
    setError,
    clearErrors,
  } = useFormContext();

  const handleChange = (e: any) => {
    if (!e.target.value) {
      setValue(name, undefined);
      setInputValue(null);
    }
    const reversedToNumber = +RemoveSpaceFromNumber(e.target.value);
    const value = AddSpaceToThousands(reversedToNumber as any) as any;
    const result = +RemoveSpaceFromNumber(value);
    if (result > MAX_SERVICE_PRICE) {
      return setError(name, {
        message: `Narx ${MAX_SERVICE_PRICE} dan oshiq bo'lmasligi kerak`,
      });
    } else {
      clearErrors(name);
    }
    setInputValue(value);
    setValue(name, result);
  };
  return (
    <div className="flex flex-col w-full">
      <label className="font-medium mb-2 cursor-pointer" htmlFor={name}>
        {label}
      </label>

      <div
        className={cn(
          "inline-block w-full relative font-semibold placeholder:font-thin",
          "xxl:w-[200px]",
          "sm:!w-full"
        )}
      >
        <span
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 text-charcoal",
            labelClassName
          )}
        >
          UZS
        </span>

        <Input
          value={inputValue || ""}
          onChange={handleChange}
          placeholder={label}
          id="price"
          className={cn("pl-14 text-base", className)}
          disabled={disabled}
        />
        <ErrorMessage error={errors[name]?.message as any} />
      </div>
    </div>
  );
}

export default PriceMask;
