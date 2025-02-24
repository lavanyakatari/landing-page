import web from "../../assets/website.jpg";
import { StrictMode } from "react";

// const About = () => {
//   const handleRedirect = (url: string) => {
//     window.open(url, "_blank");
//   };

//   return (
//     <React.StrictMode>
//       <div className="relative min-h-screen bg-gray-900 text-white">
//       <div className="absolute inset-0">
//         <img
//           src={web}
//           alt="web"
//           className="w-full h-full object-cover opacity-50"
//         />
//       </div>
//       <div className="relative flex flex-row justify-between items-start h-full px-4">
//         <div className="w-1/2 p-6">
//           <h1 className="w-screen flex justify-center text-5xl sm:text-5xl md:text-6xl font-bold mb-8">
//             Welcome to my portfolio
//           </h1>
//           <div className="bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-lg text-center mb-8">
//             <p className="text-sm text-blue-400 sm:text-xl md:text-sm mb-4">
//               GitHub:{" "}
//               <span
//                 onClick={() =>
//                   handleRedirect("https://github.com/lavanyakatari")
//                 }
//                 className="underline hover:text-blue-400 cursor-pointer"
//               >
//                 Visit my GitHub
//               </span>
//             </p>
//             <p className="text-sm text-blue-400 sm:text-xl md:text-sm">
//               GitLab:{" "}
//               <span
//                 onClick={() => handleRedirect("https://gitlab.com/lavanya_77")}
//                 className="underline hover:text-blue-400 cursor-pointer"
//               >
//                 Visit my GitLab
//               </span>
//             </p>
//           </div>
//           <div className="w-[300px]  shadow-lg bg-gray-960 bg-opacity-75 p-6 rounded-2xl shadow-lg text-left max-w-2xl justify-center items-center mt-20">
//             <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
//             {/* <h3 className="text-2xl font-semibold mb-2">
//               Software Developer, FlyingFox Labs Pvt Ltd: Jun 2022 - Present
//             </h3> */}
//             <p className="text-lg mb-2">Btech(CSE)-Year of pass 2021</p>
//             <ul className="list-disc list-inside space-y-2 text-sm">
//               <li>
//                Intermidate (MPC) SriChaitinaya Juniour College 2017 Passedout
//               </li>
//               <li>
//                 ZPH School Velpur Year of Pass 2015
//               </li>

//             </ul>
//           </div>

//         </div>
//         <div className="w-1/2 p-6">
//           <div className=" pl-8 pt-8 rounded-tl-8xl shadow-lg bg-gray-800 bg-opacity-75 p-6 rounded-2xl shadow-lg text-left max-w-2xl justify-center items-center mt-20">
//             <h2 className="text-3xl font-bold mb-4">EXPERIENCE</h2>
//             {/* <h3 className="text-2xl font-semibold mb-2">
//               Software Developer, FlyingFox Labs Pvt Ltd: Jun 2022 - Present
//             </h3> */}
//             <p className="text-lg mb-2">Frontend Developer</p>
//             <ul className="list-disc list-inside space-y-2 text-sm">
//               <li>
//                 I have 3 years of experience in frontend React developer
//                 Developed and Maintained Responsive Front-End Applications:
//                 Built high-quality, responsive web applications using React,
//                 JavaScript, HTML, and CSS, ensuring seamless user experience
//                 across devices.
//               </li>
//               <li>
//                 I am familiary with Backend technologies nodejs,expressjs mongodb
//                 and i have basic knowledge on testing tool playwrite i am using
//                 this in my Raltime project for DiscordServer
//                 </li>
//               <li>
//                 Technical Documentation: Created comprehensive technical
//                 documentation to support development processes and ensure
//                 clarity in project progress and future enhancements.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//     </React.StrictMode>
//   );
// };

// export default About;

const About = () => {
  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <StrictMode>
      <div className="relative min-h-screen bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src={web}
            alt="web"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative flex flex-col lg:flex-row justify-between items-start h-full px-4 lg:px-16">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 p-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center lg:text-left">
              Welcome to my portfolio
            </h1>
            <div className="bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-lg text-center mb-8">
              <p className="text-sm text-blue-400 sm:text-xl md:text-sm mb-4">
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
              <p className="text-sm text-blue-400 sm:text-xl md:text-sm">
                GitLab:{" "}
                <span
                  onClick={() =>
                    handleRedirect("https://gitlab.com/lavanya_77")
                  }
                  className="underline hover:text-blue-400 cursor-pointer"
                >
                  Visit my GitLab
                </span>
              </p>
            </div>

            {/* Education Section */}
            <div className="bg-gray-800 bg-opacity-75 p-6 rounded-2xl shadow-lg text-left mb-12">
              <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
              <p className="text-lg mb-2">Btech(CSE)-Year of pass 2021</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Intermediate (MPC) SriChaitanya Junior College 2017</li>
                <li>ZPH School Velpur Year of Pass 2015</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 p-6">
            <div className="bg-gray-800 bg-opacity-75 p-6 rounded-2xl shadow-lg text-left mb-12">
              <h2 className="text-3xl font-bold mb-4">EXPERIENCE</h2>
              <p className="text-lg mb-2">Frontend Developer</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  I have 3 years of experience in frontend React development,
                  building and maintaining responsive web applications.
                </li>
                <li>
                  I am familiar with backend technologies like Node.js,
                  Express.js, MongoDB, and I have basic knowledge of testing
                  tools such as Playwright (used in my real-time Discord server
                  project).
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
    </StrictMode>
  );
};

export default About;
