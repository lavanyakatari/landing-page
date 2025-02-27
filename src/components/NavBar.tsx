import { NavLink, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import ThemeContext from "../ThemeContext.tsx";

const NavBar = () => {
  const location = useLocation();
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Navbar must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  console.log("Location", location);

  return (
    <nav className="p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white flex justify-between">
      <h1 className="text-lg font-bold">Theme Switcher</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 border rounded dark:border-white border-black"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
      <div className="flex-row items-center gap-10">
        <ul className="flex space-x-10 place-items-center gap-10">
          <li>
            <NavLink
              className={` ${
                location.pathname === "/" && "text-red-500 font-bold"
              } `}
              to="/"
            >
              <CgProfile className="size-10 rounded-full border-2 border-gray-800" />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`active:font-bold ${
                location.pathname === "/about" && "text-red-500 font-bold"
              } `}
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
