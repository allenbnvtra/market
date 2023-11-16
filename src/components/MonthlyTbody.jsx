import Link from "next/link";
import React from "react";

const MonthlyTbody = ({
  dateFrom,
  dateTo,
  totalBillAmount,
  remainingBalance,
  key,
  href,
}) => {
  return (
    <tbody className="overflow-y-auto h-[2rem] max-h-[2rem]">
      <tr key={key} className="border border-slate-300 hover:bg-gray-200">
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3">
          {dateFrom} - {dateTo}
        </td>
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3">
          {totalBillAmount}
        </td>
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3">
          {remainingBalance}
        </td>
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3 text-blue-700 capitalize">
          <Link href={href}>view details &gt;</Link>
        </td>
      </tr>
    </tbody>
  );
};

export default MonthlyTbody;
