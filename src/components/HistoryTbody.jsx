"use client";

import React from "react";

const HistoryTbody = ({
  recieptNo,
  paymentDate,
  paymentAmount,
  remainingBalance,
  key,
}) => {
  return (
    <tbody className="overflow-y-auto h-[2rem] max-h-[2rem]">
      <tr key={key} className="border border-slate-300 hover:bg-gray-200">
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3">
          {recieptNo}
        </td>
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3">
          {paymentDate}
        </td>
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3">
          {paymentAmount}
        </td>
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3">
          {remainingBalance}
        </td>
      </tr>
    </tbody>
  );
};

export default HistoryTbody;
