import React from "react";
import { motion } from "framer-motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section id={idName} className="max-w-7xl mx-auto relative z-0 px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Component />
        </motion.div>
      </section>
    );
  };

export { SectionWrapper };
