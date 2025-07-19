import { motion } from "framer-motion";
import CarouselSlideDisplay from "./CarouselSlideDisplay";

const CarouselWrapper = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          delay: 0.6,
        },
      }}
      viewport={{
        once: true,
        margin: "0px 0px -250px 0px",
      }}
      className="relative flex h-[100%] w-[100%] max-w-[1200px] flex-row justify-center"
    >
      <CarouselSlideDisplay />
    </motion.div>
  );
};

export default CarouselWrapper;
