import { motion } from 'framer-motion';
import Header from './Header';
import Description from './Description';
import Button from './Button';
import IconsWrapper from './backgroundIcons/IconsWrapper';
import { createContext, useEffect, useState } from 'react';
import { SetStateAction, Dispatch } from "react"

export const HoverContext = createContext<{
  hover: boolean,
  setHover: Dispatch<SetStateAction<boolean>>
}>
  ({
    hover: false,
    setHover: () => { }
  })

const MainText = () => {
  const [hover, setHover] = useState(false)

  return (
    <HoverContext.Provider value={{
      hover,
      setHover
    }}>
      <motion.div
        layout
        initial={{
          opacity: 0,
          translateX: '-20px'
        }}
        animate={{
          opacity: 1,
          translateX: '0px'
        }}
        transition={{
          duration: 0.3,
          type: "Tween"
        }}
        className='max-w-[1000px] relative w-full flex flex-col flex-nowrap items-center bg-opacity-70 px-10 py-8 rounded-xl z-10'>
        <Header />
        <Description />
        <Button />
        <IconsWrapper />
      </motion.div>
    </HoverContext.Provider>

  )
}

export default MainText