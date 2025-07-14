import { useState, useContext } from "react";
import { FitnessContext } from "../../context/FitnessContext";

export default function FitnessForm({ initial = {}, onClose }) {
  const { addEntry, updateEntry } = useContext(FitnessContext);
  const [form, setForm] = useState({
    date: initial.date ? initial.date.slice(0, 10) : "",
    steps: initial.steps || "",
    calories: initial.calories || "",
    weight: initial.weight || "",
    workoutType: initial.workoutType || "",
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (initial._id) {
      await updateEntry(initial._id, form);
    } else {
      await addEntry(form);
    }
    if (onClose) onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 bg-white rounded shadow space-y-2">
      <input name="date" type="date" value={form.date} onChange={handleChange} required className="block w-full p-2 border rounded" />
      <input name="steps" type="number" value={form.steps} onChange={handleChange} placeholder="Steps" className="block w-full p-2 border rounded" />
      <input name="calories" type="number" value={form.calories} onChange={handleChange} placeholder="Calories" className="block w-full p-2 border rounded" />
      <input name="weight" type="number" value={form.weight} onChange={handleChange} placeholder="Weight (kg)" className="block w-full p-2 border rounded" />
      <input name="workoutType" value={form.workoutType} onChange={handleChange} placeholder="Workout Type" className="block w-full p-2 border rounded" />
      <div className="flex gap-2">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{initial._id ? "Update" : "Add"} Entry</button>
        {onClose && <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>}
      </div>
    </form>
  );
} 