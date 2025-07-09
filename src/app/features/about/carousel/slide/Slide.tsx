import { AnimatePresence, motion, Variants } from 'framer-motion'

export type SlideType = {
  text: string,
  x: number,
  gap: number,
  index: number,
  active: boolean,
  visible: boolean
}

const Slide = ({ text, x, gap, index, visible }: SlideType) => {

  const motionVariants: Variants = {
    initial: (customX: number) => ({
      opacity: 0,
      x: customX,
      y: (10 * index),
      transition: { duration: 0.4 }
    }),
    animate: (customX: number) => ({
      // exit animation doesnt work with passed prop, im changing opacity without removing element from DOM
      opacity: visible ? (1 - (index * 0.25)) : 0,
      x: customX,
      y: (15 * index),
      zIndex: 10 - index,
      transition: { duration: 0.4 },
      filter: `blur(${Math.abs(index * 2)}px)`,
    }),
  };

  return (
    <AnimatePresence mode="wait">
      <motion.li
        layout
        custom={gap * index}
        variants={motionVariants}
        initial="initial"
        animate="animate"
        className='h-[100%] w-[100%] absolute flex items-center justify-center'
        style={{
        }}>
        <div className='w-[100%] h-[100%] p-2 shadow-myshadow rounded-lg  bg-gradient-to-tr from-my-gradient2/90 to-my-gradient1/85  opacity-85'
        >
          <h1 className='text-white'>White</h1>
        </div>
      </motion.li>
{/* 

style={{
          background: 'linear-gradient(45deg, rgb(191, 64, 191) 20%, rgb(127, 0, 255) 75%'
        }} */}
    </AnimatePresence>


  )
}

export default Slide