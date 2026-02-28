import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center text-white">

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 , y: 40 }}
        animate={{ opacity: 1 , y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5}}
        className="text-center"
      >

        {/* Logo Title */}
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl"
        >
          Wanderly ✈
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-gray-300 text-lg"
        >
          Plan. Explore. Travel Smarter.
        </motion.p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => navigate("/planner")}
          className="mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold shadow-xl hover:shadow-pink-500/40"
        >
          Start Journey 🚀
        </motion.button>
      </motion.div>

      {/* Floating Background Glow */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute w-96 h-96 bg-pink-500 opacity-10 blur-3xl rounded-full top-20 left-20"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute w-96 h-96 bg-orange-500 opacity-10 blur-3xl rounded-full bottom-20 right-20"
      />
    </div>
  );
}
