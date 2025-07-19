import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type CarouselSlideButtonType = {
  buttonClick: () => void;
  disabled: boolean;
  text: string;
};

const CarouselSlideButton = ({
  buttonClick,
  disabled,
  text,
}: CarouselSlideButtonType) => {
  return (
    <motion.button
      initial={{
        opacity: 0,
        zIndex: 100,
        scale: 1,
        left: text === "Left" ? "-20px" : undefined,
        right: text === "Right" ? "-20px" : undefined,
      }}
      animate={{
        filter: disabled ? "grayscale(1)" : "grayscale(0)",
        opacity: disabled ? 0.5 : 1,
        transition: {
          duration: 0.2,
        },
      }}
      whileHover={{
        scale: !disabled ? 1.15 : undefined,
      }}
      whileTap={{
        scale: !disabled ? 0.95 : undefined,
      }}
      onClick={() => buttonClick()}
      disabled={disabled}
      className={`absolute top-1/2 z-50 flex h-[40px] w-[40px] -translate-y-[60px] items-center justify-center overflow-hidden bg-gradient-to-tr from-my-gradient1 to-my-gradient2 rounded-[100px] border-[1px] text-white`}
    >
      {text === "Left" ? (
        <FaArrowLeft color="rgb(255,255,255)" />
      ) : text === "Right" ? (
        <FaArrowRight color="rgb(255,255,255)" />
      ) : undefined}
    </motion.button>
  );
};

export default CarouselSlideButton;
