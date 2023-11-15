const MonthlyInfoBox = () => {
  return (
    <div className="flex flex-col w-full gap-2 px-3 py-3 bg-slate-100 border border-slate-300 rounded-md shadow-md md:w-[100%] md:px-8 md:py-8 lg:text-base lg:w-[85%] lg:px-40 lg:gap-6">
      <div className="flex flex-col gap-3 text-sm justify-between md:flex-row lg:text-base">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="flex gap-2 text-lg font-semibold">Tenant Info:</h1>
            <p className="flex flex-row gap-2">Allen Buenaventura, COC 102</p>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="flex gap-2 text-lg font-semibold">
              Monthly bill amount:
            </h1>
            <p className="flex flex-row gap-2">
              Previous:<span>₱ 1500</span>
            </p>
            <p className="flex flex-row gap-2">
              Current:<span>₱ 2000</span>
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="flex gap-2 text-lg font-semibold">Meter Reading:</h1>
            <p className="flex flex-row gap-2">
              Previous(KwH):<span>650</span>
            </p>
            <p className="flex flex-row gap-2">
              Current(KwH):<span>550</span>
            </p>
            <p className="flex flex-row gap-2">
              Total Consumption(KwH):<span>150</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="flex gap-2 text-lg font-semibold">
              Billing period:
            </h1>
            <p className="flex flex-row gap-2">
              January, 2023 - February, 2023
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="flex gap-2 text-lg font-semibold">Status:</h1>
            <p className="flex flex-row gap-2">Unpaid</p>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="flex gap-2 text-lg font-semibold">Balance:</h1>
            <p className="flex flex-row gap-2">
              Amount paid:<span>₱ 1500</span>
            </p>
            <p className="flex flex-row gap-2">
              Remaining balance:<span>₱ 500</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <button className="bg-slate-800 px-4 py-2 text-white rounded-md hover:bg-slate-900">
          Make a payment
        </button>
      </div>
    </div>
  );
};

export default MonthlyInfoBox;
