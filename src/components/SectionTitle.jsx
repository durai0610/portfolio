import { motion } from "framer-motion";

const SectionTitle = ({ title }) => {
  return (
    <div className="relative text-center mb-16">
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center -z-10">
        <div className="w-72 h-20 bg-primary/20 blur-[90px] rounded-full"></div>
      </div>

      {/* Animated Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold text-primary tracking-wide"
      >
        {title}
      </motion.h2>

      {/* Animated underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="h-1 bg-primary mx-auto mt-4 rounded-full"
      />
    </div>
  );
};

export default SectionTitle;
