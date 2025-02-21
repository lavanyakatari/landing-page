import Home from "./pages/home";
import NavBar from "./components/NavBar";
import About from "./pages/about";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
