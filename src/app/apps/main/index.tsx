import withMainLayout from "@/app/layout/HOC/main-layout/main-layout";
import General from "./_components/general";
import ExpenseByCategory from "./_components/expense-by-category";
import IncomeByCategory from "./_components/income-by-category";
import useGeneralAPIQuery from "@/app/hooks/useGeneralQuery";
import { cn } from "@/lib/utils";
import MonthlyInformation from "./_components/monthly-information";

function Main() {
  const { data } = useGeneralAPIQuery("/analytics/general", { staleTime: 0 });
  return (
    <div className={cn("h-full overflow-auto", "md:mt-20")}>
      <div className="container">
        <MonthlyInformation data={data} />
        <div className="flex gap-3 flex-wrap justify-evenly gap-y-5 py-10 h-full">
          <General data={data} />
          <ExpenseByCategory />
          <IncomeByCategory />
        </div>
      </div>
    </div>
  );
}

export default withMainLayout(Main);
