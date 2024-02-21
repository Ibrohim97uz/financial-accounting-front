import React from "react";
import { useTranslation } from "react-i18next";

function MonthlyInformation({ data }: any) {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-between max-w-56 mt-9">
        <h2>{t("Bu oydagi xarajatlar")}:</h2>
        <p>{data?.currentMonthOfExpense || 0}</p>
      </div>
      <div className="flex justify-between max-w-56">
        <h2>{t("Bu oydagi daromadlar")}:</h2>
        <p>{data?.currentMonthOfIncome || 0}</p>
      </div>
    </>
  );
}

export default MonthlyInformation;
