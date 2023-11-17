"use client";

import PaymentModal from "./PaymentModal";
import { useState } from "react";

const MonthlyInfoBox = ({
  name,
  tenantNo,
  previousBill,
  currentBill,
  previousReading,
  currentReading,
  totalConsumption,
  billingFrom,
  billingTo,
  amountPaid,
  remainingBalance,
  billId,
}) => {
  const isPaid = remainingBalance === 0;

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Function to handle form submission

  return (
    <div className="flex flex-col w-full gap-2 px-3 py-3 bg-slate-100 border border-slate-300 rounded-md shadow-md md:w-[100%] md:px-8 md:py-8 lg:text-base lg:w-[85%] lg:px-40 lg:gap-6">
      <div className="flex flex-col gap-3 text-sm justify-between md:flex-row lg:text-base">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="flex gap-2 text-lg font-semibold">Tenant Info:</h1>
            <p className="flex flex-row gap-2">
              {name}, {tenantNo}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="flex gap-2 text-lg font-semibold">
              Monthly bill amount:
            </h1>
            <p className="flex flex-row gap-2">
              Previous:<span>₱ {previousBill}</span>
            </p>
            <p className="flex flex-row gap-2">
              Current:<span>₱ {currentBill}</span>
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="flex gap-2 text-lg font-semibold">Meter Reading:</h1>
            <p className="flex flex-row gap-2">
              Previous(KwH):<span>{previousReading}</span>
            </p>
            <p className="flex flex-row gap-2">
              Current(KwH):<span>{currentReading}</span>
            </p>
            <p className="flex flex-row gap-2">
              Total Consumption(KwH):<span>{totalConsumption}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="flex gap-2 text-lg font-semibold">
              Billing period:
            </h1>
            <p className="flex flex-row gap-2">
              {billingFrom} - {billingTo}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="flex gap-2 text-lg font-semibold">Balance:</h1>
            <p className="flex flex-row gap-2">
              Amount paid:<span>₱ {amountPaid}</span>
            </p>
            <p className="flex flex-row gap-2">
              Remaining balance:<span>₱ {remainingBalance}</span>
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="flex gap-2 text-lg font-semibold">Status:</h1>
            {isPaid ? (
              <p className="border w-20 flex justify-center rounded-md bg-green-300">
                Paid
              </p>
            ) : (
              <p className="border w-20 flex justify-center rounded-md bg-red-300">
                Unpaid
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <button
          onClick={openModal}
          className="bg-green-500 px-4 py-2 text-white rounded-md hover:bg-green-600"
        >
          Make a payment
        </button>
        <PaymentModal
          showModal={showModal}
          onClose={closeModal}
          billId={billId}
        />
      </div>
    </div>
  );
};

export default MonthlyInfoBox;
