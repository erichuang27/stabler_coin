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
import faker from 'faker';

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

const labels = ['4/30 12:00', '4/30 16:00', '4/30 20:00', '4/30 24:00', '4/31 4:00', '4/31 8:00'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Total Circulation',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(99, 102, 241)',
      backgroundColor: 'rgb(99, 102, 241, 0.5)',
    },
  ],
};

export function LineGraph() {
  return <Line options={options} data={data} />;
}
