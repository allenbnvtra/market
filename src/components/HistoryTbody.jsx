import React from "react";

const HistoryTbody = () => {
  return (
    <tbody className="overflow-y-auto h-[2rem] max-h-[2rem]">
      <tr className="border border-slate-300 hover:bg-gray-200">
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3">
          Jan. 2022- Feb 2022
        </td>
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3">
          Feb. 13, 2022
        </td>
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3">
          1000
        </td>
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3">
          3000
        </td>
      </tr>
    </tbody>
  );
};

export default HistoryTbody;
