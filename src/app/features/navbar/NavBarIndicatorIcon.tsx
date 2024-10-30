import React, { useContext } from 'react'
import { NavBarContext } from './NavBar'
import { motion } from 'framer-motion'

const NavBarIndicatorIcon = () => {
  const { indicatorDesktop } = useContext(NavBarContext)
  const { desktopIPosition } = indicatorDesktop

  return (
    <motion.div
    layout
    className={`h-[30px] w-[30px] absolute`}
      style={{
        top: `${desktopIPosition.verticalMid}px`,
        left: `${desktopIPosition.horizontalMid}px`,
      }}
      transition={{
        type: 'spring',
        duration: 0.6
      }}
      >
      <motion.span
        className='absolute w-[25px] h-[25px] rounded-2xl bg-my-purple top-[50%] left-[50%]'
        initial={{
          translateY: '-50%',
          translateX: '-50%',
          opacity: 0
        }}
        animate={{
          scale: [1,1.3,1.6],
          opacity: [0, 0.3, 0]
        }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
        }}
      ></motion.span>
      <motion.span className='absolute w-[20px] h-[20px] rounded-2xl bg-my-purple top-[50%] left-[50%]' 
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
      <motion.span className='absolute w-[10px] h-[10px] rounded-2xl bg-my-purple opacity-55 top-[50%] left-[50%]' 
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

export default NavBarIndicatorIcon