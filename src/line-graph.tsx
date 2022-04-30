import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

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
      display: false,
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Total Circulation',
      data: [216544, 397654, 597654, 997050, 1101004, 1004506, 1070235, 1180645],
      borderColor: 'rgb(99, 102, 241)',
      backgroundColor: 'rgb(99, 102, 241, 0.5)',
    },
  ],
};

export function LineGraph() {
  return <Line options={options} data={data} />;
}
