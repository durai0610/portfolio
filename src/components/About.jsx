import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-primary mb-6">About Me</h2>
        <p className="text-gray-400">
          I am an Electrical and Electronics Engineering graduate with hands-on
          experience in LV/ELV systems, CCTV, Fire Alarm systems, lighting
          simulation, and Revit MEP BIM modelling. I am passionate about
          delivering accurate and efficient electrical design solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
