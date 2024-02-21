import _ from "lodash";
import { Dialog } from "@/components/ui/dialog";
import { Table } from "@/components/ui/table";
import { memo, useState } from "react";
import DeleteModal from "./delete-modal";
import EmptyWindow from "@/app/components/EmptyWindow";
import useSortableFilter from "@/app/components/SortableTable/useSortableFilter";
import EditModal from "./edit-modal";
import TableHead from "./head";
import TableBodyComponent from "./body";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import CreateModal from "./create-modal";
import { Plus } from "lucide-react";

function TableComponent({ data }: Income.IIncomeTable<Income.IIncomeCategory>) {
  const { t } = useTranslation();
  const defaultValue = { open: false, data: null, type: null };
  const [dialog, setDialog] =
    useState<Components.IDialog<Income.IIncomeCategory>>(defaultValue);

  const { handleOrderChange, orderBy } = useSortableFilter();

  return (
    <Dialog
      open={dialog.open}
      onOpenChange={(e) => {
        if (!e) {
          setDialog(defaultValue);
        }
      }}
    >
      <div className="flex justify-end items-center mr-5 mt-5 gap-2">
        <Button
          onClick={() =>
            setDialog({
              data: null,
              open: true,
              type: "create",
            })
          }
        >
          <Plus />
          {t("Yangi qo'shish")}
        </Button>
      </div>

      {data?.length ? (
        <Table className="w-full bg-charcoal rounded-lg text-center">
          <TableHead handleOrderChange={handleOrderChange} />

          <TableBodyComponent
            data={data}
            setDialog={setDialog}
            orderBy={orderBy}
          />
        </Table>
      ) : (
        <EmptyWindow
          title={t("Bo’sh oyna")}
          description={t(
            "Bu yerda daromadlar kategoriyasini ko'rishingiz mumkin"
          )}
        />
      )}
      {dialog.open && dialog.type === "create" && <CreateModal />}
      {dialog.open && dialog.type === "edit" && <EditModal />}
      {dialog.open && dialog.type === "delete" && <DeleteModal />}
    </Dialog>
  );
}
export default memo(TableComponent);
