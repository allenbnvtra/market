"use client";

import React from "react";
import HistoryThead from "./HistoryThead";
import HistoryTbody from "./HistoryTbody";
import PaymentSearch from "./PaymentSearch";
import axios from "axios";
import { useState, useEffect } from "react";

const History = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/payment`);
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  function formatTimestamp(timestamp) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  }

  return (
    <div className="w-full mt-6 lg:w-[85%] mb-16 ">
      <h1 className="mb-3 mt-5 font-extrabold text-2xl">Payment audit</h1>
      <div className="max-h-[25rem] overflow-auto">
        <PaymentSearch getSearchResult={setData} />
        <table className="w-full caption-bottom text-sm">
          <HistoryThead />
          {data.map((datas) => (
            <HistoryTbody
              key={datas._id}
              recieptNo={datas.recieptNo}
              paymentDate={formatTimestamp(datas.createdAt)}
              paymentAmount={datas.paymentAmount}
              remainingBalance={datas.balance}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default History;
