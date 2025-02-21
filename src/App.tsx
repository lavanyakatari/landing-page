import Home from "./pages/home";
import Register from "./pages/register";
import NavBar from "./components/NavBar";
import About from "./pages/about";
import Login from "./pages/login";
import Resume from "./pages/resume";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </div>
  );
};

export default App;
