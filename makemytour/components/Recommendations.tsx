"use client";

const recommendations = [
  {
    title: "🏝️ Bali",
    reason: "You liked beach destinations.",
  },
  {
    title: "🏔️ Manali",
    reason: "Popular among similar travelers.",
  },
];

export default function Recommendations() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-bold mb-4">
        Personalized Recommendations
      </h2>

      <div className="space-y-4">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-4"
          >
            <h3 className="font-semibold text-lg">
              {item.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {item.reason}
            </p>

            <div className="flex gap-2 mt-3">
              <button className="bg-blue-600 text-white px-3 py-1 rounded">
                Helpful
              </button>

              <button className="bg-gray-200 px-3 py-1 rounded">
                Not Relevant
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}