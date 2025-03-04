import React, { useContext } from "react";
import websiteImage from "../../assets/web-page1.jpg";
import profileImage from "../../assets/profile.jpeg";
import { ThemeContext } from "../../ThemeContext";
import { MdOutlineEmail } from "react-icons/md";

import "./style.css";
const Home = () => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext ? themeContext.theme : "light";

  return (
    <React.StrictMode>
      <div
        className={`flex flex-col justify-center items-center min-h-screen ${
          theme === "dark"
            ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"
            : "bg-gradient-to-r from-white via-gray-100 to-white"
        }`}
      >
        <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center">
          <img
            src={websiteImage}
            alt="Website"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between w-full max-w-4xl p-8 bg-gradient-to-l from-gray-900 via-gray-800 to-transparent bg-opacity-90 border-l-4 border-blue-500 rounded-lg shadow-2xl">
            <div className="flex flex-col items-center md:items-start text-center md:text-left text-white space-y-6 font-light text-xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold animate-bounce">
                Lavanya Katari
              </h1>

              <p className="flex flex-row text-xs font-mono italic sm:text-lg md:text-xl lg:text-xl mt-3 items-center bg-gray-800 p-4 rounded-lg shadow-lg">
                <MdOutlineEmail
                  size={40}
                  className="mr-2 text-blue-500 bg-gray-900 rounded-full p-2"
                />
                <a
                  href="mailto:katarilavanya881@gmail.com"
                  className="underline text-blue-300 hover:text-blue-500 transition duration-300 ease-in-out"
                >
                  katarilavanya881@gmail.com
                </a>
              </p>
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1LXha0dLFTFxObj4yGvDRwH2JhHANKTyE/view?usp=sharing"
                    )
                  }
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full transition duration-500 ease-in-out transform hover:scale-110 shadow-lg text-lg font-semibold"
                >
                  View Resume
                </button>
              </div>
            </div>
            <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-10">
              <img
                src={profileImage}
                alt="Profile"
                className="flex hover:animate-spin w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-blue-500 transition duration-500 ease-in-out transform hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Home;
