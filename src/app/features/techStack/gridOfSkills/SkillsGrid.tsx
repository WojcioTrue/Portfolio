'use client'
import React, { useContext } from 'react'
import Icon from './Icon'
import { TechStackContext } from '../techStackContext/TechStackContext'

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
    <div id="drag-component" ref={constDrag} className='relative flex flex-col items-center m-0  w-[300px] rounded-[7px] shadow-myshadow'>
      <div className='grid py-2 mt-5 mx-2 grid-cols-3 grid-rows-3 gap-[1px] justify-items-center items-center bg-white w-[250px] h-[230px]'>
        {testArr.map((x, i) =>
          <Icon
            key={i}
            dragElement={x.id}
            imgSrc={x.src}
          />
        )}
      </div>
      <div className='bg-blue-900 w-[120px]'>
        <div ref={dropTarget} id="drag-target"
          className={`bg-gray-300 top-[80px] h-[120px] m-auto`}>
        </div>
        <button onClick={() => { cleanDrop() }} disabled={!inTarget} className='block bg-yellow-600 px-5 py-3 m-auto '>Clear</button>
      </div>
    </div>

  )
}

export default SkillsGrid