import useGeneralAPIQuery from "@/app/hooks/useGeneralQuery";
import { memo } from "react";
import Table from "./table";
import withMainLayout from "@/app/layout/HOC/main-layout/main-layout";

function Expense() {
  const { data } = useGeneralAPIQuery("/expense", undefined, "expense");

  return <Table data={data} />;
}

export default memo(withMainLayout(Expense));
