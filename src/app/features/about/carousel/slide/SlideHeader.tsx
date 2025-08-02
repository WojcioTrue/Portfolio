import { mabryProMedium } from "@/app/assets/fonts/MabryPro";
import { motion } from "framer-motion";
import React from "react";

type SlideHeaderType = {
  header: string;
};

const SlideHeader = ({ header }: SlideHeaderType) => {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        scale: 1.15,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          duration: 0.3,
          delay: 0.3,
        },
      }}
      className={`inline-block bg-gradient-to-tr from-my-gradient1 to-my-gradient2 bg-clip-text px-2 text-4xl tracking-header text-transparent ${mabryProMedium.className}`}
    >
      {header}
    </motion.h1>
  );
};

export default SlideHeader;
