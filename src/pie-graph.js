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
        'rgba(22, 164, 216, 0.8)',
        'rgba(96, 219, 232, 0.8)',
        'rgba(139, 211, 70, 0.8)',
        'rgba(239, 223, 72, 0.8)',
        'rgba(249, 165, 44, 0.8)',
        'rgba(214, 78, 18, 0.8)',
      ],
      borderColor: [
        'rgba(99, 102, 241, 1)',
        'rgba(22, 164, 216, 1)',
        'rgba(96, 219, 232, 1)',
        'rgba(139, 211, 70, 1)',
        'rgba(239, 223, 72, 1)',
        'rgba(249, 165, 44, 1)',
        'rgba(214, 78, 18, 1)',
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
