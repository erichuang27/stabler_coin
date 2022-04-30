import React from "react";

function DividerMessage({ background, message }) {
  return (
    <div className={background}>
      <div className="contents-center flex h-12 w-full flex-col items-center">
        <div className="flex h-full w-3/4 flex-row items-center justify-between">
          <div className="flex h-1 flex-grow bg-black"></div>
          <div className="flex-shrink px-16 text-3xl text-black">{message}</div>
          <div className="flex h-1 flex-grow bg-black"></div>
        </div>
      </div>
    </div>
  );
}

export default DividerMessage;
