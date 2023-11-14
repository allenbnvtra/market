import React from "react";
import HistoryThead from "./HistoryThead";
import HistoryTbody from "./HistoryTbody";

const History = () => {
  return (
    <div className="w-full mt-6 lg:w-[85%]">
      <h1 className="mb-2 font-extrabold text-2xl">
        Bills and payment history
      </h1>
      <div>
        <table className="w-full caption-bottom text-sm">
          <HistoryThead />
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
