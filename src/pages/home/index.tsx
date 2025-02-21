import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";

import websiteImage from "../../assets/website.jpg";
import profileImage from "../../assets/profile.jpeg";

const Home = () => {
  return (
    <React.StrictMode>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800">
        <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center">
          <img
            src={websiteImage}
            alt="Website"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between w-full max-w-4xl p-8 bg-gradient-to-l from-gray-900 via-gray-800 to-transparent bg-opacity-90 border-l-4 border-blue-500 rounded-lg shadow-2xl">
            <div className="flex flex-col items-center md:items-start text-center md:text-left text-white space-y-6 font-light text-xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold animate-pulse">
                Lavanya Katari
              </h1>
              <p className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition duration-300 shadow-md text-base sm:text-lg md:text-xl lg:text-2xl mt-3 flex items-center">
                <IoIosPhonePortrait className="mr-2" /> Contact
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-3">
                Email:{" "}
                <a
                  href="mailto:katarilavanya881@gmail.com"
                  className="underline hover:text-blue-400"
                >
                  katarilavanya881@gmail.com
                </a>
              </p>
              <div className="mt-10">
                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1LXha0dLFTFxObj4yGvDRwH2JhHANKTyE/view?usp=sharing"
                    )
                  }
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition duration-300 shadow-md"
                >
                  View Resume
                </button>
              </div>
            </div>
            <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-10">
              <img
                src={profileImage}
                alt="Profile"
                className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Home;
