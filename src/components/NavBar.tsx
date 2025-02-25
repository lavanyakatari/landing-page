import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/profile.jpeg";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  const location = useLocation();

  console.log("Location", location);

  return (
    <nav className="flex items-center justify-between px-10 shadow-xl h-20  sticky top-0 bg-blue-200 bg-opacity-50 underline ">
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
