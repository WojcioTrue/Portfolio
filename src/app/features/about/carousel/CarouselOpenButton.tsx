import { motion } from "framer-motion";
import React from "react";
import { FaGithub } from "react-icons/fa";

type CarouselOpenButtonType = {
  text?: string;
  href: string;
};

const CarouselOpenButton = ({ text, href }: CarouselOpenButtonType) => {
  return (
    <motion.button
      initial={{
        opacity: 0,
        scale: 1.17,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          duration: 0.3,
          delay: 0.35,
        },
      }}
      whileHover={{
        scale: 1.1,
        transition: {
          delay: 0,
        },
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="h-[45px] cursor-pointer rounded-md bg-transparent bg-gradient-to-tr from-my-gradient1 to-my-gradient2 px-3 text-white"
      type="button"
      aria-controls="carousel_skill_open"
      aria-expanded="false"
      aria-label="carousel_skill_open"
    >
      {text === undefined && <FaGithub size={25} />}
      {text}
    </motion.button>
  );
};
export default CarouselOpenButton;
