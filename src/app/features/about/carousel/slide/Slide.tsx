import { mabryProMedium, mabryProRegular } from '@/app/assets/fonts/MabryPro';
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
      opacity: visible ? (1 - (index * 0.3)) : 0,
      x: customX,
      y: (10 * index),
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
        <div className='w-[100%] h-[100%] py-8 px-3 shadow-myshadow rounded-lg bg-white bg-opacity-90'
        >
          {/* bg-gradient-to-tr 
                    from-my-gradient1
                    to-my-gradient2 
                    inline-block 
                    text-transparent 
                    bg-clip-text  */}
          <h1 className={`bg-gradient-to-tr 
                    from-my-gradient1
                    to-my-gradient2 
                    inline-block 
                    text-transparent 
                    bg-clip-text 
                    tracking-header px-2 text-4xl ${mabryProMedium.className}`}>Name of project</h1>
          <div className='w-[calc(100%-16px)] h-[1px] bg-gradient-to-tr from-my-gradient1 to-my-gradient2 px-9 m-auto my-3'></div>
          <p className={`mx-8 text-my-gray
    ${mabryProRegular.className}`}>lorem ipsum dol...,lorem ipsum dol...,lorem ipsum dol...,,lorem ipsum dol...lorem ipsum dol...lorem ipsum dol...,lorem ipsum dol...,lorem ipsum dol...,,lorem ipsum dol...lorem ipsum dol...</p>
        </div>
      </motion.li>
    </AnimatePresence>


  )
}

export default Slide