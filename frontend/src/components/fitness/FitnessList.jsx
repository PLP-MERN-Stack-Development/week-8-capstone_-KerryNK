import { useContext, useState } from "react";
import { FitnessContext } from "../../context/FitnessContext";
import FitnessForm from "./FitnessForm";

export default function FitnessList() {
  const { entries, deleteEntry } = useContext(FitnessContext);
  const [editing, setEditing] = useState(null);

  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold mb-2">Entries</h3>
      {editing && (
        <FitnessForm initial={editing} onClose={() => setEditing(null)} />
      )}
      <ul className="space-y-2">
        {entries.map(entry => (
          <li key={entry._id} className="flex gap-2 items-center bg-gray-50 p-2 rounded">
            {entry.date?.slice(0, 10)}: {entry.steps} steps, {entry.calories} cal, {entry.weight} kg, {entry.workoutType}
            <button onClick={() => setEditing(entry)} className="text-blue-500 ml-auto">Edit</button>
            <button onClick={() => deleteEntry(entry._id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
} 