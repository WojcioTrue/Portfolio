import React from 'react'
import { mabryProLight } from '@/app/assets/fonts/MabryPro'
import { motion } from 'framer-motion'
const Description = () => {

  const description = ['My', 'set', 'of', 'technologies','used', 'to','build','web','apps', '.']

  return (
    <p className={`flex justify-center gap-[6px] text-[16px] w-full text-my-gray pb-6 sm:text-[24px] text-center ${mabryProLight.className}`}>
      {description.map((x, i) =>
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
            delay: 1 + i/20
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          >{x}</motion.span>
      )}
    </p>
  )
}

export default Description