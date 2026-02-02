import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="
        min-h-screen 
        flex 
        items-center 
        justify-center 
        px-6 
        pt-24
      "
    >
      <div
        className="
          max-w-7xl 
          w-full 
          grid 
          grid-cols-1 
          md:grid-cols-2 
          items-center 
          gap-12
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Esakki <span className="text-primary">Muthu</span>
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            Electrical LV & ELV Design • MEP BIM Modelling
          </p>

          <p className="mt-6 text-gray-400 max-w-xl mx-auto md:mx-0">
            Electrical Engineer experienced in LV/ELV systems, CCTV,
            Fire Alarm systems, Revit MEP BIM, and lighting simulations.
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-4 flex-wrap">
            <a
              href="/esakki-muthu-resume.pdf"
              download
              className="
                px-6 py-3 
                bg-primary 
                text-black 
                rounded-lg 
                font-semibold 
                hover:scale-110 
                transition
              "
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="
                px-6 py-3 
                border 
                border-primary 
                rounded-lg 
                hover:bg-primary 
                hover:text-black 
                transition
              "
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/profile.jpg"
            alt="Esakki Muthu"
            className="
              w-72 
              h-72 
              md:w-80 
              md:h-80 
              rounded-full 
              object-cover 
              border-4 
              border-primary 
              shadow-[0_0_40px_rgba(56,189,248,0.6)] 
              animate-float
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
