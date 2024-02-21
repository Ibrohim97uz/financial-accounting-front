import { Button } from "@/components/ui/button";
import { DialogContent } from "@/components/ui/dialog";
import { cn, handleCloseModal } from "@/lib/utils";
import useApiMutation from "@/app/hooks/useApiMutation";
import QueryHook from "@/app/hooks/queryHook";
import { queryClient } from "@/main";
import { useTranslation } from "react-i18next";

function DeleteModal() {
  const { t } = useTranslation();
  const { QueryParams } = QueryHook();
  const { id } = QueryParams;
  const { mutateAsync } = useApiMutation(`/expense/category/${id}`, "delete");

  function handleDelete() {
    mutateAsync(undefined).then(() => {
      handleCloseModal();
      queryClient.invalidateQueries({ queryKey: ["expense-category"] });
    });
  }

  return (
    <DialogContent className="min-w-[690px] h-[250px]  bg-white rounded-lg">
      <h2 className="text-center text-2xl font-semibold mt-11">
        {t("O'chirib yuborishni istaysizmi?")}
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button className={cn("w-1/3")} onClick={handleDelete}>
          {t("Ha")}
        </Button>
        <Button className={cn("w-1/3")} onClick={handleCloseModal}>
          {t("Yo'q")}
        </Button>
      </div>
    </DialogContent>
  );
}

export default DeleteModal;
