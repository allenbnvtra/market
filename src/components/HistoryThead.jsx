import React from "react";

const HistoryThead = () => {
  return (
    <thead>
      <tr>
        <th className="px-1 py-2 max-w-[2rem] font-light text-sm text-center sticky top-0 bg-slate-700 text-white sm:py-3 sm:font-medium lg:text-base">
          Billing period
        </th>
        <th className="px-1 py-2 max-w-[2rem] font-light text-sm text-center sticky top-0 bg-slate-700 text-white sm:py-3 sm:font-medium lg:text-base">
          Status
        </th>
        <th className="px-1 py-2 max-w-[2rem] font-light text-sm text-center sticky top-0 bg-slate-700 text-white sm:py-3 sm:font-medium lg:text-base">
          Action
        </th>
      </tr>
    </thead>
  );
};

export default HistoryThead;
