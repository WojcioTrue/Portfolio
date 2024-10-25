"use client";
import React from 'react'
import { mabryProRegular } from '@/app/assets/fonts/mabry_pro/MabryPro'
import { FaArrowDown } from "react-icons/fa";
import { motion } from 'framer-motion';
import Header from './Header';
import Description from './Description';

const Main = () => {
  return (
    <div className="relative h-full bg-gradient-to-br from-my-lightBackground from-10% via-white">
      <div className='h-full w-full max-w-[1200px] px-8 flex justify-center items-center ml:justify-start m-auto'>
        <motion.div
          layout
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
            type: "Tween"
          }}
          className='max-w-[600px] flex flex-col flex-nowrap items-center ml:items-start bg-white bg-opacity-20 px-10 py-8 shadow-myshadow rounded-xl'>
          <Header/>
          <Description/>
          <motion.button
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
              delay: 0.40,
              type: "Tween"
            }}
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
                  opacity: [0, 0.4, 0],
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
        </motion.div>
      </div>

    </div>
  )
}

export default Main