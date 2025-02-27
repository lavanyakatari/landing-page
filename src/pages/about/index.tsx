import web from "../../assets/website.jpg";
import { StrictMode, useState } from "react";
import { FaGithub, FaGitlab } from "react-icons/fa";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const About = () => {
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showFlyingFoPvt, setShowFlyingFoPvt] = useState(false);

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
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Content Container */}
        <div className="relative flex flex-col lg:flex-row w-full max-w-6xl bg-gray-900 bg-opacity-80 p-8 lg:p-12 rounded-xl shadow-lg backdrop-blur-lg">
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
            <div className="w-full hover:animate-pulse bg-gray-700 bg-opacity-75 p-5 rounded-3xl shadow-lg sm:skew-x-[-10deg] md:skew-x-[-10deg]">
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
                  <ul className="list-disc list-inside">
                    <li>
                      B.Tech (CSE) Thirumal Engineering College - Year of
                      Passing (2021)
                    </li>

                    <li>
                      Intermediate (MPC) - Sri Chaitanya Junior College (2017)
                    </li>
                    <li>ZPH School Velpur - Year of Passing: 2015</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            {/* Experience Section */}
            <div className="bg-gray-700 hover:animate-pulse bg-opacity-75 p-5 rounded-3xl shadow-lg">
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
                <div className="text-gray-300 text-sm space-y-4">
                  <p className="text-lg">Frontend Developer (3+ years)</p>

                  {/* UI Development Block */}
                  <div className="space-y-2">
                    <p className="font-bold">UI Development</p>
                    <p>
                      I leverage React’s component-based architecture to design
                      reusable, scalable, and maintainable UI components, making
                      it easy to adapt to changing design requirements and
                      ensuring a consistent user experience.
                    </p>
                  </div>

                  {/* Dynamic Web Design Block */}
                  <div className="space-y-2">
                    <p className="font-bold underline">Dynamic Web Design</p>
                    <p>
                      Using state management tools like Redux or Context API, I
                      create highly interactive UIs that respond to user inputs
                      in real-time, whether it's handling form data, animations,
                      or seamless transitions between different states of the
                      application.
                    </p>
                  </div>

                  {/* Responsive Design Block */}
                  <div className="space-y-2">
                    <p className="font-bold">Responsive Design</p>
                    <p>
                      I ensure that my web applications are mobile-first and
                      responsive by employing CSS frameworks like Bootstrap,
                      Material-UI, or styled-components, as well as using media
                      queries to adapt the layout for various screen sizes and
                      devices.
                    </p>
                  </div>

                  {/* Performance Optimization Block */}
                  <div className="space-y-2">
                    <p className="font-bold">Performance Optimization</p>
                    <p>
                      I focus on optimizing the performance of web applications
                      by lazy-loading components, minimizing re-renders, and
                      utilizing React’s built-in hooks (like useMemo,
                      useCallback) for efficient updates.
                    </p>
                  </div>

                  {/* Collaboration and Version Control Block */}
                  <div className="space-y-2">
                    <p className="font-bold">
                      Collaboration and Version Control
                    </p>
                    <p>
                      Experienced in working with design systems, collaborating
                      closely with UX/UI designers, and using Git for version
                      control to ensure smooth development processes in team
                      settings.
                    </p>
                  </div>

                  {/* Familiarity with Technologies */}
                  <div className="space-y-2">
                    <p className="font-bold">Technologies</p>
                    <p>
                      Familiar with Node.js, Express.js, MongoDB & basic testing
                      tools like Playwright.
                    </p>
                  </div>

                  {/* Technical Documentation Block */}
                  <div className="space-y-2">
                    <p className="font-bold">Technical Documentation</p>
                    <p>
                      Wrote comprehensive documentation to improve development
                      workflow.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* FlyingFoPvt Section */}
            <div className="bg-gray-700 hover:animate-pulse bg-opacity-75 p-5 rounded-3xl shadow-lg mt-8">
              <h2
                className="text-xl italic font-bold mb-3 cursor-pointer flex justify-between items-center underline"
                onClick={() => setShowFlyingFoPvt(!showFlyingFoPvt)}
              >
                {showFlyingFoPvt ? "FlyingFoxLabs Pvt" : "FlyingFoxLabs Pvt"}
                {/* <span className="text-lg">
                  {showFlyingFoPvt ? <FaAngleUp /> : <FaAngleDown />}
                </span> */}
              </h2>
              {showFlyingFoPvt && (
                <div className="space-y-2">
                  <p className="font-bold">Work Experience at FlyingFoPvt</p>
                  <p>
                    Worked as a React Developer for 3 years at FlyingFoPvt,
                    where I contributed to various projects, enhancing the user
                    interface and user experience of web applications.
                  </p>
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
