import { Chart } from "@/app/components/chart";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function General({ data }: Components.GeneralAnalytics) {
  const { t } = useTranslation();

  const [chartData, setChartData] = useState<Components.IChart>();

  useEffect(() => {
    if (data && data.totalExpenses && data.totalIncomes) {
      setChartData({
        labels: [t("Umumiy xarajatlar"), t("Umumiy daromadlar")],
        datasets: [
          {
            data: [data.totalExpenses, data.totalIncomes],
            backgroundColor: ["red", "green"],
          },
        ],
      });
    }
  }, [data]);

  return (
    <div className="h-96 w-96">
      <h1 className="text-center mb-5">{t("Umumiy")}</h1>
      <div>{chartData && <Chart data={chartData} />}</div>
    </div>
  );
}

export default General;
