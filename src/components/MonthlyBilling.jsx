import React from "react";
import MonthlyInfoBox from "./MonthlyInfoBox";
import History from "./History";

const MonthlyBilling = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <MonthlyInfoBox />
      <History />
    </div>
  );
};

export default MonthlyBilling;
