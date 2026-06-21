"use client";

import { useState } from "react";

export default function CancellationRefund() {
  const bookingAmount = 5000;

  const [reason, setReason] = useState("");
  const [status, setStatus] = useState("Pending");

  const refundAmount = bookingAmount * 0.5;

  const handleCancel = () => {
    if (!reason) {
      alert("Please select a cancellation reason.");
      return;
    }

    setStatus("Processed");

    setTimeout(() => {
      setStatus("Completed");
    }, 3000);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-bold mb-4">
        Cancellation & Refund
      </h2>

      <label className="text-sm font-medium">
        Cancellation Reason
      </label>

      <select
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        className="w-full border rounded-lg p-2 mt-2"
      >
        <option value="">Select Reason</option>
        <option>Change of Plans</option>
        <option>Medical Emergency</option>
        <option>Price Issue</option>
        <option>Other</option>
      </select>

      <div className="mt-4 space-y-2">
        <p>
          Booking Amount:
          <span className="font-semibold ml-2">₹5000</span>
        </p>

        <p>
          Refund Amount:
          <span className="font-semibold text-green-600 ml-2">
            ₹{refundAmount}
          </span>
        </p>

        <p>
          Refund Status:
          <span className="font-semibold text-blue-600 ml-2">
            {status}
          </span>
        </p>

        <p className="text-sm text-gray-500">
          Expected Timeline: 3-5 Business Days
        </p>
      </div>

      <button
        onClick={handleCancel}
        className="mt-5 w-full bg-red-500 text-white rounded-lg py-2 hover:bg-red-600"
      >
        Cancel Booking
      </button>
    </div>
  );
}