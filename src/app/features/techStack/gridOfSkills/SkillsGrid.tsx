import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'


const SkillsGrid = () => {
  const constraintDrag = useRef<HTMLDivElement>(null)
  const [isIn, setIsIn] = useState(false)
  return (
    <motion.div ref={constraintDrag} className='relative m-0 h-[300px] w-[300px] bg-red-500'>
      <motion.div
        className="bg-gray-600 w-[30px] h-[30px] absolute top-[70px] left-[20px] z-10"
        drag
        dragConstraints={constraintDrag}
        dragElastic={0.03}
        whileDrag={{
          scale: 1.2,
        }}
      >
      </motion.div>
        <p>{isIn.toString()}</p>
      <div className='absolute right-[10px] top-[75px] h-[100px] w-[100px] bg-white'>

      </div>
    </motion.div>

  )
}

export default SkillsGrid