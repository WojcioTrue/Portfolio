import { useContext, useEffect } from "react";
import SkillButtons from "../../buttons/ButtonsWrapper";
import { TechStackContext } from "../../../techStackContext/TechStackContext";
import DropTargetBg from "./DropTargetBg";
import TargetDescripton from "./TargetDescripton";
import {
  DimensionPropsType,
  SkillPromptContext,
} from "@/app/features/skillPrompt/SkillPromptContextProvider";
import { motion } from "framer-motion";

const DropTarget = () => {
  const { dropTarget, isOverTarget, isTarget } = useContext(TechStackContext);
  const { dropTargetProps, promptDisplay } = useContext(SkillPromptContext);
  const { setDisplay } = promptDisplay;
  const { setPosition } = dropTargetProps;
  const isOver = isOverTarget.overTarget.boolean;
  const isInside = isTarget.inTarget.boolean;
  const backgroundColor = isOver || isInside ? "bg-purple-50" : "bg-white";

  useEffect(() => {
    if (isTarget.inTarget.id !== "") {
      const initProps =
        dropTarget?.current?.getBoundingClientRect() as DimensionPropsType;
      const { top, right, bottom, left, width, height, x, y } = initProps;
      setPosition({ top, right, bottom, left, width, height, x, y });
      setDisplay(true);
    }
  }, [dropTarget, isTarget.inTarget.id, setDisplay, setPosition]);

  return (
    <motion.div
      className="z-10 w-[250px] rounded-lg pb-3"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
          delay: 1,
        },
      }}
      viewport={{
        once: true,
        margin: "0px 0px -100px 0px",
      }}
    >
      <TargetDescripton />
      <div
        ref={dropTarget}
        id="drag-target"
        className={`relative m-auto my-2 mb-5 h-[120px] rounded-[7px] border-[1px] border-my-lightGray shadow-myshadow transition-all duration-150 ${backgroundColor} `}
      >
        <DropTargetBg />
      </div>
      <SkillButtons />
    </motion.div>
  );
};

export default DropTarget;
