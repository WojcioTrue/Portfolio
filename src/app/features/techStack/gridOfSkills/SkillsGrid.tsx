'use client'
import React, { useContext } from 'react'
import Icon from './Icon'
import { TechStackContext } from '../techStackContext/TechStackContext'
import { CiCircleRemove } from "react-icons/ci";
import { IoReaderOutline } from "react-icons/io5";

import SkillButton from './SkillButton';

export type IconArrType = {
  id: string
  text: string
  src: string
}

export const Arr: IconArrType[] = [
  {
    id: 'drag-element-1',
    text: 'x',
    src: `/images/tech_icons/gradient/html.png`
  },
  {
    id: 'drag-element-2',
    text: 'y',
    src: `/images/tech_icons/gradient/css.png`
  },
  {
    id: 'drag-element-3',
    text: 'y',
    src: `/images/tech_icons/gradient/js.png`
  },
  {
    id: 'drag-element-4',
    text: 'x',
    src: `/images/tech_icons/gradient/react.png`
  },
  {
    id: 'drag-element-5',
    text: 'y',
    src: `/images/tech_icons/gradient/redux.png`
  },
  {
    id: 'drag-element-6',
    text: 'y',
    src: `/images/tech_icons/gradient/ts.png`
  },
  {
    id: 'drag-element-7',
    text: 'x',
    src: `/images/tech_icons/gradient/sass.png`
  },
  {
    id: 'drag-element-8',
    text: 'y',
    src: `/images/tech_icons/gradient/next.png`
  },
  {
    id: 'drag-element-9',
    text: 'y',
    src: `/images/tech_icons/gradient/eslint.png`
  },
]

const SkillsGrid = () => {
  const { constraintDrag, isTestArr, isTarget, dropTarget } = useContext(TechStackContext)
  const constDrag = constraintDrag
  const { testArr } = isTestArr
  const { inTarget, setInTarget } = isTarget

  const cleanDrop = () => {
    setInTarget({ boolean: false, id: '' })
  }

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
                w-[120px] 
                border-[1px]
                shadow-myshadow 
                rounded-lg 
                mb-5
                overflow-hidden'>
        <div ref={dropTarget} id="drag-target"
          className={` top-[80px] h-[120px] m-auto`}>
        </div>
        <div className='w-full flex border-t-[1px] border-my-purple '>
          <SkillButton
            icon={<IoReaderOutline
              className='m-auto'
              size={'30'}
            />} />
          <SkillButton 
          onClick={() => cleanDrop()}
          icon={<CiCircleRemove 
          className='m-auto' 
          size={'35'} 
          />} 
          />
        </div>
      </div>
    </div>

  )
}

export default SkillsGrid