import { mabryProMedium } from "@/app/assets/fonts/MabryPro";
import { motion } from "framer-motion";
import React from "react";

const SlideHeader = () => {
  return (
    <motion.h1
      className={`inline-block bg-gradient-to-tr from-my-gradient1 to-my-gradient2 bg-clip-text px-2 text-4xl tracking-header text-transparent ${mabryProMedium.className}`}
    >
      Name of project
    </motion.h1>
  );
};

export default SlideHeader;
