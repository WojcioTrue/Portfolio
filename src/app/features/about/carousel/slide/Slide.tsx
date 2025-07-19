import { mabryProMedium, mabryProRegular } from "@/app/assets/fonts/MabryPro";
import { AnimatePresence, motion, Variants } from "framer-motion";
import CarouselOpenButton from "../CarouselOpenButton";
import { useContext, useEffect, useRef } from "react";
import { CarouselContext } from "../../carouselContext/CarouselContextProvider";

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
      // exit animation doesnt work with passed prop, im changing opacity without removing element from DOM
      opacity: visible ? 1 - index * 0.3 : 0,
      x: customX,
      y: 10 * index,
      zIndex: 10 - index,
      transition: { duration: 0.4 },
      filter: `blur(${Math.abs(index * 2)}px)`,
    }),
    exit: {
      opacity: 0,
      x: -10,
      y: -10,
      zIndex: 10 - index,
      transition: { duration: 0.4 },
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
          layout
          custom={20 * index}
          variants={motionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute top-0 flex items-center justify-center"
          ref={slideRef}
        >
          <div className="rounded-lg bg-white bg-opacity-90 px-3 py-8 shadow-myshadow">
            <motion.h1
              initial={{
                opacity: 0,
                scale: 1.15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  opacity: {
                    duration: 0.1,
                    delay: 0.3,
                  },
                  scale: {
                    duration: 0.1,
                    delay: 0.3,
                  },
                },
              }}
              className={`inline-block bg-gradient-to-tr from-my-gradient1 to-my-gradient2 bg-clip-text px-2 text-4xl tracking-header text-transparent ${mabryProMedium.className}`}
            >
              Name of project
            </motion.h1>
            <div className="m-auto my-3 h-[1px] w-[calc(100%-16px)] bg-gradient-to-tr from-my-gradient1 to-my-gradient2 px-9"></div>
            <p
              className={`mx-8 mb-9 text-my-gray ${mabryProRegular.className}`}
            >
              lorem ipsum dol...,lorem ipsum dol...,lorem ipsum dol...,,lorem
              ipsum dol...lorem ipsum dol...lorem ipsum dol...,lorem ipsum
              dol...,lorem ipsum dol...,,lorem ipsum dol...lorem ipsum
              dol...lorem ipsum dol...,lorem ipsum dol...,lorem ipsum
              dol...,,lorem ipsum dol...lorem ipsum dol...lorem ipsum
              dol...,lorem ipsum
            </p>
          </div>
          <div className="absolute bottom-[10px] right-[10px] flex gap-3">
            <CarouselOpenButton text={"Live view"} href={"#"} />
            <CarouselOpenButton text={undefined} href={"#"} />
          </div>
        </motion.li>
      )}
    </AnimatePresence>
  );
};

export default Slide;
