import { NavLink } from "react-router-dom";
import { FetchData } from "../../components/FetchData";

const Home = () => {
  return (
    <div className="text-6xl font-bold">
      Home
      <FetchData />
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default Home;
