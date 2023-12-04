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

const labels = [
  "Jan 1",
  "Jan 2",
  "Jan 3",
  "Jan 4",
  "Jan 5",
  "Jan 6",
  "Jan 7",
  "Jan 8",
  "Jan 9",
  "Jan 10",
  "Jan 11",
  "Jan 12",
];

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
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Elder/Sister Missionary",
      font: {
        size: 18,
      },
    },
  },
};

const emotionalData = {
  labels,
  datasets: [
    {
      label: "Emotional",
      data: [4, 2, -3, -4, 0, -2, 1, 3, 2, 2, 0, 5],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Physical",
      data: [5, 4, 0, -2, 3, 5, 5, 5, 5, 5, 5, 5],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Spiritual",
      data: [3, 4, -2, 0, 5, 5, 4, 3, 5, 3, 2, 4],
      borderColor: "rgb(119, 221, 119)",
      backgroundColor: "rgba(119, 221, 119, 0.5)",
    },
  ],
};

export default emotionalData;
options;
