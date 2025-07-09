import { mabryProMedium, mabryProRegular } from '@/app/assets/fonts/MabryPro';
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useEffect } from 'react';

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
      opacity: visible ? (1 - (index * 0.3)) : 0,
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
        exit="exit"
        className='h-[100%] w-[100%] absolute flex items-center justify-center'
        style={{
        }}>
        <div className='w-[100%] h-[100%] p-2 shadow-myshadow rounded-lg bg-white border-[1px] border-my-purple border-opacity-15'
        >
          <h1 className={` bg-gradient-to-tr 
                    from-my-gradient1
                    to-my-gradient2 inline-block text-transparent bg-clip-text tracking-header px-2 text-4xl ${mabryProMedium.className}`}>{text}</h1>
          <h2 className={`text-white text-4xl ${mabryProRegular.className}`}>lorem ipsum dol...</h2>
        </div>
      </motion.li>
    </AnimatePresence>


  )
}

export default Slide