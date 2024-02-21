import useGeneralAPIQuery from "@/app/hooks/useGeneralQuery";
import { memo } from "react";
import Table from "./table";

function ExpenseSettings() {
  const { data } = useGeneralAPIQuery(
    "/expense/category",
    undefined,
    "expense-category"
  );

  return <Table data={data} />;
}

export default memo(ExpenseSettings);
