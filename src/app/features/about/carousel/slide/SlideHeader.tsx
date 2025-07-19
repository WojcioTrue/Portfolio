import { mabryProMedium } from "@/app/assets/fonts/MabryPro";
import { motion } from "framer-motion";
import React from "react";

const SlideHeader = () => {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        scale: 1.15,
        // x: 10,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        // x: 0,
        transition: {
          type: "spring",
          duration: 0.2,
          delay: 0.3,
        },
      }}
      className={`inline-block bg-gradient-to-tr from-my-gradient1 to-my-gradient2 bg-clip-text px-2 text-4xl tracking-header text-transparent ${mabryProMedium.className}`}
    >
      Name of project
    </motion.h1>
  );
};

export default SlideHeader;
