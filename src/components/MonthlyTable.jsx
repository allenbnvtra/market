import React from "react";
import MonthlyThead from "./MonthlyThead";
import MonthlyTbody from "./MonthlyTbody";
import Link from "next/link";

const MonthlyTable = () => {
  return (
    <div className="w-full lg:w-[85%] mb-16 ">
      <div className="flex gap-10 justify-between items-center mb-2">
        <h1 className="font-extrabold text-2xl">Billing months</h1>
        <Link href="http://localhost:3000/tenant/65521dc1a508c5e42beb4d38/new">
          <p className="border bg-green-600 text-white font-semibold px-16 py-2 rounded-md cursor-pointer">
            Add new bill
          </p>
        </Link>
      </div>
      <div className="max-h-[25rem] overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <MonthlyThead />
          <MonthlyTbody />
          <MonthlyTbody />
          <MonthlyTbody />
          <MonthlyTbody />
          <MonthlyTbody />
          <MonthlyTbody />
          <MonthlyTbody />
          <MonthlyTbody />
          <MonthlyTbody />
          <MonthlyTbody />
          <MonthlyTbody />
          <MonthlyTbody />
        </table>
      </div>
    </div>
  );
};

export default MonthlyTable;
