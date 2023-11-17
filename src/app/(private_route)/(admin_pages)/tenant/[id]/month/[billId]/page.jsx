"use client";

import MonthlyInfoBox from "./../../../../../../../components/MonthlyInfoBox";
import History from "./../../../../../../../components/History";

import { useEffect, useState } from "react";
import axios from "axios";

const BillPerTenant = ({ params }) => {
  const billId = params.billId;

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/api/tenants/bill/${billId}`);
        setData(res.data.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [billId]);

  const userName = data.user ? data.user.name : "";
  const stallNumber = data.user ? data.user.stallNumber : "";

  if (!data) {
    <h1 className="flex justify-center items-center text-center w-full h-[70vh]">
      No user found!
    </h1>;
  }

  if (loading) {
    return (
      <div className="bdy">
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {data ? (
        <MonthlyInfoBox
          name={userName}
          tenantNo={stallNumber}
          previousBill={data.previousBill}
          currentBill={data.currentBill}
          previousReading={data.previousReading}
          currentReading={data.currentReading}
          totalConsumption={data.totalConsumption}
          billingFrom={data.billingPeriodFrom}
          billingTo={data.billingPeriodTo}
          amountPaid={data.amountPaid}
          remainingBalance={data.remainingBalance}
          billId={billId}
        />
      ) : (
        <h1 className="flex justify-center items-center text-center w-full h-[70vh]">
          No user found!
        </h1>
      )}
      <History billId={billId} />
    </div>
  );
};

export default BillPerTenant;
