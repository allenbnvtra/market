"use client";
import { useEffect, useState } from "react";
import MonthlyThead from "./MonthlyThead";
import MonthlyTbody from "./MonthlyTbody";
import NewBillingModal from "./NewBilling";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MonthlyTable = ({ myparam }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  const tenantId = myparam;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = async () => {
    setIsModalOpen(false);
    await fetchData();
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/tenants/${tenantId}/bills`);
      setDatas(res.data.data);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className=" w-full flex justify-center justify-items-center mt-3s">
        <div className="w-[100%] max-h-[30rem] lg:w-[85%]">
          <Skeleton height={80} className="mb-1 z-0" count={1} />
          <Skeleton height={50} className="z-0" count={7} />
        </div>
      </div>
    );
  }

  if (datas.length === 0) {
    return (
      <div className="w-full lg:w-[85%] mb-16 ">
        <NewBillingModal
          tenantId={myparam}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
        <div className="flex gap-10 justify-between items-center mb-2">
          <h1 className="font-extrabold text-2xl">Billing months</h1>
          <button onClick={openModal}>
            <p className="border bg-green-600 text-white font-semibold px-16 py-2 rounded-md cursor-pointer">
              Add new bill
            </p>
          </button>
        </div>
        <div className="max-h-[25rem] flex justify-center items-center h-full overflow-auto">
          <h1>No data found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-[85%] mb-16 ">
      <NewBillingModal
        tenantId={myparam}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      <div className="flex gap-10 justify-between items-center mb-2">
        <h1 className="font-extrabold text-2xl">Billing months</h1>
        <button onClick={openModal}>
          <p className="border bg-green-600 text-white font-semibold px-16 py-2 rounded-md cursor-pointer">
            Add new bill
          </p>
        </button>
      </div>
      <div className="max-h-[25rem] overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <MonthlyThead />
          {datas.map((data) => (
            <MonthlyTbody
              key={data._id}
              dateFrom={data.billingPeriodFrom}
              dateTo={data.billingPeriodTo}
              totalBillAmount={data.currentBill}
              remainingBalance={data.remainingBalance}
              href={`month/${data._id}`}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default MonthlyTable;
