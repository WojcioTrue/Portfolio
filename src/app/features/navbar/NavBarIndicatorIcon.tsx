import React, { useContext, useEffect } from 'react'
import { NavBarContext } from './NavBar'
import { motion } from 'framer-motion'

const NavBarIndicatorIcon = () => {
  const { indicatorDesktop, navBarItems } = useContext(NavBarContext)
  const { indicatorPosition, setIndicatorPosition } = indicatorDesktop

  useEffect(() => {
    const iDesktopPosition = (id: string) => {
      const indicatorId = document.getElementById(id)!.getBoundingClientRect()
      const horizontalMidPosition = Number((indicatorId.left).toFixed(0))
      const verticalMidPosition = Number((indicatorId.top).toFixed(0))
      setIndicatorPosition({
        horizontalMid: horizontalMidPosition,
        verticalMid: verticalMidPosition,
      })
    }
    const setNewPosition = () => {
      if (navBarItems.active === false) {
        iDesktopPosition(`desktop_indicator_default`)
      } else {
        const activeIndicator = navBarItems.listElements.filter((x) => x.active === true)
        if (activeIndicator.length === 1) {
          const indicatorName = `desktop_indicator_${activeIndicator[0].section}`
          iDesktopPosition(indicatorName)
        }
      }
    }

    window.addEventListener('resize', () =>
      setNewPosition()
    )
    return () => {
      window.removeEventListener('resize', () => setNewPosition())
    }

  }, [navBarItems.active, navBarItems.listElements, setIndicatorPosition])


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
        className='absolute w-[25px] h-[25px] rounded-2xl bg-my-purple top-[50%] left-[50%]'
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