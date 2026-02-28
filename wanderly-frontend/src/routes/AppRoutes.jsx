import { Routes, Route , useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import Planner from "../pages/Planner";
import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </AnimatePresence>
  );
}