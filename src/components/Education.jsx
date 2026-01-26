import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-primary mb-10">
        Education
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-glass p-6 rounded-xl border border-white/10"
        >
          <h3 className="font-semibold">
            B.E – Electrical & Electronics Engineering
          </h3>
          <p className="text-gray-400">
            KIT – Kalaignarkarunanidhi Institute of Technology (2021–2025)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-glass p-6 rounded-xl border border-white/10"
        >
          <h3 className="font-semibold">Higher Secondary Certificate</h3>
          <p className="text-gray-400">
            Darussalam Higher Secondary School (2020–2021)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
