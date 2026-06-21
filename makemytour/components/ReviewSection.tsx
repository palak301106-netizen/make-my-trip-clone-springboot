"use client";

import { useState } from "react";

export default function ReviewSection() {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-bold mb-4">
        Reviews & Ratings
      </h2>

      <select
        className="w-full border rounded-lg p-2"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <option key={star} value={star}>
            {star} Star
          </option>
        ))}
      </select>

      <textarea
        className="w-full border rounded-lg mt-4 p-3"
        rows={4}
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <input
        type="file"
        className="mt-4"
        accept="image/*"
      />

      <button className="mt-4 w-full bg-blue-600 text-white rounded-lg py-2">
        Submit Review
      </button>
    </div>
  );
}