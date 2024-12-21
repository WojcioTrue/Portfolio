import React from 'react'
import { motion } from 'framer-motion';
import { mabryProBold } from '@/app/assets/fonts/MabryPro';
const Header = () => {
  return (
    <motion.h1
            initial={{
              opacity: 0,
              translateX: '-10px'
            }}
            animate={{
              opacity: 1,
              translateX: '0px'
            }}
            transition={{
              duration: 0.3,
              delay: 0.2,
              type: "Tween"
            }}
            className={` 
      text-[42px] 
      sm:text-[50px] 
      md:text-[60px] 
      xl:text-[68px] 
      2xl:text-[72px]
      text-center mb-4
      ${mabryProBold.className}`}>Wojcio_True</motion.h1>
  )
}

export default Header