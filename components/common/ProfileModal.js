import React from "react";
import Image from "next/image";

function ProfileModal({ image, name, position, linkedin, bio }) {
  return (
    // make all current into md
    // default (mobile and small) to no pic, just text, and make small enough to fit screen
    <div className="flex h-[98%] w-[18rem] md:w-[40rem] rounded-md bg-white shadow-lg">
      <div className="hidden md:block w-[30%]">
        <Image
          className="rounded-l-md"
          width={200}
          height={300}
          src={image}
          alt="image"
        />
      </div>
      <div className="flex md:w-[70%] flex-col justify-start p-6">
        <div className="flex flex-initial">
          <h5 className="mb-2 text-xl font-medium text-gray-900">{name}</h5>
          <svg className="mt-1 ml-2 h-6 w-6" viewBox="0 0 128 128">
            <a href={"https://www.linkedin.com/in/" + linkedin}>
              <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
            </a>
          </svg>
        </div>
        <p className="mb-4 text-base text-gray-700">{position}</p>
        <p className="mb-4 text-base text-gray-700">{bio}</p>
      </div>
    </div>
  );
}

export default ProfileModal;
