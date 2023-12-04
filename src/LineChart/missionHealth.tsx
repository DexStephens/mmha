import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
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
        text: "Overall Mission Mental Health",
        font: {
          size: 18,
        },
      },
    },
  };
  
  const missionHealth = {
    labels,
    datasets: [
        {
            label: " ",
            data: [3, 2.5, 3, 1, 0.5, 1, 1.75, 0, 1.5, 2, 3, 2],
            borderColor: "rgb(0, 0, 300)", // Change this line to set the border color to blue
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
    ],
  };
  
  export default missionHealth;
  options;
  