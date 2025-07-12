import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { TechStackContext } from "../../../techStackContext/TechStackContext";

const DropTargetBg = () => {
  const { isDragged, isTarget } = useContext(TechStackContext);
  const dragged = isDragged.dragged;
  const inTarget = isTarget.inTarget.boolean;

  //condition if element is either dragged or inside DropTarget
  const dragOrInside = dragged || inTarget;

  return (
    <AnimatePresence>
      {dragOrInside && (
        <>
          <motion.div
            className="absolute left-[50%] top-[50%] -z-10 h-full w-full rounded-[7px] bg-gradient-to-tr from-my-gradient2 to-my-gradient1"
            initial={{
              translateY: "-50%",
              translateX: "-50%",
              opacity: 0,
            }}
            animate={{
              scale: [1, 1.03, 1.06],
              opacity: [0, 0.16, 0],
              transition: {
                delay: 0.3,
                duration: 1.5,
                ease: "linear",
                repeat: Infinity,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: {
                duration: 2,
                ease: "linear",
              },
            }}
          ></motion.div>
          <motion.div
            className="absolute left-[50%] top-[50%] -z-10 h-full w-full rounded-[7px] bg-gradient-to-tr from-my-gradient2 to-my-gradient1"
            initial={{
              translateY: "-50%",
              translateX: "-50%",
              opacity: 0,
            }}
            animate={{
              scale: [1, 1.06, 1.09],
              opacity: [0, 0.12, 0],
              transition: {
                delay: 0.3,
                duration: 1.5,
                ease: "linear",
                repeat: Infinity,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: {
                duration: 2,
                ease: "linear",
              },
            }}
          ></motion.div>
          <motion.div
            className="absolute left-[50%] top-[50%] -z-10 h-full w-full rounded-[7px] bg-gradient-to-tr from-my-gradient2 to-my-gradient1"
            initial={{
              translateY: "-50%",
              translateX: "-50%",
              opacity: 0,
            }}
            animate={{
              scale: [1, 1.09, 1.2],
              opacity: [0, 0.08, 0],
              transition: {
                delay: 0.3,
                duration: 1.5,
                ease: "linear",
                repeat: Infinity,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: {
                duration: 2,
                ease: "linear",
              },
            }}
          ></motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DropTargetBg;
