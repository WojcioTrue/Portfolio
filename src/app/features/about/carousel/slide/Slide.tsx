import { mabryProMedium, mabryProRegular } from "@/app/assets/fonts/MabryPro";
import { AnimatePresence, motion, Variants } from "framer-motion";
import CarouselOpenButton from "../CarouselOpenButton";

export type SlideType = {
  text: string;
  x: number;
  gap: number;
  index: number;
  active: boolean;
  visible: boolean;
};

const Slide = ({ text, x, gap, index, visible }: SlideType) => {
  const motionVariants: Variants = {
    initial: (customX: number) => ({
      opacity: 0,
      x: customX,
      y: 10 * index,
      transition: { duration: 0.4 },
    }),
    animate: (customX: number) => ({
      // exit animation doesnt work with passed prop, im changing opacity without removing element from DOM
      opacity: visible ? 1 - index * 0.3 : 0,
      x: customX,
      y: 10 * index,
      zIndex: 10 - index,
      transition: { duration: 0.4 },
      filter: `blur(${Math.abs(index * 2)}px)`,
    }),
  };

  return (
    <AnimatePresence mode="wait">
      <motion.li
        layout
        custom={gap * index}
        variants={motionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="absolute flex h-[100%] w-[100%] items-center justify-center"
        style={{}}
      >
        <div className="h-[100%] w-[100%] rounded-lg bg-white bg-opacity-90 px-3 py-8 shadow-myshadow">
          <h1
            className={`inline-block bg-gradient-to-tr from-my-gradient1 to-my-gradient2 bg-clip-text px-2 text-4xl tracking-header text-transparent ${mabryProMedium.className}`}
          >
            Name of project
          </h1>
          <div className="m-auto my-3 h-[1px] w-[calc(100%-16px)] bg-gradient-to-tr from-my-gradient1 to-my-gradient2 px-9"></div>
          <p className={`mx-8 text-my-gray ${mabryProRegular.className}`}>
            lorem ipsum dol...,lorem ipsum dol...,lorem ipsum dol...,,lorem
            ipsum dol...lorem ipsum dol...lorem ipsum dol...,lorem ipsum
            dol...,lorem ipsum dol...,,lorem ipsum dol...lorem ipsum dol...
          </p>
        </div>
        <div className="absolute bottom-[10px] right-[10px] flex gap-3">
          <CarouselOpenButton text={"Live view"} href={"#"} />
          <CarouselOpenButton text={undefined} href={"#"} />
        </div>
      </motion.li>
    </AnimatePresence>
  );
};

export default Slide;
