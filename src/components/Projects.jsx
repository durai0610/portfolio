import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "CCTV Schematic Diagram",
    img: "/projects/cctv-schematic.png",
    desc: "Schematic layout showing CCTV wiring and device connectivity."
  },
  {
    title: "CCTV Layout Sheet",
    img: "/projects/cctv-sheet.png",
    desc: "Camera placement ensuring full surveillance coverage."
  },
  {
    title: "DB to Load Connection",
    img: "/projects/db-to-load.png",
    desc: "Distribution board to load wiring layout."
  },
  {
    title: "Detectors Connection Diagram",
    img: "/projects/detectors-connection.png",
    desc: "Fire alarm detector interconnections."
  },
  {
    title: "Detectors Schematic Diagram",
    img: "/projects/detectors-schematic.png",
    desc: "Schematic wiring for fire alarm detectors."
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Projects = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-primary mb-14"
      >
        Projects
      </motion.h2>

      {/* ANIMATED GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={item}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{
              scale: 1.06,
              boxShadow: "0px 0px 35px rgba(56,189,248,0.35)",
            }}
            onClick={() => setActive(p)}
            className="bg-glass backdrop-blur border border-white/10 rounded-xl overflow-hidden cursor-pointer"
          >
            <img
              src={p.img}
              alt={p.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-primary font-semibold text-lg">
                {p.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                {p.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.img
              src={active.img}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              className="max-h-[90vh] rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
