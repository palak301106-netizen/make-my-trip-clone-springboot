"use client";

import { useEffect, useState } from "react";

export default function LiveFlightStatus() {
  const statuses = [
    {
      status: "On Time",
      delayReason: "None",
      estimatedArrival: "7:45 PM",
    },
    {
      status: "Delayed by 1h",
      delayReason: "Weather Conditions",
      estimatedArrival: "8:45 PM",
    },
    {
      status: "Boarding",
      delayReason: "None",
      estimatedArrival: "7:40 PM",
    },
  ];

  const [flightStatus, setFlightStatus] = useState(statuses[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const random =
        statuses[Math.floor(Math.random() * statuses.length)];
      setFlightStatus(random);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-bold mb-4">✈ Live Flight Status</h2>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Status</span>
          <span className="font-semibold text-green-600">
            {flightStatus.status}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Delay Reason</span>
          <span>{flightStatus.delayReason}</span>
        </div>

        <div className="flex justify-between">
          <span>Estimated Arrival</span>
          <span>{flightStatus.estimatedArrival}</span>
        </div>
      </div>
    </div>
  );
}