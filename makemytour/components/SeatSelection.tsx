"use client";

import { useState } from "react";

const seats = [
  "1A", "1B", "1C", "1D",
  "2A", "2B", "2C", "2D",
  "3A", "3B", "3C", "3D",
];

export default function SeatSelection() {
  const [selectedSeat, setSelectedSeat] = useState("");

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-bold mb-4">✈ Select Your Seat</h2>

      <div className="grid grid-cols-4 gap-2 max-w-[220px]">
        {seats.map((seat) => (
          <button
            key={seat}
            onClick={() => setSelectedSeat(seat)}
            className={`h-10 w-10 rounded-md border transition ${
              selectedSeat === seat
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-50"
            }`}
          >
            {seat}
          </button>
        ))}
      </div>

      <p className="mt-4">
        Selected Seat:
        <span className="font-semibold text-blue-600 ml-2">
          {selectedSeat || "None"}
        </span>
      </p>
    </div>
  );
}