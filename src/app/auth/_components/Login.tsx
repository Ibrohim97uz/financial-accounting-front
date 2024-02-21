import ErrorMessage from "@/components/ui/error-message";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { UserRound } from "lucide-react";
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col">
      <label
        className="text-silver font-normal mb-2 cursor-pointer"
        htmlFor="login"
      >
        {t("Login:")}
      </label>
      <Controller
        control={control}
        name="login"
        render={({ field }) => (
          <div
            className={cn(
              "inline-block w-[300px] font-light relative",
              "xxl:w-[200px]",
              "sm:!w-full"
            )}
          >
            <UserRound
              className={cn(
                "absolute left-[15px] top-2/4 -translate-y-2/4 text-secondary h-5 w-5",
                !!errors.login && "text-red-500"
              )}
            />
            <Input
              className={cn(
                "px-[50px] py-[15px]",
                !!errors.login &&
                  "border-red-500 placeholder-red-500 text-red-500"
              )}
              placeholder={t("Login")}
              id="login"
              {...field}
            />
            <ErrorMessage error={errors?.login?.message} />
          </div>
        )}
      />
    </div>
  );
}

export default memo(Login);
