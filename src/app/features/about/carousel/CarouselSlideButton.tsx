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
        zIndex: 100,
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
      onClick={() => buttonClick()}
      disabled={disabled}
      className={`absolute top-1/2 z-50 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center overflow-hidden rounded-[100px] border-[1px] border-my-purple text-white`}
    >
      {text === "Left" ? (
        <FaArrowLeft color="rgb(116, 41, 245)" />
      ) : text === "Right" ? (
        <FaArrowRight color="rgb(116, 41, 245)" />
      ) : undefined}
    </motion.button>
  );
};

export default CarouselSlideButton;
