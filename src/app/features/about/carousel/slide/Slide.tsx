import { AnimatePresence, motion, Variants } from "framer-motion";
import CarouselOpenButton from "../CarouselOpenButton";
import { useContext, useEffect, useRef } from "react";
import { CarouselContext } from "../../carouselContext/CarouselContextProvider";
import SlideHeader from "./SlideHeader";
import SlideLine from "./SlideLine";
import SlideParagraph from "./SlideParagraph";

export type SlideType = {
  text: string;
  index: number;
  active: boolean;
  visible: boolean;
};

const Slide = ({ text, index, visible }: SlideType) => {
  const { carouseElementsArr } = useContext(CarouselContext);
  const { array, setArray } = carouseElementsArr;
  const slideRef = useRef<HTMLLIElement | null>(null);

  const motionVariants: Variants = {
    initial: {
      opacity: 0,
      x: -10,
      y: -10,
      transition: { duration: 0 },
      filter: `blur(2px)`,
    },
    animate: (customX: number) => ({
      opacity: visible ? 1 - index * 0.3 : 0,
      x: customX,
      y: 10 * index,
      zIndex: 10 - index,
      transition: { duration: 0.3 },
      filter: `blur(${Math.abs(index * 2)}px)`,
    }),
    exit: {
      opacity: 0,
      x: -10,
      y: -10,
      zIndex: 10 - index,
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    const updateHeight = () => {
      // all elements have same height, so trigger function just once
      if (index === 0) {
        const slideHeight = Number(
          slideRef.current?.getBoundingClientRect().height!.toFixed(0),
        );
        const newArr = { ...array, height: slideHeight };
        setArray(newArr);
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.li
          custom={20 * index}
          variants={motionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute top-0 flex items-center justify-center"
          ref={slideRef}
        >
          <div className="rounded-lg bg-white bg-opacity-90 px-3 py-8 shadow-myshadow">
            <SlideHeader />
            <SlideLine />
            <SlideParagraph />
          </div>
          <div className="absolute bottom-[10px] right-[10px] flex gap-3">
            <CarouselOpenButton text={"Live view"} slideIndex={index} href={"#"} />
            <CarouselOpenButton text={undefined} slideIndex={index} href={"#"} />
          </div>
        </motion.li>
      )}
    </AnimatePresence>
  );
};

export default Slide;
