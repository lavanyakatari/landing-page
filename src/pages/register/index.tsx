import React from "react";
import { RegisterFrom } from "../../components/RegisterFrom";
import websiteImage from "../../assets/website.jpg";
const Register = () => {
  return (
    <div>
      <div className="flex absolute justify-center items-center">
        <img
          src={websiteImage}
          alt="Website"
          className="h-screen w-screen object-cover"
        />
      </div>
      <div className="flex relative justify-center items-center h-screen">
        <RegisterFrom />
      </div>
    </div>
  );
};

export default Register;
