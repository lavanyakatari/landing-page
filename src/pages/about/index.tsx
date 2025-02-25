import web from "../../assets/website.jpg";
import { StrictMode, useState } from "react";
import { FaGithub, FaGitlab } from "react-icons/fa";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const About = () => {
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <StrictMode>
      <div className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={web}
            alt="web"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Content Container */}
        <div className="relative flex flex-col lg:flex-row w-full max-w-6xl bg-gray-800 bg-opacity-80 p-8 lg:p-12 rounded-xl shadow-lg backdrop-blur-lg">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center lg:text-left">
              Welcome to my Portfolio
            </h1>

            {/* Social Media Icons */}
            <div className="flex space-x-6 mb-6">
              <span
                onClick={() =>
                  handleRedirect("https://github.com/lavanyakatari")
                }
                className="p-3 bg-gray-700 rounded-full hover:bg-blue-500 hover:animate-ping transition duration-300 cursor-pointer"
              >
                <FaGithub className="size-7" />
              </span>

              <span
                onClick={() => handleRedirect("https://gitlab.com/lavanya_77")}
                className="p-3 bg-gray-700 rounded-full hover:bg-orange-500 hover:animate-spin transition duration-300 cursor-pointer"
              >
                <FaGitlab className="size-7" />
              </span>
            </div>

            {/* Education Section */}
            <div className="w-full bg-gray-700 bg-opacity-75 p-5 rounded-3xl shadow-lg sm:skew-x-[-10deg] md:skew-x-[-10deg]">
              <h2
                className="text-xl italic font-bold mb-3 cursor-pointer flex justify-between items-center"
                onClick={() => setShowEducation(!showEducation)}
              >
                EDUCATION
                <span className="text-lg">
                  {showEducation ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </h2>
              {showEducation && (
                <div className="text-gray-300 text-sm space-y-2">
                  <p className="text-lg">B.Tech (CSE) - 2021</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Intermediate (MPC) - Sri Chaitanya Junior College (2017)
                    </li>
                    <li>ZPH School Velpur - Year of Pass: 2015</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            {/* Experience Section */}
            <div className="bg-gray-700 bg-opacity-75 p-5 rounded-3xl shadow-lg sm:skew-x-[-10deg] md:skew-x-[-10deg] ">
              <h2
                className="text-xl italic font-bold mb-3 cursor-pointer flex justify-between items-center"
                onClick={() => setShowExperience(!showExperience)}
              >
                EXPERIENCE
                <span className="text-lg">
                  {showExperience ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </h2>
              {showExperience && (
                <div className="text-gray-300 text-sm space-y-2">
                  <p className="text-lg">Frontend Developer (3+ years)</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Experience in **React.js**, **Next.js**, and modern
                      **frontend development**.
                    </li>
                    <li>
                      Familiar with **Node.js, Express.js, MongoDB** & basic
                      **testing tools** like Playwright.
                    </li>
                    <li>
                      **Technical Documentation**: Wrote comprehensive
                      documentation to improve development workflow.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </StrictMode>
  );
};

export default About;
