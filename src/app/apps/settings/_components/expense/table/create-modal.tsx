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
import { Input } from "@/components/ui/input";
import ErrorMessage from "@/components/ui/error-message";

function CreateModal() {
  const { t } = useTranslation();
  const { mutateAsync } = useApiMutation(`/expense/category`, "post");

  const methods = useForm({
    resolver: yupResolver(expenseCategorySchema),
    defaultValues: {
      name: "",
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
      queryClient.invalidateQueries({ queryKey: ["expense-category"] });
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
              {t("Xarajat turini yaratish")}
            </h2>
          </header>
          <div className="mt-10 flex flex-wrap justify-between gap-4">
            <div className="flex flex-col">
              <label
                className=" font-medium mb-2 cursor-pointer"
                htmlFor="name"
              >
                {t("Nomi")}
              </label>

              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <div
                    className={cn(
                      "inline-block w-[300px] font-light relative",
                      "xxl:w-[200px]",
                      "sm:!w-full"
                    )}
                  >
                    <Input
                      className={cn(
                        "font-semibold text-charcoal",
                        errors.name &&
                          "border-red-500 placeholder-red-500 text-red-500"
                      )}
                      placeholder={t("Nomi")}
                      id="name"
                      {...field}
                    />
                    <ErrorMessage error={errors?.name?.message} />
                  </div>
                )}
              />
            </div>
          </div>

          <footer className="mt-auto ml-auto">
            <Button type="submit">{t("Saqlash")}</Button>
          </footer>
        </form>
      </DialogContent>
    </FormProvider>
  );
}

export default CreateModal;
