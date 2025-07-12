import { motion } from "framer-motion";
import React from "react";
import { HiOutlineXMark } from "react-icons/hi2";

const CarouselOpenButton = () => {
  return (
    <motion.button
      initial={{
        opacity: 0,
        scale: 1.6,
        zIndex: 100,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          opacity: {
            duration: 0.2,
            delay: 0.3,
          },
          scale: {
            duration: 0.2,
            delay: 0.3,
          },
        },
      }}
      exit={{
        scale: 1.6,
        opacity: 0,
      }}
      className="absolute bottom-[10px] right-[10px] h-[45px] rounded-md bg-transparent bg-gradient-to-tr from-my-gradient1 to-my-gradient2 px-3 cursor-pointer text-white"
      type="button"
      aria-controls="carousel_skill_open"
      aria-expanded="false"
      aria-label="carousel_skill_open"
    >
      {"Text "}
    </motion.button>
  );
};

export default CarouselOpenButton;
