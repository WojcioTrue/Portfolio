import { mabryProRegular } from "@/app/assets/fonts/MabryPro";
import { motion } from "framer-motion";
import React from "react";

type SlideDescriptionType = {
  description: string;
};

const SlideDescription = ({ description }: SlideDescriptionType) => {
  return (
    <motion.p
      initial={{
        opacity: 0,
        scale: 1.07,
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
      className={`mx-8 mb-9 text-my-gray ${mabryProRegular.className}`}
    >
      {description}
    </motion.p>
  );
};

export default SlideDescription;
