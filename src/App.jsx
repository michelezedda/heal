import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SexualHealth from "./pages/SexualHealth";
import WeightLoss from "./pages/WeightLoss";
import HairRegrowth from "./pages/HairRegrowth";
import MentalHealth from "./pages/MentalHealth";
import Skin from "./pages/Skin";
import EverydayHealth from "./pages/EverydayHealth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sexual-health" element={<SexualHealth />} />
        <Route path="/weight-loss" element={<WeightLoss />} />
        <Route path="/hair-regrowth" element={<HairRegrowth />} />
        <Route path="/mental-health" element={<MentalHealth />} />
        <Route path="/skin" element={<Skin />} />
        <Route path="/everyday-health" element={<EverydayHealth />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
