import { motion } from 'framer-motion'

const spring = {
  type: "ease",
  stiffness: 700,
  damping: 30,
  duration: 1
};

const MobileIndicatorIcon = ({ active }: { active: boolean }) => {

  return (
    <motion.div
      className={`h-[30px] w-[30px] relative `}
      layout
      initial={{
        opacity: 0,
        translateX: '8px',
      }}
      animate={{ 
        opacity: active ? 1 : 0,
        translateX: active ? '0px' : '8px',
      }}
    >
      <motion.span
        className='absolute w-[20px] h-[20px] rounded-2xl bg-my-purple top-[50%] left-[50%]'
        initial={{
          translateY: '-50%',
          translateX: '-50%',
          opacity: 0
        }}
        animate={{
          scale: [1, 1.3, 1.6],
          opacity: [0, 0.3, 0]
        }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
        }}
      ></motion.span>
      <motion.span className='absolute w-[15px] h-[15px] rounded-2xl bg-my-purple top-[50%] left-[50%]'
        initial={{
          translateY: '-50%',
          translateX: '-50%',
          opacity: '40%'
        }}
        animate={{
          scale: [1.2, 0.7, 1.2],
        }}
        transition={{
          duration: 3,
          ease: "easeOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}></motion.span>
      <motion.span className='absolute w-[7px] h-[7px] rounded-2xl bg-my-purple opacity-55 top-[50%] left-[50%]'
        initial={{
          translateY: '-50%',
          translateX: '-50%',
          opacity: '70%'
        }}
        animate={{
          scale: [1.2, 0.7, 1.2],
        }}
        transition={{
          duration: 3,
          ease: "easeOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}></motion.span>
    </motion.div>
  )
}

export default MobileIndicatorIcon