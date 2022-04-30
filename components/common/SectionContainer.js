import React from "react";

function SectionContainer({ background, children }) {
  return (
    <div className={`flex w-full justify-center ${background}`}>
      <div className="max-w-4xl flex-grow items-center object-center text-center">
        {children}
      </div>
    </div>
  );
}

export default SectionContainer;
