import LoadingPage from "@/app/components/LoadingPage";
import { Chart } from "@/app/components/chart";
import useGeneralAPIQuery from "@/app/hooks/useGeneralQuery";
import { useEffect, useState } from "react";
import { getMultipleColors } from "../_utils/get-random-color";
import { useTranslation } from "react-i18next";

function IncomeByCategory() {
  const { t } = useTranslation();
  const { data, isLoading } = useGeneralAPIQuery("/analytics/income", {
    staleTime: 0,
  });
  const [chartData, setChartData] = useState<Components.IChart>();

  useEffect(() => {
    if (data) {
      const labels: string[] = [];
      const labelItems: number[] = [];
      data.forEach((item: Components.IAnalytics) => {
        labels.push(item.name);
        labelItems.push(item.totalPrice);
      });
      setChartData({
        labels,
        datasets: [
          {
            data: labelItems,
            backgroundColor: getMultipleColors(labels.length),
          },
        ],
      });
    }
  }, [data]);
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="h-96 w-96">
      <h1 className="text-center mb-5">{t("Daromadlar")}</h1>
      <div>{chartData && <Chart data={chartData} />}</div>
    </div>
  );
}

export default IncomeByCategory;
