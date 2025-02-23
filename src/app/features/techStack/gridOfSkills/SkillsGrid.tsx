'use client'
import React, { useContext } from 'react'
import Icon from './Icon'
import { TechStackContext } from '../techStackContext/TechStackContext'
import SkillButtons from './SkillButtons'


const SkillsGrid = () => {
  const { constraintDrag, skillArray, dropTarget } = useContext(TechStackContext)
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
      mt-5 
      mx-2 
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
      <div className=' 
                w-[250px] 
                rounded-lg 
                pb-3
                overflow-hidden'>
        <p className='block m-auto w-[80%] text-center text-my-gray select-none text-wrap'>Drag icon and drop it in element below.</p>
        <div ref={dropTarget} id="drag-target"
          className={`
            h-[120px] 
            m-auto mb-2  
            border-my-lightGray 
            border-[1px]
            rounded-[7px] 
            shadow-myshadow`
          }>

        </div>
        <SkillButtons />
      </div>
    </div>

  )
}

export default SkillsGrid