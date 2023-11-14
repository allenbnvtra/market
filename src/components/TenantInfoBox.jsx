const TenantInfoBox = () => {
  return (
    <div className="flex flex-col w-full gap-2 px-3 py-3 bg-slate-100 border border-slate-300 rounded-md shadow-md md:w-[100%] md:px-8 md:py-8 lg:text-base lg:w-[85%] lg:px-16 lg:gap-6">
      <h1 className="font-bold text-lg">Bill for the month of:</h1>
      <div className="flex flex-col gap-3 text-sm justify-between md:flex-row lg:text-base">
        <div className="flex flex-col gap-3">
          <h1 className="flex gap-2 font-semibold">
            Name: <span className="font-normal">Testing</span>
          </h1>

          <h1 className="flex gap-2 font-semibold">
            Stall Number:
            <span className="font-norm font-normal">Stall Number</span>
          </h1>

          <h1 className="flex gap-2 font-semibold">
            Previous balance:
            <span className="font-norm font-normal">Previous balance</span>
          </h1>

          <h1 className="flex gap-2 font-semibold">
            Previous Reading:
            <span className="font-norm font-normal">Previous Reading</span>
          </h1>

          <h1 className="flex gap-2 font-semibold">
            Current Reading:
            <span className="font-norm font-normal">Current Reading</span>
          </h1>
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <h1 className="flex gap-2 font-semibold">
              Total consumption (KwH):
              <span className="font-norm font-normal">Total consumption</span>
            </h1>

            <h1 className="flex gap-2 font-semibold">
              Total current bill:
              <span className="font-norm font-normal">Total current bill</span>
            </h1>

            <h1 className="flex gap-2 font-semibold">
              Total amount due:
              <span className="font-norm font-normal">Total amount due</span>
            </h1>

            <h1 className="flex gap-2 font-semibold">
              Status: <span className="font-norm font-normal">Status</span>
            </h1>

            <h1 className="flex gap-2 font-semibold">
              Date of payment:
              <span className="font-norm font-normal">Date of payment</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-4 mt-5">
        <button className="bg-slate-800 px-4 py-2 text-white rounded-md hover:bg-slate-900">
          Edit
        </button>
        <button className="bg-slate-800 px-4 py-2 text-white rounded-md hover:bg-slate-900">
          Save Report
        </button>
      </div>
    </div>
  );
};

export default TenantInfoBox;
