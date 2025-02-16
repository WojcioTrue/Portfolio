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
    src: `/images/ts.png`
  },
  {
    id: 'drag-element-2',
    text: 'y',
    src: `/images/ts.png`
  },
  {
    id: 'drag-element-3',
    text: 'y',
    src: `/images/ts.png`
  },
  {
    id: 'drag-element-4',
    text: 'x',
    src: `/images/ts.png`
  },
  {
    id: 'drag-element-5',
    text: 'y',
    src: `/images/ts.png`
  },
  {
    id: 'drag-element-6',
    text: 'y',
    src: `/images/ts.png`
  },
  {
    id: 'drag-element-7',
    text: 'x',
    src: `/images/ts.png`
  },
  {
    id: 'drag-element-8',
    text: 'y',
    src: `/images/ts.png`
  },
  {
    id: 'drag-element-9',
    text: 'y',
    src: `/images/ts.png`
  },
]

const SkillsGrid = () => {
  const { constraintDrag, isTestArr, isClean, isTarget, isOverTarget, dropTarget } = useContext(TechStackContext)
  const constDrag = constraintDrag
  const { testArr } = isTestArr
  const { setClean } = isClean
  const { inTarget, setInTarget } = isTarget

  const cleanDrop = () => {
    setInTarget({ boolean: false, id: '' })
    setClean(true)
  }

  return (
    <div id="drag-component" ref={constDrag} className='relative m-0 h-[300px] w-[300px] bg-red-500'>
      <div className='grid mt-5 ml-5 grid-cols-3 grid-rows-3 gap-[1px] justify-items-center bg-slate-300 w-[123px] h-[123px]'>
        {testArr.map((x, i) =>
          <Icon
            key={i}
            dragElement={x.id}
            text={x.text}
            imgSrc={x.src}
            index={i}
          />
        )}
      </div>
      <div  ref={dropTarget} id="drag-target"
        className={`absolute top-[20px] right-[10px] top-[150px] h-[150px] w-[120px] bg-blue-900`}>
      </div>
      <button onClick={() => { cleanDrop() }} disabled={!inTarget} className='absolute top-[200px] right-[20px] bg-yellow-600 px-5 py-3'>Clear</button>
    </div>

  )
}

export default SkillsGrid