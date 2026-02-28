import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Planner() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    destination: "",
    days: "",
    budget: "",
    style: ""
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const generatePlan = () => {
    setLoading(true);

    setTimeout(() => {
      setResult({
        destination: form.destination,
        days: form.days,
        budget: form.budget,
        style: form.style,
        itinerary: [
          `Day 1: Explore ${form.destination}`,
          `Day 2: Food & sightseeing`,
          `Day 3: ${form.style} activities`
        ],
       
      });

      setLoading(false);
    }, 2000);
  };

  const saveTrip = () => {
    if (!result) {
      alert("Please generate a trip plan first!");
      return;
    }
    const existingtrips =
      JSON.parse(localStorage.getItem("wanderlyTrips")) || [];

    const updatedtrips = [...existingtrips, result];

    localStorage.setItem(
      "wanderlyTrips",
      JSON.stringify(updatedtrips)
    );

    alert("Trip Saved Successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-8">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    ></motion.div>
      <Navbar />

      <div className="max-w-xl mx-auto mt-10 space-y-4">

        <input name="destination" placeholder="Destination"
          onChange={handleChange}
          className="w-full p-3 bg-gray-800 rounded"/>

        <input name="days" placeholder="Days"
          onChange={handleChange}
          className="w-full p-3 bg-gray-800 rounded"/>

        <input name="budget" placeholder="Budget"
          onChange={handleChange}
          className="w-full p-3 bg-gray-800 rounded"/>

        <input name="style" placeholder="Travel Style"
          onChange={handleChange}
          className="w-full p-3 bg-gray-800 rounded"/>

        <button
          onClick={generatePlan}

          className="mt-6 w-full bg-gradient-to-r from-pink-500 to-orange-500 py-3 rounded-xl font-bold">
          {loading ? "AI Planning Your Trip..." : "Generate AI Trip"}
        </button>

        {loading && (
          <p className="text-center animate-pulse text-pink-400">
            🤖 AI Planning Your Trip...
          </p>
        )}
        <button
            onClick={saveTrip}
            className="mt-4 w-full bg-green-500 hover:bg-green-600 p-3 rounded-xl">
            Save Trip 💾
        </button>

        {result && (
          <div className="mt-8 bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-3">
              {result.destination} Trip Plan
            </h3>

            <ul className="list-disc ml-5 text-gray-300">
              {result.itinerary.map((act, i) => (
                <li key={i}>{act}</li>
              ))}
            </ul>

            <p className="mt-2">
              Budget: ₹{result.budget}
            </p>

            <button
              onClick={saveTrip}
              className="mt-4 bg-green-500 w-full p-2 rounded">
              Save Trip 💾
            </button>

            <button
              onClick={()=>navigate("/dashboard")}
              className="mt-3 underline text-blue-400">
              View Saved Trips
            </button>
          </div>
        )}
      </div>
    </div>
  );
}