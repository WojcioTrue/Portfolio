import React, { useContext, useEffect } from 'react'
import { NavBarContext } from "../navBarContext/NavBarContextProvider"
import { motion } from 'framer-motion'
import { getIndicatorPosition } from '../navBarHooks/useDefaultIndicator'

const NavBarIndicatorIcon = () => {
  const { indicatorDesktop, navBarItems } = useContext(NavBarContext)
  const {listElements, active} = navBarItems
  const { indicatorPosition, setIndicatorPosition } = indicatorDesktop

  useEffect(() => {

  },[])

  useEffect(() => {
    const setNewPosition = () => {
      if (active === false) {
        const defaultPosition = getIndicatorPosition('default')
        setIndicatorPosition(defaultPosition)
      } else {
        const activeIndicator = listElements.filter((x) => x.active === true)
        if (activeIndicator.length === 1) {
          console.log(indicatorPosition)
          const activePosition = getIndicatorPosition(activeIndicator[0].section)
          setIndicatorPosition(activePosition)
        }
      }
    }
    window.addEventListener('resize', () =>
      setNewPosition()
    )
    return () => {
      window.removeEventListener('resize', () => setNewPosition())
    }

  }, [listElements])


  return (
    <motion.div
      className={`h-[30px] w-[30px] absolute hidden md:block`}
      style={{
        top: `${indicatorPosition.verticalMid}px`,
        left: `${indicatorPosition.horizontalMid}px`,
      }}
      layout
      transition={{
        type: 'spring',
        duration: 0.6
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