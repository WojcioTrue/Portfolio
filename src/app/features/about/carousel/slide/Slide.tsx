import { AnimatePresence, motion, useMotionValue, Variants } from 'framer-motion'

export type SlideType = {
  text: string,
  x: number,
  gap: number,
  index: number,
  active: boolean,
  visible: boolean
}

const Slide = ({ text, x, gap, index, active, visible }: SlideType) => {

  const motionVariants: Variants = {
    initial: (customX: number) => ({
      opacity: 0,
      x: customX,
      y: (10 * index),
      transition: { duration: 0.4 }
    }),
    animate: (customX: number) => ({
      // exit animation doesnt work with passed prop, im changing opacity without removing element from DOM
      opacity: visible ? (1 - (index * 0.35)) : 0,
      x: customX,
      y: (10 * index),
      zIndex: 10 - index,
      transition: { duration: 0.4 },
      filter: `blur(${index * 2}px)`,
    }),
  };

  return (
    <AnimatePresence mode="wait">
      <motion.li
        layout
        custom={x - (gap * index)}
        variants={motionVariants}
        initial="initial"
        animate="animate"
        className='h-[100%] w-[100%] absolute flex items-center justify-center'
        style={{
        }}>
        <div className='
                w-[100%] 
                h-[100%] 
               bg-white
                 border-[1.5px]
                border-my-purple
                border-opacity-15
                shadow-myshadow 
                rounded-lg '
        >{text} {`${x - (gap * index)}`}
        </div>
      </motion.li>

    </AnimatePresence>


  )
}

export default Slide