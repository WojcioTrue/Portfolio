import { FaArrowDown } from "react-icons/fa";
import { motion } from 'framer-motion';


const Button = () => {
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
      delay: 0.40,
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
    className='flex items-center text-[16px] py-[12px] px-[24px] rounded-[50px] text-white bg-gradient-to-tr from-my-gradient1 to-my-gradient2'>
    Read more
    <span className='relative h-[25px] w-[25px]'>
      <motion.div
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
      </motion.div>
      <motion.div
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
      </motion.div>
    </span>
  </motion.button>
  )
}

export default Button