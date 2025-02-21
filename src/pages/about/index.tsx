import React from "react";
import web from "../../assets/website.jpg";

const About = () => {
  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src={web}
          alt="web"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative flex flex-row justify-between items-start h-full px-4">
        <div className="w-1/2 p-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            Welcome to my portfolio
          </h1>
          <div className="bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-lg text-center mb-8">
            <p className="text-lg sm:text-xl md:text-2xl mb-4">
              GitHub:{" "}
              <span
                onClick={() =>
                  handleRedirect("https://github.com/lavanyakatari")
                }
                className="underline hover:text-blue-400 cursor-pointer"
              >
                Visit my GitHub
              </span>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl">
              GitLab:{" "}
              <span
                onClick={() => handleRedirect("https://gitlab.com/lavanya_77")}
                className="underline hover:text-blue-400 cursor-pointer"
              >
                Visit my GitLab
              </span>
            </p>
          </div>
        </div>
        <div className="w-1/2 p-6">
          <div className="bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-lg text-left max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">EXPERIENCE</h2>
            <h3 className="text-2xl font-semibold mb-2">
              Software Developer, FlyingFox Labs Pvt Ltd: Jun 2022 - Present
            </h3>
            <p className="text-lg mb-2">Frontend Developer</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>
                Developed and Maintained Responsive Front-End Applications:
                Built high-quality, responsive web applications using React,
                JavaScript, HTML, and CSS, ensuring seamless user experience
                across devices.
              </li>
              <li>
                User-Centric Design Translation: Translated user and business
                requirements into functional, engaging front-end interfaces,
                ensuring alignment with client needs and business goals.
              </li>
              <li>
                Technical Documentation: Created comprehensive technical
                documentation to support development processes and ensure
                clarity in project progress and future enhancements.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
