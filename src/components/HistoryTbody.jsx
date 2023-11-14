import React from "react";

const HistoryTbody = () => {
  return (
    <tbody>
      <tr className="border border-slate-300">
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3">
          23958473982
        </td>
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3">
          Jan. 2022- Feb 2022
        </td>
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3">
          Unpaid
        </td>
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3"></td>
        <td className="py-2 max-w-[2rem] font-light text-sm text-center sticky sm:py-3">
          3000
        </td>
        <td className="py-2 max-w-[2rem] font-light text-sm text-blue-700 text-center sticky sm:py-3 cursor-pointer">
          view details &gt;
        </td>
      </tr>
    </tbody>
  );
};

export default HistoryTbody;
