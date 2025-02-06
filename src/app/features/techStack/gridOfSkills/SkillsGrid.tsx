'use client'
import { motion, useDragControls } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import detectElementOverflow from 'detect-element-overflow'

const SkillsGrid = () => {
  const constraintDrag = useRef<HTMLDivElement>(null)
  const [isIn, setIsIn] = useState(false)
  const [firstEnter, setFirstEnter] = useState(false)
  const controls = useDragControls()


  useEffect(() => {
    if (isIn) { setFirstEnter(true) }
  }, [isIn])

  // useEffect(() => {
  //   console.log(isIn)
  //   console.log(firstEnter)
  // },[firstEnter])

  const dragDrop = () => {
    if(firstEnter) return ;
    if (!isIn) {console.log('dragging'); return;}
    const parent = document.getElementById('drag-component')
    const element = document.getElementById('drag-element')!
    const target = document.getElementById('drag-target')!
    if (isIn) {
      console.log('xxx')
      const throwawayNode = parent?.removeChild(element)!
      target.appendChild(throwawayNode)
      return;
    }
  }

  const detectEnter = () => {
    const parent = document.getElementById('drag-component')
    const element = document.getElementById('drag-element')!
    const target = document.getElementById('drag-target')!
    const collisions = detectElementOverflow(element, target);
    collisions.overflowLeft >= 15 ?
      setIsIn(false) :
      setIsIn(true)

  }


  return (
    <div id="drag-component" ref={constraintDrag} className='relative m-0 h-[300px] w-[300px] bg-red-500'>
      <motion.div
        id="drag-element"
        onDrag={() => {
          detectEnter()
          dragDrop()
        }}
        className={`
        bg-white 
        w-[30px] 
        h-[30px] 
        absolute 
        z-10`}
        drag={!firstEnter}
        dragConstraints={constraintDrag}
        dragControls={controls}
        dragElastic={0.03}
        whileDrag={{
          scale: 1.2,
        }}
      >
        X
      </motion.div>
      <p>{isIn.toString()}</p>
      <div id="drag-target"

        className={`absolute right-[10px] top-[75px] h-[100px] w-[100px] ${isIn ? 'bg-slate-600' : 'bg-blue-900'}`}>

      </div>
    </div>

  )
}

export default SkillsGrid