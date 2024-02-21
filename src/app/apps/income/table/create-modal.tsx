import { Button } from "@/components/ui/button";
import { DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import useApiMutation from "@/app/hooks/useApiMutation";
import { queryClient } from "@/main";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { InferType } from "yup";
import ErrorMessage from "@/components/ui/error-message";
import PriceMask from "@/app/components/PriceMask";
import AsyncSelect from "@/app/components/async-select";
import CalendarComponent from "@/app/components/Calendar/Calendar";
import { Textarea } from "@/components/ui/textarea";
import incomeSchema from "../schema";

function CreateModal() {
  const { t } = useTranslation();
  const { mutateAsync } = useApiMutation(`/income`, "post");

  const methods = useForm({
    resolver: yupResolver(incomeSchema),
    defaultValues: {
      category: "",
      comment: "",
      date: "",
      price: undefined,
    },
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data: InferType<typeof incomeSchema>) => {
    mutateAsync({
      ...data,
    }).then(() => {
      document.getElementById("closeDialog")?.click();
      queryClient.invalidateQueries({ queryKey: ["income"] });
    });
  };

  return (
    <FormProvider {...methods}>
      <DialogContent className="bg-charcoal rounded-lg text-white">
        <form
          className=" py-2 px-1 rounded-lg flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <header className="flex items-center gap-5">
            <h2 className="text-lg font-semibold">
              {t("Daromad turini yaratish")}
            </h2>
          </header>
          <div className="mt-10 flex flex-wrap justify-between w-full gap-4">
            <PriceMask
              className={cn(
                "font-semibold text-charcoal w-full",
                errors.price &&
                  "border-red-500 placeholder-red-500 text-red-500"
              )}
              label={t("Narx")}
              name="price"
            />
          </div>

          <div className="mt-10 flex flex-wrap justify-between gap-4 w-full">
            <AsyncSelect
              source="income"
              label={t("Manbaa")}
              url="/income/category"
              name="category"
            />
          </div>
          <ErrorMessage error={errors?.category?.message} />

          <div className="mt-10 flex flex-wrap justify-between gap-4">
            <CalendarComponent label={t("Sana")} name="date" />
          </div>

          <div className="mt-10 flex flex-wrap justify-between flex-col w-full">
            <label
              className="font-medium mb-2 cursor-pointer"
              htmlFor="comment"
            >
              {t("Sharx")}
            </label>

            <Controller
              control={control}
              name="comment"
              render={({ field }) => (
                <div
                  className={cn(
                    "inline-block w-full font-light relative",
                    "xxl:w-[200px]",
                    "sm:!w-full"
                  )}
                >
                  <Textarea
                    className={cn(
                      "font-semibold text-charcoal !w-full inline-block",
                      errors.comment &&
                        "border-red-500 placeholder-red-500 text-red-500"
                    )}
                    placeholder={t("Komment")}
                    id="comment"
                    {...field}
                  />
                  <ErrorMessage error={errors?.comment?.message} />
                </div>
              )}
            />
          </div>

          <footer className="mt-auto ml-auto">
            <Button onClick={() => console.log(errors)} type="submit">
              {t("Saqlash")}
            </Button>
          </footer>
        </form>
      </DialogContent>
    </FormProvider>
  );
}

export default CreateModal;
