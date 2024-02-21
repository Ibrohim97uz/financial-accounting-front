import { Button } from "@/components/ui/button";
import { DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import useApiMutation from "@/app/hooks/useApiMutation";
import { queryClient } from "@/main";
import { useTranslation } from "react-i18next";
import expenseCategorySchema from "../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { InferType } from "yup";
import ErrorMessage from "@/components/ui/error-message";
import PriceMask from "@/app/components/PriceMask";
import AsyncSelect from "@/app/components/async-select";
import CalendarComponent from "@/app/components/Calendar/Calendar";
import { Textarea } from "@/components/ui/textarea";
import useGetDataFromCache from "@/app/hooks/useGetDataFromCache";
import QueryHook from "@/app/hooks/queryHook";

function EditModal() {
  const { t } = useTranslation();
  const { QueryParams } = QueryHook();
  const { id } = QueryParams;
  const { mutateAsync } = useApiMutation(`/expense/${id}`, "patch");
  const dataFromCache: Array<Expense.IExpense> = useGetDataFromCache([
    "expense",
  ]);
  const foundItem = dataFromCache?.find(
    (item: Expense.IExpense) => item._id === id
  );

  const methods = useForm({
    resolver: yupResolver(expenseCategorySchema),
    defaultValues: {
      category: foundItem?.category._id,
      comment: foundItem?.comment,
      date: foundItem?.date,
      price: foundItem?.price,
    },
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data: InferType<typeof expenseCategorySchema>) => {
    mutateAsync({
      ...data,
    }).then(() => {
      document.getElementById("closeDialog")?.click();
      queryClient.invalidateQueries({ queryKey: ["expense"] });
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
              {t("Xarajatni taxrirlash")}
            </h2>
          </header>
          <div className="mt-10 flex flex-wrap justify-between w-full gap-4">
            <PriceMask
              defaultValue={String(foundItem?.price)}
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
              label={t("Kategoriya")}
              url="/expense/category"
              name="category"
              source="expense"
              defaultValue={{
                value: foundItem?.category._id!,
                label: foundItem?.category.name!,
              }}
            />
          </div>

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

export default EditModal;
