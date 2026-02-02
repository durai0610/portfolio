import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-dark flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.h1
          animate={{ opacity: [0, 1, 0.6, 1] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="text-4xl font-bold text-primary"
        >
          Esakki Muthu
        </motion.h1>
        <p className="text-gray-400 mt-2 tracking-widest">
          ELECTRICAL DESIGN AND MEP MODELLING
        </p>
      </motion.div>
    </div>
  );
};

export default Loader;
