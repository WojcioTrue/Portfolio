"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Header from './Header';
import Description from './Description';
import Button from './Button';

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
          <Button/>
        </motion.div>
      </div>

    </div>
  )
}

export default Main