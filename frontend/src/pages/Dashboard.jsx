import { useContext, useState } from "react";
import { FitnessContext } from "../context/FitnessContext";
import FitnessForm from "../components/fitness/FitnessForm";
import FitnessList from "../components/fitness/FitnessList";
import ProgressChart from "../components/fitness/ProgressChart";

export default function Dashboard() {
  const { stats } = useContext(FitnessContext);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="mb-4 p-4 bg-gray-100 rounded">
        <div><strong>Total Steps:</strong> {stats.totalSteps || 0}</div>
        <div><strong>Total Calories:</strong> {stats.totalCalories || 0}</div>
        <div><strong>Average Weight:</strong> {stats.avgWeight?.toFixed(1) || 0}</div>
      </div>
      <button onClick={() => setShowForm(f => !f)} className="mb-4 bg-green-500 text-white px-4 py-2 rounded">
        {showForm ? "Hide" : "Add Entry"}
      </button>
      {showForm && <FitnessForm onClose={() => setShowForm(false)} />}
      <ProgressChart />
      <FitnessList />
    </div>
  );
} 