import Head from "@/app/components/SortableTable/Head";
import { useTranslation } from "react-i18next";

function TableHead({ handleOrderChange }: Expense.Table.ITableHead) {
  const { t } = useTranslation();

  const header: Components.Table.Head = [
    { label: "#", value: "sortedId" },
    { label: t("Narx"), value: "price" },
    { label: t("Kategoriya"), value: "category.name" },
    { label: t("Vaqt"), value: "date" },
    { label: t("Sharx"), value: "" },
    { label: t("Taxrirlash"), value: "" },
  ];
  return <Head handleClick={handleOrderChange} tableHead={header} />;
}

export default TableHead;
