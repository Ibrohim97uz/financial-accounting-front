import AsyncSelectComponent from "react-select/async";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "@/components/ui/error-message";
import { api } from "@/services/api/api";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function AsyncSelect({
  url,
  name,
  label,
  defaultValue,
  source,
}: Components.AsyncSelect) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    formState: { errors },
    setValue,
  } = useFormContext();

  async function promiseOptions() {
    const data = await api.get(url);

    const items = data.data.map((item: any) => ({
      label: item.name,
      value: item._id,
    }));
    items.push({
      label: t("Yangi qo'shish"),
      value: "add_new",
    });
    return items;
  }

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
        <AsyncSelectComponent
          className="text-charcoal w-full"
          cacheOptions
          defaultOptions
          defaultValue={defaultValue}
          onChange={(choices: any) => {
            if (choices.value === "add_new") {
              return navigate("/settings", { state: source });
            }
            setValue(name, choices?.value);
            return choices;
          }}
          loadOptions={promiseOptions}
          id={name}
        />
        <ErrorMessage
          message={errors && errors[name] && errors[name]?.message}
        />
      </div>
    </div>
  );
}

export default AsyncSelect;
