import React from "react";

const HistoryThead = () => {
  return (
    <thead className="sticky top-0 z-10 bg-slate-300">
      <tr>
        <th className="py-3 max-w-[2rem] font-light text-sm text-center text-slate-700 border bg-slate-300">
          Reciept no.
        </th>
        <th className="py-3 max-w-[2rem] font-light text-sm text-center text-slate-700 border bg-slate-300">
          Payment date
        </th>
        <th className="py-3 max-w-[2rem] font-light text-sm text-center text-slate-700 border bg-slate-300">
          Payment amount
        </th>
        <th className="py-3 max-w-[2rem] font-light text-sm text-center text-slate-700 border bg-slate-300">
          Remaining Balance
        </th>
      </tr>
    </thead>
  );
};

export default HistoryThead;
