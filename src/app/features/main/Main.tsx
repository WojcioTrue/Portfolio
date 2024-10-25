"use client";
import React from 'react'
import { mabryProBold, mabryProRegular } from '@/app/assets/fonts/mabry_pro/MabryPro'
import { FaArrowDown } from "react-icons/fa";
// import { motion } from 'framer-motion';
import * as motion from "framer-motion/client"

const Main = () => {
  return (
    <div className="relative h-full bg-gradient-to-br from-my-lightBackground from-10% via-white">
      <div className='h-full w-full max-w-[1200px] px-8 flex justify-center items-center ml:justify-start m-auto'>
        <div className='max-w-[600px] flex flex-col flex-nowrap items-center ml:items-start bg-white bg-opacity-20 px-10 py-8 shadow-myshadow rounded-xl'>
          <h1 className={`${mabryProBold.className} 
      text-[42px] 
      sm:text-[50px] 
      md:text-[60px] 
      xl:text-[68px] 
      2xl:text-[72px]
      text-center mb-4`}>Wojcio_True</h1>
          <p className={`text-[16px] text-my-gray mb-4 sm:text-[24px] text-center ml:text-left ${mabryProRegular.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.2 },
            }}
            className='flex items-center text-[16px] py-[12px] px-[24px] rounded-[50px] text-white bg-gradient-to-tr from-my-gradient1 to-my-gradient2'>
            Read more
            <span className='relative h-[25px] w-[25px]'>
              <motion.div
                className='absolute right-[0px] top-[50%]'
                initial={{
                  translateY: '-50%',
                }}
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <FaArrowDown />
              </motion.div>
              <motion.div
                className='absolute right-[0px] top-[50%]'
                initial={{
                  translateY: '-50%',
                }}
                animate={{
                  scale: [1, 2, 3],
                  opacity: [0,0.4, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <FaArrowDown />
              </motion.div>
            </span>
          </motion.button>
        </div>
      </div>

    </div>
  )
}

export default Main