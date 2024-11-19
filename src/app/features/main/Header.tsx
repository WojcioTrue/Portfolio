import React from 'react'
import { mabryProBold } from '../../../../public/fonts/mabry_pro/MabryPro'
import { motion } from 'framer-motion';

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
            className={`${mabryProBold.className} 
      text-[42px] 
      sm:text-[50px] 
      md:text-[60px] 
      xl:text-[68px] 
      2xl:text-[72px]
      text-center mb-4`}>Wojcio_True</motion.h1>
  )
}

export default Header