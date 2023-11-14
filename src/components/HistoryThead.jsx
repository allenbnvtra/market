import React from "react";

const HistoryThead = () => {
  return (
    <thead>
      <tr>
        <th className="py-3 max-w-[2rem] font-light text-sm text-center sticky text-slate-700 border border-slate-300 bg-slate-300">
          Billing no.
        </th>
        <th className="py-3 max-w-[2rem] font-light text-sm text-center sticky text-slate-700 border border-slate-300 bg-slate-300">
          Billing date
        </th>
        <th className="py-3 max-w-[2rem] font-light text-sm text-center sticky text-slate-700 border border-slate-300 bg-slate-300">
          Payment status
        </th>
        <th className="py-3 max-w-[2rem] font-light text-sm text-center sticky text-slate-700 border border-slate-300 bg-slate-300">
          Payment date
        </th>
        <th className="py-3 max-w-[2rem] font-light text-sm text-center sticky text-slate-700 border border-slate-300 bg-slate-300">
          Total amount
        </th>
        <th className="py-3 max-w-[2rem] font-light text-sm text-center sticky text-slate-700 border border-slate-300 bg-slate-300">
          Action
        </th>
      </tr>
    </thead>
  );
};

export default HistoryThead;
