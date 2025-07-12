"use client";
import React, { useContext } from "react";
import Icon from "./Icon";
import { TechStackContext } from "../../techStackContext/TechStackContext";
import DropTarget from "./dropTarget/DropTarget";
import { motion } from "framer-motion";

const SkillsGrid = () => {
  const { constraintDrag, skillArray } = useContext(TechStackContext);
  const constDrag = constraintDrag;
  const { array } = skillArray;

  return (
    <div
      id="drag-component"
      ref={constDrag}
      className="relative m-0 flex w-[300px] flex-col items-center gap-4 lg:w-[900px] lg:flex-row lg:items-center lg:justify-center"
    >
      <motion.div
        layout
        className="mx-2 grid h-[230px] w-[250px] grid-cols-3 grid-rows-3 items-center justify-items-center gap-[1px] rounded-[7px] bg-white py-2"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.6,
          },
        }}
        viewport={{
          once: true,
          margin: "0px 0px -100px 0px",
        }}
      >
        {array.map((x, i) => (
          <Icon
            key={i}
            dragElement={x.id}
            imgSrc={x.src}
            whiteImgSrc={x.whiteSrc}
            text={x.text}
          />
        ))}
      </motion.div>
      <DropTarget />
    </div>
  );
};

export default SkillsGrid;
