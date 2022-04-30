import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "left"
    },
  },
};

export const data = {
  labels: ['USDT', 'BNB', 'TUSD', 'UST', 'USDC', 'DGX', 'DAI'],
  datasets: [
    {
      label: 'Total Deposit',
      data: [308596, 42081, 266515, 112217, 224433, 210406, 238460],
      backgroundColor: [
        'rgba(99, 102, 241, 0.8)',
        'rgba(0, 0, 0, 0.8)',
        'rgba(193, 202, 214, 0.8)',
        'rgba(85, 133, 100, 0.8)',
        'rgba(31, 32, 65, 0.8)',
        'rgba(221, 225, 228, 0.8)',
        'rgba(99, 107, 97, 0.8)',
      ],
      borderColor: [
        'rgba(99, 102, 241, 1)',
        'rgba(0, 0, 0, 1)',
        'rgba(193, 202, 214, 1)',
        'rgba(85, 133, 100, 1)',
        'rgba(31, 32, 65, 1)',
        'rgba(221, 225, 228, 1)',
        'rgba(99, 107, 97, 1)',
      ],
      borderWidth: 0,
    },
  ],
};

export default function PieChart() {
  return (
    <div>
      <Doughnut options={options} data={data} />
    </div>
  )
}
