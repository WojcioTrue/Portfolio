import { motion } from "framer-motion";
import React from "react";
import { HiOutlineXMark } from "react-icons/hi2";

const CarouselButton = () => {
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
      className="absolute right-[10px] top-[23px] flex h-[35px] w-[35px] items-center justify-center rounded-3xl bg-gradient-to-tr from-my-gradient1 to-my-gradient2"
      type="button"
      aria-controls="carousel_skill_open"
      aria-expanded="false"
      aria-label="carousel_skill_open"
    >
      <HiOutlineXMark size={"25px"} color="white" />
    </motion.button>
  );
};

export default CarouselButton;
