import React from 'react'
import { mabryProLight } from '@/app/assets/fonts/MabryPro'
import { motion } from 'framer-motion'
const Description = () => {

  const description = ['My', ' ', 'set', ' ', 'of', ' ', 'technologies', ' ', 'used', ' ', 'to', ' ', 'build', ' ', 'web', ' ', 'apps', '.']

  return (
    <p className={`text-[16px] w-full text-my-gray pb-6 sm:text-[24px] text-center ${mabryProLight.className}`}>
      {description.map((x, i) =>
        <motion.span
          key={i}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1 + i/20
          }}
          >{x}</motion.span>
      )}
    </p>
  )
}

export default Description