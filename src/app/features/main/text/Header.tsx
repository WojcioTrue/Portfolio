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
      text-header-my-default 
      sm:text-header-my-sm 
      md:text-header-my-md 
      xl:text-header-my-xl 
      2xl:text-header-my-2xl 
      text-center
      tracking-header
      z-10
      ${mabryProBold.className}`}>Wojcio_True</motion.h1>
  )
}

export default Header