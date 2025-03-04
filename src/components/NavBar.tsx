import { NavLink, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const NavBar = () => {
  const location = useLocation();
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Navbar must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <nav
      className={`p-4 shadow-md  dark:bg-gray-900 dark:text-white flex justify-between ${
        theme === "light" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <button onClick={toggleTheme} className="px-4 py-2 rounded">
        {theme === "light" ? "🌙" : "☀️"}
      </button>
      <div className="flex-row items-center gap-10">
        <ul className="flex space-x-10 place-items-center gap-10">
          <li>
            <NavLink
              className={` ${
                location.pathname === "/" ? "text-red-500 font-bold" : ""
              } ${theme === "dark" ? "text-gray-900" : ""}`}
              to="/"
            >
              <CgProfile className="w-10 h-10 rounded-full border-2 border-gray-800" />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`active:font-bold ${
                location.pathname === "/about" ? "text-red-500 font-bold" : ""
              } ${theme === "dark" ? "text-gray-900" : "text-white"}`}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`active:font-bold ${
                location.pathname === "/contact" ? "text-red-500 font-bold" : ""
              } ${theme === "dark" ? "text-gray-900" : "text-white"} `}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
