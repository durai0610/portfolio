import { motion } from "framer-motion";

const Certification = () => {
  return (
    <section className="px-6 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-glass p-6 rounded-xl border border-white/10 text-center"
      >
        <h2 className="text-3xl font-bold text-primary mb-4">
          Certification
        </h2>
        <p className="text-gray-400">
          Electrical Design, Drafting & BIM Modelling<br />
          Beyond MEP Engineering Academy, Chennai<br />
          June 2025 – Present
        </p>
      </motion.div>
    </section>
  );
};

export default Certification;
