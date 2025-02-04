import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import detectElementOverflow from 'detect-element-overflow'


const SkillsGrid = () => {
  const constraintDrag = useRef<HTMLDivElement>(null)
  const [isIn, setIsIn] = useState(false)

  useEffect(() => {

  })

  return (
    <div ref={constraintDrag} className='relative m-0 h-[300px] w-[300px] bg-red-500'>
      <motion.div
        id="drop-element"
        onDrag={() => {
          const element = document.getElementById('drop-element')!
          const target = document.getElementById('drop-target')!
          const collisions = detectElementOverflow(element, target);
          collisions.overflowLeft >= 15 ?
            setIsIn(false) : setIsIn(true)

        }}
        className="bg-slate-600 w-[30px] h-[30px] absolute top-[70px] left-[20px] z-10"
        drag
        dragConstraints={constraintDrag}
        dragElastic={0.03}
        whileDrag={{
          scale: 1.2,
        }}
      >
        X
      </motion.div>
      <p>{isIn.toString()}</p>
      <div id="drop-target"

        className='absolute right-[10px] top-[75px] h-[100px] w-[100px] bg-white'>

      </div>
    </div>

  )
}

export default SkillsGrid