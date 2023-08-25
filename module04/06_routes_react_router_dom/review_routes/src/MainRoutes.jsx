import { Routes, Route } from "react-router-dom";
import { ClimaTempo } from "./ClimaTempo";
import { Sobre } from "./Sobre";
import { Home } from "./Home";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/clima" element={<ClimaTempo />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
