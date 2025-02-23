'use client'
import React, { useContext } from 'react'
import Icon from './Icon'
import { TechStackContext } from '../techStackContext/TechStackContext'
import SkillButtons from './SkillButtons'


const SkillsGrid = () => {
  const { constraintDrag, isTestArr, dropTarget } = useContext(TechStackContext)
  const constDrag = constraintDrag
  const { testArr } = isTestArr



  return (
    <div id="drag-component" ref={constDrag} className='relative flex flex-col gap-10 items-center m-0 w-[300px] '>
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
      border-my-lightGray 
      border-[1px]
      rounded-[7px] 
      shadow-myshadow'>
        {testArr.map((x, i) =>
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
        <SkillButtons/>
      </div>
    </div>

  )
}

export default SkillsGrid