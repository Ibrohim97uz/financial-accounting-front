import ErrorMessage from "@/components/ui/error-message";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, KeyRound } from "lucide-react";
import { memo, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

function Password() {
  const { t } = useTranslation();
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [visibility, setVisibility] = useState(false);
  const toggleVisibility = () => {
    setVisibility((p) => !p);
  };
  return (
    <div className="flex flex-col">
      <label
        className="text-silver font-normal mb-2 cursor-pointer"
        htmlFor="password"
      >
        {t("Parol:")}
      </label>
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <div
            className={cn(
              "inline-block w-[300px] font-light relative",
              "xxl:w-[200px]",
              "sm:!w-full"
            )}
          >
            <KeyRound
              className={cn(
                "absolute left-[15px] top-2/4 -translate-y-2/4 text-secondary h-5 w-5",
                errors.password && "text-red-500"
              )}
            />
            <Input
              className={cn(
                "px-[50px] py-[15px]",
                !!errors.password &&
                  "border-red-500 placeholder-red-500 text-red-500"
              )}
              placeholder={t("Parol kiriting")}
              type={visibility ? "text" : "password"}
              id="password"
              {...field}
            />
            {visibility ? (
              <EyeOff
                onClick={toggleVisibility}
                className={cn(
                  "absolute right-[15px] top-2/4 -translate-y-2/4 text-secondary h-5 w-5 cursor-pointer hover:text-teal select-none",
                  errors.password && "text-red-500"
                )}
              />
            ) : (
              <Eye
                onClick={toggleVisibility}
                className={cn(
                  "absolute right-[15px] top-2/4 -translate-y-2/4 text-secondary h-5 w-5 cursor-pointer hover:text-teal",
                  errors.password && "text-red-500"
                )}
              />
            )}
            <ErrorMessage error={errors?.password?.message} />
          </div>
        )}
      />
    </div>
  );
}

export default memo(Password);
