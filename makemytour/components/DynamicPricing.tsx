"use client";

export default function DynamicPricing() {
  const basePrice = 5000;
  const holidayPrice = basePrice * 1.2;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-bold mb-4">
        Dynamic Pricing
      </h2>

      <div className="space-y-3">
        <p>
          Base Price:
          <span className="font-semibold ml-2">
            ₹{basePrice}
          </span>
        </p>

        <p>
          Holiday Price:
          <span className="font-semibold text-red-600 ml-2">
            ₹{holidayPrice}
          </span>
        </p>

        <button className="w-full bg-green-600 text-white rounded-lg py-2">
          Freeze Price
        </button>
      </div>
    </div>
  );
}