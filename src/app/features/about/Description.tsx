import { mabryProLight } from "@/app/assets/fonts/MabryPro";
import { motion } from "framer-motion";
import React from "react";

const description = "lorem ipsum dol.. .";

const Description = () => {
  return (
    <p
      className={`flex w-full justify-center gap-[6px] pb-6 text-header-desc-default tracking-description text-my-gray sm:text-header-desc-sm-default ${mabryProLight.className}`}
    >
      {description.split(" ").map((x, i) => (
        <motion.span
          className="inline-block"
          key={i}
          initial={{
            opacity: 0,
            y: "10px",
            x: "-2px",
          }}
          whileInView={{
            opacity: 1,
            y: "0px",
            x: "0px",
            transition: {
              delay: 1 + i / 15,
            },
          }}
          viewport={{
            once: true,
            margin: "0px 0px -100px 0px",
          }}
        >
          {x}
        </motion.span>
      ))}
    </p>
  );
};

export default Description;
