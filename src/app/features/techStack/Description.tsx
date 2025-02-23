import React from 'react'
import { mabryProLight } from '@/app/assets/fonts/MabryPro'
import { motion } from 'framer-motion'
const Description = () => {

  const description = 'My set of technologies used to build web apps .'

  return (
    <p className={`flex justify-center 
    gap-[6px] 
    text-header-desc-default
    sm:text-header-desc-sm-default
  text-my-gray
    w-full pb-6 tracking-description ${mabryProLight.className}`}>
      {description.split(' ').map((x, i) =>
        <motion.span
        className='inline-block'
          key={i}
          initial={{
            opacity: 0,
            y: '10px',
            x: '-2px'
          }}
          whileInView={{
            opacity: 1,
            y: '0px',
            x: '0px'
          }}
          transition={{
            delay: 1 + i/15
          }}
          viewport={{
            once: true,
            margin: '0px 0px -100px 0px'
          }}
          >{x}</motion.span>
      )}
    </p>
  )
}

export default Description