import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'


export type SlideType = {
  text: string,
  x: number,
  gap: number,
  index: number,
  active: boolean,
  visible: boolean
}

const Slide = ({ text, x, gap, index, active, visible }: SlideType) => {


  return (
    <AnimatePresence>
      {visible && <motion.li
        layout
        initial={{
          transform: `translateX(${x + (gap * index)}px)`
        }}
        animate={{
          transform: `translateX(${x + (gap * index)}px)`
        }}
        transition={{
          duration: 0.2,
        }}
        className='h-[100%] w-[100%] absolute flex items-center justify-center'
        style={{

        }}>
        <div className='bg-yellow-500 w-[100%] h-[100%]'
        >{text} {`${active}`}
        </div>
      </motion.li>}
    </AnimatePresence>


  )
}

export default Slide