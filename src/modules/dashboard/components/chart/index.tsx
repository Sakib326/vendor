import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
    },
  },
};

const labels = [
  "8/15/17",
  "10/6/13",
  "7/11/19",
  "5/30/14",
  "4/4/18",
  "8/2/19",
  "8/30/14",
  "1/31/14",
  "12/4/17",
  "5/19/12",
  "4/21/12",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Take",
      data: [4, 15, 6, 10, 4, 5, 22, 10, 43, 21, 8],
      borderColor: "#FBAD18",
      backgroundColor: "#FBAD18",
    },
    {
      label: "Impression",
      data: [1, 14, 5, 41, 2, 54, 6, 32, 14, 20, 11],
      borderColor: "#AC224D",
      backgroundColor: "#AC224D",
    },
  ],
};

export function Chart() {
  return <Line options={options} data={data} className="!w-full" />;
}
