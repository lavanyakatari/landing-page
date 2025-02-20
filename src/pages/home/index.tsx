import React from "react";
import websiteImage from "../../assets/website.jpg";
import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <React.StrictMode>
      <div className="text-6xl font-bold">
        <div className="flex absolute justify-center items-center h-screen w-screen">
          <img
            src={websiteImage}
            alt="Website"
            className="h-full w-full object-cover"
          />
        </div>
        {/* <FetchData /> */}
        <div className="flex flex-row space-x-4 font-normal text-2xl relative justify-end pr-4 pt-4 text-gray-800">
          <NavLink className="underline" to="/register">
            Register
          </NavLink>
          <NavLink className="underline" to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Home;
