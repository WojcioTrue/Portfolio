import { motion } from "framer-motion";
import React from "react";
import { FaGithub } from "react-icons/fa";

type CarouselOpenButtonType = {
  text?: string;
  slideIndex: number;
  href: string | undefined;
  active: boolean;
};

const CarouselOpenButton = ({
  text,
  slideIndex,
  href,
  active,
}: CarouselOpenButtonType) => {
  return (
    <motion.button
      initial={{
        opacity: 0,
        scale: 1.17,
      }}
      animate={{
        scale: 1,
        filter: href === undefined ? "grayscale(1)" : "grayscale(0)",
        opacity: href === undefined ? 0.5 : 1,
        transition: {
          type: "spring",
          duration: 0.3,
          opacity: {
            delay: 0.35,
          },
          scale: {
            delay: 0.35,
          },
        },
      }}
      whileHover={{
        scale: slideIndex === 0 && href === undefined ? 1 : 1.1,
        transition: {
          delay: 0,
        },
      }}
      whileTap={{
        scale: slideIndex === 0 && href === undefined ? 1 : 0.95,
      }}
      onClick={() => slideIndex === 0 && href !== undefined && alert(href)}
      className={`h-[45px] ${slideIndex === 0 && href !== undefined ? "cursor-pointer" : "cursor-default"} rounded-md bg-transparent bg-gradient-to-tr from-my-gradient1 to-my-gradient2 px-3 text-white`}
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
