import withMainLayout from "@/app/layout/HOC/main-layout/main-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import IncomeSettings from "./_components/income";
import ExpenseSettings from "./_components/expense";
import { useLocation } from "react-router-dom";

function Settings() {
  const { state } = useLocation();
  const { t } = useTranslation();
  return (
    <Tabs
      defaultValue={state || "income"}
      className={cn("w-full mt-6", "md:mt-20")}
    >
      <TabsList
        className={cn(
          "grid w-full grid-cols-2 border border-silver h-max",
          "md:grid-cols-1"
        )}
      >
        <TabsTrigger className="active:bg-teal" value="income">
          {t("Tushum manbalari")}
        </TabsTrigger>
        <TabsTrigger value="expense">{t("Xarajat kategoriyalari")}</TabsTrigger>
      </TabsList>
      <TabsContent value="income">
        <IncomeSettings />
      </TabsContent>
      <TabsContent value="expense">
        <ExpenseSettings />
      </TabsContent>
    </Tabs>
  );
}

export default withMainLayout(Settings);
