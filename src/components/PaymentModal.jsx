import { useState } from "react";
import axios from "axios";

const PaymentModal = ({ showModal, onClose, billId }) => {
  const [recieptNo, setRecieptNo] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [loading, setIsloading] = useState(false);
  const [error, setError] = useState(false);

  // Close the modal when the backdrop is clicked
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsloading(true);
      await axios.post(`/api/payment/${billId}`, { recieptNo, paymentAmount });
      setTimeout(() => {
        setIsloading(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.log(error);
      setError(error);
      setIsloading(false);
    }
  };

  return (
    // Use conditional rendering to show/hide the modal based on the showModal prop
    showModal && (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        onClick={handleBackdropClick}
      >
        <div className="flex flex-col items-center w-[25rem] px-6 py-7 gap-5 bg-white shadow-md rounded-md sm:px-6">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-700">Payment</h1>
          </div>

          <div className="w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-4 justify-between">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm" htmlFor="receipt-no">
                      Receipt no.
                    </label>
                    <input
                      type="text"
                      name="receipt-no"
                      placeholder="Enter reciept number"
                      onChange={(e) => setRecieptNo(e.target.value)}
                      value={recieptNo}
                      required
                      className="appearance-none block px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm" htmlFor="payment-amount">
                      Payment Amount
                    </label>
                    <input
                      type="number"
                      name="payment-amount"
                      placeholder="Enter payment amount"
                      onChange={(e) => setPaymentAmount(e.target.value)}
                      value={paymentAmount}
                      required
                      className="appearance-none block px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {error ? (
                <p className="text-red-600 text-sm">Error while registering!</p>
              ) : (
                <p></p>
              )}

              <div className="flex flex-col mt-5">
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
      </div>
    )
  );
};

export default PaymentModal;
