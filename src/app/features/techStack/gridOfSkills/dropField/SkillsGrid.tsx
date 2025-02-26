'use client'
import React, { useContext } from 'react'
import Icon from './Icon'
import { TechStackContext } from '../../techStackContext/TechStackContext'
import DropTarget from './DropTarget'


const SkillsGrid = () => {
  const { constraintDrag, skillArray } = useContext(TechStackContext)
  const constDrag = constraintDrag
  const { array } = skillArray



  return (
    <div id="drag-component" ref={constDrag} className='relative flex flex-col gap-4 items-center m-0 w-[300px] '>
      <div className='
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
      border-my-lightGray 
      border-[1px]
      rounded-[7px] 
      bg-white  
      shadow-myshadow'>
        {array.map((x, i) =>
          <Icon
            key={i}
            dragElement={x.id}
            imgSrc={x.src}
          />
        )}
      </div>
      <DropTarget />
    </div>

  )
}

export default SkillsGrid