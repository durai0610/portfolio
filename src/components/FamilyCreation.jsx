import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const families = [
  {
    title: "6 Module Switch Board",
    img: "/family/module-switch-board.png",
    desc: "Parametric electrical switch board family created for modular installations."
  },
  {
    title: "Fire Fighting Cylinder",
    img: "/family/fire-fighting-cylinder.png",
    desc: "BIM family representing fire fighting cylinder with proper dimensions."
  },
  {
    title: "Over Head Tank",
    img: "/family/over-head-tank.png",
    desc: "Reusable overhead water tank family designed for plumbing coordination."
  },
  {
    title: "Parametric Inspection Chamber",
    img: "/family/inspection-chamber.png",
    desc: "Parametric chamber family allowing size and level adjustments."
  },
  {
    title: "Plenum Box",
    img: "/family/plenum-box.png",
    desc: "HVAC plenum box family with inlet and outlet connectivity."
  },
  {
    title: "Stepdown Oil Transformer",
    img: "/family/stepdown-transformer.png",
    desc: "Detailed transformer family with cooling fins and terminals."
  },
  {
    title: "Tree Pole DB",
    img: "/family/tree-pole-db.png",
    desc: "Outdoor distribution board family mounted on pole structure."
  },
];

const FamilyCreation = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="family" className="px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-primary mb-14"
      >
        Family Creation
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {families.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            whileHover={{
              scale: 1.06,
              boxShadow: "0px 0px 35px rgba(56,189,248,0.35)",
            }}
            onClick={() => setActive(f)}
            className="bg-glass backdrop-blur border border-white/10 rounded-xl overflow-hidden cursor-pointer"
          >
            <img
              src={f.img}
              alt={f.title}
              className="h-48 w-full object-contain bg-black/30"
            />
            <div className="p-5">
              <h3 className="text-primary font-semibold text-lg">
                {f.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                {f.desc}
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

export default FamilyCreation;
