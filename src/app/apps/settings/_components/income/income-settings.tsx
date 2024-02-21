import useGeneralAPIQuery from "@/app/hooks/useGeneralQuery";
import { memo } from "react";
import Table from "./table";

function ExpenseSettings() {
  const { data } = useGeneralAPIQuery(
    "/income/category",
    undefined,
    "income-category"
  );

  return <Table data={data} />;
}

export default memo(ExpenseSettings);
