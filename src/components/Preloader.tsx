import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
      <motion.div
        className="w-16 h-16 rounded-full bg-blue-500 mb-8"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 360, 0],
          borderRadius: ["20%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
      >
        Under Construction
      </motion.h1>
      <motion.p
        className="text-lg mt-4 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 1] }}
        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      >
        We’ll be right back
      </motion.p>
    </div>
  );
};

export default Preloader;
