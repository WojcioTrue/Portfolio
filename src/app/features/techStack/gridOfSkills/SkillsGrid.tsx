'use client'
import { AnimationControls, motion, useAnimationControls, useDragControls } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import detectElementOverflow from 'detect-element-overflow'
import Icon from './Icon'

const SkillsGrid = () => {
  const constraintDrag = useRef<HTMLDivElement>(null)
  const [isIn, setIsIn] = useState(false)




  // const dragDrop = (el : string, controls : AnimationControls) => {
  //   const parent = document.getElementById('drag-component')
  //   const element = document.getElementById(el)!
  //   const target = document.getElementById('drag-target')!
  //   console.log(element.style.top)
  //   if (isIn) {
  //     setDropped(true)
  //     controls.set({
  //       x: 225 - 50,
  //       y: 110 - 50
  //     })
  //   }
  // }

  const cleanDrop = () => {
    console.log('clean drop')
  }

  const detectEnter = (el : string) => {
    if (isIn) { return }
    const parent = document.getElementById('drag-component')
    const element = document.getElementById(el)!
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
      <Icon constraintDrag={constraintDrag}/>
      {/* <motion.div
        layout
        id="drag-element-2"
        onDrag={() => {
          detectEnter("drag-element-2")
        }}
        onDragEnd={() => dragDrop('drag-element-2', animationControls2)}
        className={`
        bg-white 
        w-[30px] 
        h-[30px] 
        absolute 
        top-[100px]
        left-[50px]
        z-10`}
        drag={!dropped2}
        dragConstraints={constraintDrag}
        whileDrag={{
          scale: 1.2,
        }}
        animate={animationControls2}
        dragControls={controls2}
      >
        Y
      </motion.div> */}
      <p>{isIn.toString()}</p>
      <div id="drag-target"
        className={`absolute right-[10px] top-[75px] h-[100px] w-[100px] ${isIn ? 'bg-slate-600' : 'bg-blue-900'}`}>
      </div>
      <button onClick={() => cleanDrop()} className='absolute top-[200px] right-[20px] bg-yellow-600 px-5 py-3'>Clean</button>
    </div>

  )
}

export default SkillsGrid