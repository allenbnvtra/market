import Link from "next/link";
import React from "react";

const MonthlyTbody = () => {
  return (
    <tbody className="overflow-y-auto h-[2rem] max-h-[2rem]">
      <tr className="border border-slate-300 hover:bg-gray-200">
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3">
          Jan. 2022- Feb 2022
        </td>
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3">
          1000
        </td>
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3">
          3000
        </td>
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3 text-blue-700 capitalize">
          <Link href="/tenant/65521dc1a508c5e42beb4d38/month/0193i209484342984">
            view details &gt;
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default MonthlyTbody;
