import { motion } from "framer-motion";
import React from "react";

const SlideLine = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.05,
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
      className="m-auto my-3 h-[1px] w-[calc(100%-16px)] bg-gradient-to-tr from-my-gradient1 to-my-gradient2 px-9"
    ></motion.div>
  );
};

export default SlideLine;
