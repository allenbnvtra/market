"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const NewBillingModal = ({ isOpen, onClose, tenantId, onFormSubmit }) => {
  const [previousBill, setPreviousBill] = useState("");
  const [currentReading, setCurrentReading] = useState("");
  const [previousReading, setPreviousReading] = useState("");
  const [totalConsumption, setTotalConsumption] = useState("");
  const [currentBill, setCurrentBill] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [billingPeriodFrom, setBillingPeriodFrom] = useState("");
  const [billingPeriodTo, setBillingPeriodTo] = useState("");

  const [fromMonth, setFromMonth] = useState("");
  const [fromYear, setFromYear] = useState("");
  const [toMonth, setToMonth] = useState("");
  const [toYear, setToYear] = useState("");

  useEffect(() => {
    setBillingPeriodTo(toMonth + ", " + toYear);
  }, [toMonth, toYear]);

  useEffect(() => {
    setBillingPeriodFrom(fromMonth + ", " + fromYear);
  }, [fromMonth, fromYear]);

  useEffect(() => {
    setTotalConsumption(
      currentReading !== "" && previousReading !== ""
        ? currentReading - previousReading
        : ""
    );
  }, [previousReading, currentReading]);

  useEffect(() => {
    setCurrentBill(totalConsumption !== "" ? totalConsumption * 12 : "");
  }, [totalConsumption]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = {
        previousBill,
        currentReading,
        previousReading,
        billingPeriodFrom,
        billingPeriodTo,
        totalConsumption,
        currentBill,
        remainingBalance: currentBill,
      };

      await axios.post(`/api/tenants/${tenantId}/bills/add`, data);
      setLoading(false);
      console.log(data);

      // Reset form fields
      setBillingPeriodTo("");
      setBillingPeriodFrom("");
      setCurrentBill("");
      setCurrentReading("");
      setPreviousBill("");
      setPreviousReading("");
      setTotalConsumption("");
      onClose();
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const yearn = new Date().getFullYear() + 1;
  const years = Array.from({ length: 10 }, (_, index) => yearn - index);

  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } inset-0 flex items-center justify-center z-50`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 w-[30rem] rounded-md shadow-md z-10">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500">
            Close
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="prev-bill">
                Previous Bill
              </label>
              <input
                type="number"
                name="prev-bill"
                placeholder="Enter previous bill"
                onChange={(e) => setPreviousBill(e.target.value)}
                value={previousBill}
                required
                className="appearance-none block px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="current">
                Current reading
              </label>
              <input
                type="number"
                name="current"
                placeholder="Enter current reading"
                onChange={(e) => setCurrentReading(e.target.value)}
                value={currentReading}
                required
                className="appearance-none block px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
            </div>

            <div className="flex flex-col gap-1 justify-between">
              <div>
                <label className="text-sm" htmlFor="previous">
                  Previous Reading
                </label>
                <input
                  type="number"
                  name="previous"
                  placeholder="Enter previous reading"
                  onChange={(e) => setPreviousReading(e.target.value)}
                  value={previousReading}
                  required
                  className="appearance-none block px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
              </div>

              {/* DATE From */}
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-2">
                  <label className="text-sm" htmlFor="billpfrom">
                    Billing period from
                  </label>
                  <div className="flex gap-3">
                    <select
                      name="fromMonth"
                      onChange={(e) => setFromMonth(e.target.value)}
                      value={fromMonth}
                      className="appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                    >
                      <option value="" disabled>
                        Select Month
                      </option>
                      {months.map((month, index) => (
                        <option key={index} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                    <select
                      name="fromYear"
                      onChange={(e) => setFromYear(e.target.value)}
                      value={fromYear}
                      className="appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                    >
                      <option value="" disabled>
                        Select Year
                      </option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm" htmlFor="billpto">
                    Billing period to
                  </label>
                  <div className="flex gap-3">
                    <select
                      name="toMonth"
                      onChange={(e) => setToMonth(e.target.value)}
                      value={toMonth}
                      className="appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                    >
                      <option value="" disabled>
                        Select Month
                      </option>
                      {months.map((month, index) => (
                        <option key={index} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                    <select
                      name="toYear"
                      onChange={(e) => setToYear(e.target.value)}
                      value={toYear}
                      className="appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                    >
                      <option value="" disabled>
                        Select Year
                      </option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* DATE TO */}
              <div className="flex flex-col gap-1">
                <label className="text-sm" htmlFor="totalconsumption">
                  Total consumption (KwH)
                </label>
                <input
                  type="number"
                  name="totalconsumption"
                  placeholder=""
                  readOnly
                  value={totalConsumption}
                  className="appearance-none block px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm" htmlFor="currentBill">
                  Current Bill
                </label>
                <input
                  type="number"
                  name="currentBill"
                  placeholder=""
                  readOnly
                  value={currentBill}
                  className="appearance-none block px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
              </div>
            </div>
          </div>

          {error && (
            <p className="text-red-600 text-sm">Error while registering!</p>
          )}

          <div className="flex flex-col">
            <button
              type="submit"
              disabled={loading}
              className="bg-slate-900 w-full text-white py-3 rounded-md font-medium text-sm hover:bg-slate-800 disabled:bg-slate-800 disabled:cursor-not-allowed"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewBillingModal;
