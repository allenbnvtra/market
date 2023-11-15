import React from "react";

const MonthlyThead = () => {
  return (
    <thead className="sticky top-0 z-10 bg-slate-300">
      <tr>
        <th className="py-3 max-w-[2rem] font-light text-sm text-center text-slate-700 border bg-slate-300">
          Billing date
        </th>
        <th className="py-3 max-w-[2rem] font-light text-sm text-center text-slate-700 border bg-slate-300">
          Total bill amount
        </th>
        <th className="py-3 max-w-[2rem] font-light text-sm text-center text-slate-700 border bg-slate-300">
          Remaining Balance
        </th>
        <th className="py-3 max-w-[2rem] font-light text-sm text-center text-slate-700 border bg-slate-300">
          Action
        </th>
      </tr>
    </thead>
  );
};

export default MonthlyThead;
