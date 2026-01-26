import { motion } from "framer-motion";

const skills = [
  "LV / ELV System Design",
  "CCTV & Fire Alarm Systems",
  "Cable Sizing & Load Calculation",
  "Single Line Diagrams (SLD)",
  "Revit MEP BIM",
  "AutoCAD",
  "RELUX Lighting Simulation",
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-primary mb-12">
        Skills
      </h2>
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-glass backdrop-blur border border-white/10 rounded-xl p-4 text-center"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
