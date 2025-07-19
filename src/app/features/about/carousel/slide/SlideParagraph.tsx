import { mabryProRegular } from "@/app/assets/fonts/MabryPro";
import { motion } from "framer-motion";
import React from "react";

const SlideParagraph = () => {
  return (
    <motion.p
      initial={{
        opacity: 0,
        scale: 1.07,
        // x: 10,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          duration: 0.35,
          delay: 0.35,
        },
      }}
      className={`mx-8 mb-9 text-my-gray ${mabryProRegular.className}`}
    >
      lorem ipsum dol...,lorem ipsum dol...,lorem ipsum dol...,,lorem ipsum
      dol...lorem ipsum dol...lorem ipsum dol...,lorem ipsum dol...,lorem ipsum
      dol...,,lorem ipsum dol...lorem ipsum dol...lorem ipsum dol...,lorem ipsum
      dol...,lorem ipsum dol...,,lorem ipsum dol...lorem ipsum dol...lorem ipsum
      dol...,lorem ipsum
    </motion.p>
  );
};

export default SlideParagraph;
