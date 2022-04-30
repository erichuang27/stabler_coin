import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

function DonutChart({ chance, data, school }) {
  let color = "";
  if (chance < 10) {
    color = "rgb(255, 0, 0)";
  } else if (chance < 30) {
    color = "rgb(255, 255, 0)";
  } else {
    color = "rgb(80, 200, 120)";
  }

  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 180).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        var text = chance + "%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return (
    <div className="bg-white">
      <Doughnut
        data={{
          labels: ["Chance"],
          datasets: [
            {
              label: "Chance",
              data: [100],
              backgroundColor: [color],
              borderColor: ["rgb(0, 0, 0)"],
              borderWidth: [1],
              hoverOffset: 5,
            },
          ],
        }}
        height={100}
        width={100}
        plugins={plugins}
      />
      <div className="flex-shrink bg-red-300 text-center text-base font-semibold text-black">
        {school}
      </div>
    </div>
  );
}

export default DonutChart;
