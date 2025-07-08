import { AnimatePresence, motion, useMotionValue, Variants } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { CarouselContext } from '../../carouselContext/CarouselContextProvider'


export type SlideType = {
  text: string,
  x: number,
  gap: number,
  index: number,
  active: boolean,
  visible: boolean
}

const Slide = ({ text, x, gap, index, active, visible }: SlideType) => {
  const { carouseElementsArr } = useContext(CarouselContext)
  const { array } = carouseElementsArr
  const xValue = useMotionValue(x)

  const motionVariants: Variants = {
    initial: (customX: number) => ({
      opacity: 0,
      x: customX,
      transition: { duration: 0.4 }
    }),
    animate: (customX: number) => ({
      opacity: visible ? 1 : 0,
      x: customX,
      transition: { duration: 0.4 }
    }),
  };

  return (
    <AnimatePresence mode="wait">
      <motion.li
        layout
        custom={x}
        variants={motionVariants}
        initial="initial"
        animate="animate"
        className='h-[100%] w-[100%] absolute flex items-center justify-center'
        style={{
        }}>
        <div className='bg-yellow-500 w-[100%] h-[100%]'
        >{text} {`${x}`}
        </div>
      </motion.li>

    </AnimatePresence>


  )
}

export default Slide