import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-6xl font-bold">
      Home
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default Home;
