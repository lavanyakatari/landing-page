import React from "react";
import websiteImage from "../../assets/website.jpg";

const Resume = () => {
  return (
    <div className="text-6xl font-bold">
      <div className="flex absolute justify-center items-center h-screen w-screen">
        <img
          src={websiteImage}
          alt="Website"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-row space-x-4 font-normal text-2xl relative justify-end pr-4 pt-4 text-gray-800">
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1LXha0dLFTFxObj4yGvDRwH2JhHANKTyE/view?usp=sharing"
            )
          }
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
