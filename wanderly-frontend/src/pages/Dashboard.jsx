import { useEffect, useState } from "react";
import TripCard from "../components/TripCard";
import {motion } from "framer-motion";

export default function Dashboard() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wanderlyTrips")) || [];
    setTrips(saved);
  }, []);

  const saveTrip = () => {
    const trip ={
        destination,
        days,
        budget,
        style,
        date: new Date().toLocaleDateString()
    };
    localStorage.setItem("wanderlyTrips", JSON.stringify([...trips,trip]));
  };

  const deleteTrip = (index) => {
    const updated = trips.filter((_, i) => i !== index);
    setTrips(updated);
    localStorage.setItem("wanderlyTrips", JSON.stringify(updated));
  };

  return (
  <div className="min-h-screen bg-black text-white p-8">

    <h2 className="text-4xl font-bold mb-8 text-center">
      Your Planned Trips
    </h2>

    {trips.length === 0 ? (
      <div className="text-center mt-20">
        <p className="text-gray-400 text-xl">
          No trips yet ✈️
        </p>

        <p className="text-gray-500 mt-2">
          Plan your first AI trip!
        </p>
      </div>
    ) : (
      <div className="grid md:grid-cols-2 gap-6">
        {trips.map((trip, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800"
          >
            <h3 className="text-2xl font-semibold">
              {trip.destination}
            </h3>

            <p>Days: {trip.days}</p>
            <p>Budget: {trip.budget}</p>
            <p>Style: {trip.style}</p>

            <button
              onClick={() => deleteTrip(index)}
              className="mt-4 bg-red-500 px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    )}
  </div>
);
}