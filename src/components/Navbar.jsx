import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "family", label: "Family Creation" },
  { id: "revit3d", label: "3D Modelling" },
  { id: "mep", label: "MEP Coordination" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-primary cursor-pointer"
        >
          Esakki Muthu
        </motion.span>

        {/* DESKTOP MENU (ONLY LARGE SCREENS) */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="relative text-gray-300 hover:text-primary transition group"
            >
              {link.label}
              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* MOBILE + TABLET BUTTON */}
        <button
          className="lg:hidden text-3xl text-primary"
          onClick={() => setOpen(prev => !prev)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE + TABLET MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden bg-black/85 backdrop-blur-md"
          >
            <div className="px-6 py-4 space-y-2">
              {links.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="block py-3 text-gray-300 hover:text-primary border-b border-white/10"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
