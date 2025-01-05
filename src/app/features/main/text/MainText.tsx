import React from 'react'
import { motion } from 'framer-motion';
import Header from './Header';
import Description from './Description';
import Button from './Button';
import IconsWrapper from './backgroundIcons/IconsWrapper';

const MainText = () => {
  return (
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
          className='max-w-[900px] flex flex-col flex-nowrap items-center bg-opacity-70 px-10 py-8 rounded-xl'>
          <Header />
          <Description />
          <Button />
          <IconsWrapper />
        </motion.div>
  )
}

export default MainText