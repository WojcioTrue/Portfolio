import { FaArrowDown } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useContext } from "react";
import { HoverContext } from "./MainText";

const Button = () => {
  const {setHover} = useContext(HoverContext)
  return (
    <motion.button
    initial={{
      opacity: 0,
      translateX: '-10px'
    }}
    animate={{
      opacity: 1,
      translateX: '0px'
    }}
    transition={{
      duration: 0.3,
      type: "Tween"
    }}
    whileHover={{
      scale: 1.1,
      transition: { duration: 0.2 },
    }}
    whileTap={{
      scale: 0.9,
      transition: { duration: 0.2 },
    }}
    className='flex items-center text-[16px] py-[12px] px-[24px] rounded-[50px] text-white bg-gradient-to-tr from-my-gradient1 to-my-gradient2'
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    >
    Read more
    <span className='relative h-[25px] w-[25px]'>
      <motion.span
        className='absolute right-[0px] top-[50%]'
        initial={{
          translateY: '-50%',
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <FaArrowDown />
      </motion.span>
      <motion.span
        className='absolute right-[0px] top-[50%]'
        initial={{
          translateY: '-50%',
        }}
        animate={{
          scale: [1, 2, 3],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <FaArrowDown />
      </motion.span>
    </span>
  </motion.button>
  )
}

export default Button