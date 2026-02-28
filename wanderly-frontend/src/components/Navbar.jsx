import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full backdrop-blur-lg bg-black/40 border-b border-gray-800 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4 text-white">

        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
          Wanderly ✈
        </h1>

        {/* Links */}
        <div className="flex gap-8">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-pink-400 transition ${
                isActive ? "text-pink-400 font-semibold" : "text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/planner"
            className={({ isActive }) =>
              `hover:text-pink-400 transition ${
                isActive ? "text-pink-400 font-semibold" : "text-white"
              }`
            }
          >
            Planner
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `hover:text-pink-400 transition ${
                isActive ? "text-pink-400 font-semibold" : "text-white"
              }`
            }
          >
            Dashboard
          </NavLink>

        </div>
      </div>
    </motion.nav>
  );
}