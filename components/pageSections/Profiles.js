import React from "react";
import DonutChart from "../common/DonutChart";

function Profiles(props) {
  return (
    <div className="from-accent-200 flex h-slide w-full flex-col items-center justify-center bg-gradient-to-b via-white to-white">
      <div className="w-slide justify-start text-5xl text-black">
        Your Dashboard
      </div>
      <div className="w-slide flex h-3/4 flex-row items-center justify-between">
        <DonutChart chance={23} school="Carnegie Mellon" />
        <DonutChart chance={17} school="Duke" />
        <DonutChart chance={5} school="Harvard" />
        <DonutChart chance={38} school="Boston University" />
      </div>
    </div>
  );
}

export default Profiles;
