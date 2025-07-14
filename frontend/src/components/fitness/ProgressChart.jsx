import { useContext } from "react";
import { FitnessContext } from "../../context/FitnessContext";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
} from "chart.js";
Chart.register(LineElement, PointElement, LinearScale, CategoryScale);

export default function ProgressChart() {
  const { entries } = useContext(FitnessContext);
  const sorted = [...entries].sort((a, b) => new Date(a.date) - new Date(b.date));
  const data = {
    labels: sorted.map(e => e.date?.slice(0, 10)),
    datasets: [
      {
        label: "Steps",
        data: sorted.map(e => e.steps),
        borderColor: "rgb(59,130,246)",
        backgroundColor: "rgba(59,130,246,0.2)",
      },
      {
        label: "Calories",
        data: sorted.map(e => e.calories),
        borderColor: "rgb(239,68,68)",
        backgroundColor: "rgba(239,68,68,0.2)",
      },
      {
        label: "Weight",
        data: sorted.map(e => e.weight),
        borderColor: "rgb(16,185,129)",
        backgroundColor: "rgba(16,185,129,0.2)",
      },
    ],
  };
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-2">Progress Chart</h3>
      <Line data={data} />
    </div>
  );
} 