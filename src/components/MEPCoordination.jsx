import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const mepModels = [
    {
    title: "MEP Services Without Architecture",
    img: "/mep/mep-without-architecture.png",
    desc: "Isolated MEP services model showing detailed routing of electrical, HVAC, and fire systems."
  },
  {
    title: "MEP Services With Architecture",
    img: "/mep/mep-with-architecture.png",
    desc: "Coordinated MEP services model integrated with architectural elements for clash-free design."
  },
];

const MEPCoordination = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="mep" className="px-6 py-24">
      {/* TITLE WITH ANIMATION + BACKGROUND GLOW (NO UNDERLINE) */}
      <div className="relative text-center mb-16">
        <div className="absolute inset-0 flex justify-center -z-10">
          <div className="w-96 h-28 bg-primary/20 blur-[120px] rounded-full"></div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-primary tracking-wide"
        >
          MEP Services – Coordination Model
        </motion.h2>
      </div>

      {/* CARDS */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          show: { transition: { staggerChildren: 0.2 } },
        }}
        className="grid sm:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >
        {mepModels.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.06,
              boxShadow: "0px 0px 35px rgba(56,189,248,0.35)",
            }}
            onClick={() => setActive(item)}
            className="bg-glass backdrop-blur border border-white/10 rounded-xl overflow-hidden cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-56 w-full object-contain bg-black/30"
            />

            <div className="p-5">
              <h3 className="text-primary font-semibold text-lg">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

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

export default MEPCoordination;
