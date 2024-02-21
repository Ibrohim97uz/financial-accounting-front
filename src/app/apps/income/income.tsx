import useGeneralAPIQuery from "@/app/hooks/useGeneralQuery";
import { memo } from "react";
import Table from "./table";
import withMainLayout from "@/app/layout/HOC/main-layout/main-layout";

function Income() {
  const { data } = useGeneralAPIQuery("/income", undefined, "income");

  return <Table data={data} />;
}

export default memo(withMainLayout(Income));
