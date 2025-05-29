'use client'
import React, { useContext } from 'react'
import Icon from './Icon'
import { TechStackContext } from '../../techStackContext/TechStackContext'
import DropTarget from './dropTarget/DropTarget'
import { motion } from 'framer-motion'

const SkillsGrid = () => {
  const { constraintDrag, skillArray } = useContext(TechStackContext)
  const constDrag = constraintDrag
  const { array } = skillArray

  return (
    <div id="drag-component" ref={constDrag} className='relative flex flex-col gap-4 items-center m-0 w-[300px] lg:w-[900px] lg:flex-row lg:justify-center lg:items-center '>
      <motion.div layout className='
      grid 
      grid-cols-3 
      grid-rows-3 
      gap-[1px] 
      justify-items-center 
      items-center 
      w-[250px] 
      h-[230px]
      py-2 
      mx-2
      rounded-[7px] 
      bg-white  
      '
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.6
          }
        }}
        viewport={{
          once: true,
          margin: '0px 0px -100px 0px'
        }}
      >
        {array.map((x, i) =>
          <Icon
            key={i}
            dragElement={x.id}
            imgSrc={x.src}
            whiteImgSrc={x.whiteSrc}
            text={x.text}
          />
        )}
      </motion.div>
      <DropTarget />
    </div>

  )
}

export default SkillsGrid