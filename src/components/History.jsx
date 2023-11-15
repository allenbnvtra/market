import React from "react";
import HistoryThead from "./HistoryThead";
import HistoryTbody from "./HistoryTbody";

const History = () => {
  return (
    <div className="w-full mt-6 lg:w-[85%] mb-16 ">
      <h1 className="mb-3 mt-5 font-extrabold text-2xl">Payment history</h1>
      <div className="max-h-[25rem] overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <HistoryThead />
          <HistoryTbody />
          <HistoryTbody />
          <HistoryTbody />
          <HistoryTbody />
          <HistoryTbody />
          <HistoryTbody />
          <HistoryTbody />
          <HistoryTbody />
          <HistoryTbody />
          <HistoryTbody />
          <HistoryTbody />
          <HistoryTbody />
        </table>
      </div>
    </div>
  );
};

export default History;
