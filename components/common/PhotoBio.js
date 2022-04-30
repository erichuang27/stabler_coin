import React from "react";
import Image from "next/image";

function PhotoBio({ image, name, position }) {
  return (
    <div className="mb-10 flex justify-center">
      <div className="max-w-sm rounded-lg bg-white shadow-lg">
        <Image
          className="rounded-t-lg"
          width={200}
          height={300}
          src={image}
          alt="image"
        />
        <div>
          <h5 className="mb-2 text-xl font-medium text-gray-900">{name}</h5>
          <p className="mb-4 text-base text-gray-700">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default PhotoBio;
