export default function TripCard({ trip }) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:scale-105 transition">

      <h3 className="text-2xl font-semibold mb-2">
        {trip.destination}
      </h3>

      <p>Days: {trip.days}</p>
      <p>Budget: ₹{trip.budget}</p>
      <p>Style: {trip.style}</p>

      <ul className="mt-3 list-disc ml-5 text-gray-400">
        {trip.activities?.map((act, i) => (
          <li key={i}>{act}</li>
        ))}
      </ul>
    </div>
  );
}