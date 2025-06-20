import { Routes, Route } from "react-router-dom";
import Home from "../pages/page";
import SimulatorPage from "../pages/simulador/page";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/simulador" element={<SimulatorPage />} />
    </Routes>
  );
};

export default AppRouter;
