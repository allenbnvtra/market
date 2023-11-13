import Image from "next/image";
import React from "react";

const DashboardBox = ({ imageIcon, title, amount }) => {
  return (
    <div className="flex border bg-white h-[8rem] max-h[8rem] w-[18.5rem] max-w-[40rem] px-8 py-5 items-center gap-9 rounded-3xl shadow-inner md:w-[22rem] lg:w-[30rem] xl:w-[40rem]">
      <Image src={imageIcon} alt="" height={60} width={60} />
      <div className="gap-3 flex flex-col w-[15rem]">
        <div className="text-sm">{title}</div>
        <div className="border-b-2 border-b-slate-300"></div>
        <div className="text-xl font-bold">{amount}</div>
      </div>
    </div>
  );
};

export default DashboardBox;
