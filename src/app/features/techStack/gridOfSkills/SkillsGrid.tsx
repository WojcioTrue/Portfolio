'use client'
import { motion, useAnimationControls, useDragControls } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import detectElementOverflow from 'detect-element-overflow'

const SkillsGrid = () => {
  const constraintDrag = useRef<HTMLDivElement>(null)
  const [isIn, setIsIn] = useState(false)
  const [dropped, setDropped] = useState(false)
  const controls = useDragControls()
  const animationControls = useAnimationControls()

  const dragDrop = () => {
    const parent = document.getElementById('drag-component')
    const element = document.getElementById('drag-element')!
    const target = document.getElementById('drag-target')!
    if (isIn) {
      setDropped(true)
      animationControls.set({
        position: 'absolute',
        x: 225,
        y: 110
      })
    }

  }

  const detectEnter = () => {
    if (isIn) { return }
    const parent = document.getElementById('drag-component')
    const element = document.getElementById('drag-element')!
    const target = document.getElementById('drag-target')!
    const collisions = detectElementOverflow(element, target);
    collisions.overflowLeft >= 15 ?
      setIsIn(false) :
      setIsIn(true)
  }

  useEffect(() => {
    console.log(isIn)
  }, [isIn])

  return (
    <div id="drag-component" ref={constraintDrag} className='relative m-0 h-[300px] w-[300px] bg-red-500'>
      <motion.div
        layout
        id="drag-element"
        onDrag={() => {
          detectEnter()
        }}
        onDragEnd={() => dragDrop()}
        className={`
        bg-white 
        w-[30px] 
        h-[30px] 
        absolute 
        z-10`}
        drag={!dropped}
        dragConstraints={constraintDrag}
        whileDrag={{
          scale: 1.2,
        }}
        animate={animationControls}
        dragControls={controls}
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