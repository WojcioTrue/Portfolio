import React, { useContext, useEffect } from 'react'
import { NavBarContext } from "../navBarContext/NavBarContextProvider"
import { motion } from 'framer-motion'

const NavBarIndicatorIcon = () => {
  const { defaultIndicatorRef, skillsIndicatorRef, aboutIndicatorRef, textIndicatorRef, somethingIndicatorRef, indicatorDesktop, navBarItems } = useContext(NavBarContext)
  const { indicatorPosition, setIndicatorPosition } = indicatorDesktop
  const { listElements } = navBarItems

  useEffect(() => {

   const assignRef = (arg: string) => {
      if (arg === 'Skills') {
        return skillsIndicatorRef
      } else if (arg === 'About') {
        return aboutIndicatorRef
      } else if (arg === 'Text') {
        return textIndicatorRef
      } else if (arg === 'Something') {
        return somethingIndicatorRef
      }
    }

    const indicatorResize = () => {
      const activeLi = listElements.filter(x => x.active === true)
      if (activeLi.length > 0) {
        const activeRef = assignRef(activeLi[0].section)
        const activeNode = activeRef?.current?.getBoundingClientRect()
        setIndicatorPosition({
          horizontalMid: activeNode!.left,
          verticalMid: 25,
        })
      } else {
        const defaultNode = defaultIndicatorRef?.current?.getBoundingClientRect()
        setIndicatorPosition({
          horizontalMid: defaultNode!.left,
          verticalMid: 25,
        })
      }
    }
    window.addEventListener('resize', () => indicatorResize())
  }, [aboutIndicatorRef, defaultIndicatorRef, listElements, setIndicatorPosition, skillsIndicatorRef, somethingIndicatorRef, textIndicatorRef])

  return (
    <motion.div
      className={`h-[30px] w-[30px] absolute hidden md:block`}
      style={{
        top: `${indicatorPosition.verticalMid}px`,
        left: `${indicatorPosition.horizontalMid}px`,
      }}
      layout
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        type: 'spring',
        duration: 0.6,
        opacity: {
          delay: 0.6,
        }
      }}
    >
      <motion.span
        className='absolute w-[25px] h-[25px] rounded-2xl bg-gradient-to-tr from-my-gradient2 to-my-gradient1 top-[50%] left-[50%]'
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
      <motion.span className='absolute w-[20px] h-[20px] rounded-2xl bg-gradient-to-tr from-my-gradient2 to-my-gradient1 top-[50%] left-[50%]'
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
      <motion.span className='absolute w-[10px] h-[10px] rounded-2xl bg-gradient-to-tr from-my-gradient2 to-my-gradient1 opacity-55 top-[50%] left-[50%]'
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