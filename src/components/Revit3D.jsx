import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";


const models = [
  {
    title: "PHE Connection – 3D Model",
    img: "/3d/phe-connection.png",
    desc: "3D Revit model showing plate heat exchanger piping connections with proper routing."
  },
  {
    title: "Fire Fighting Connection – 3D Model",
    img: "/3d/fire-fighting-connection.png",
    desc: "Fire fighting piping system modelled in Revit with valves and equipment layout."
  },
  {
    title: "HVAC Water Cooled Connection – 3D Model",
    img: "/3d/hvac-water-cooled.png",
    desc: "Water-cooled HVAC system model with chilled water supply and return connections."
  },
  {
    title: "Electrical Connection – 3D Model",
    img: "/3d/electrical-connection.png",
    desc: "3D electrical routing model created in Revit showing cable tray and conduit coordination."
  }
];

const Revit3D = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="revit3d" className="px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-primary mb-14"
      >
        3D Modelling – Revit Software
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {models.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{
              scale: 1.06,
              boxShadow: "0px 0px 35px rgba(56,189,248,0.35)",
            }}
            onClick={() => setActive(m)}
            className="bg-glass backdrop-blur border border-white/10 rounded-xl overflow-hidden cursor-pointer"
          >
            <img
              src={m.img}
              alt={m.title}
              className="h-48 w-full object-contain bg-black/30"
            />

            <div className="p-5">
              <h3 className="text-primary font-semibold text-lg">
                {m.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                {m.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULLSCREEN MODAL */}
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

export default Revit3D;
