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
    src: `/images/html.png`
  },
  {
    id: 'drag-element-2',
    text: 'y',
    src: `/images/css.png`
  },
  {
    id: 'drag-element-3',
    text: 'y',
    src: `/images/js.png`
  },
  {
    id: 'drag-element-4',
    text: 'x',
    src: `/images/react.png`
  },
  {
    id: 'drag-element-5',
    text: 'y',
    src: `/images/redux.png`
  },
  {
    id: 'drag-element-6',
    text: 'y',
    src: `/images/ts.png`
  },
  {
    id: 'drag-element-7',
    text: 'x',
    src: `/images/sass.png`
  },
  {
    id: 'drag-element-8',
    text: 'y',
    src: `/images/next.png`
  },
  {
    id: 'drag-element-9',
    text: 'y',
    src: `/images/eslint.png`
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
    <div id="drag-component" ref={constDrag} className='relative flex flex-col items-center m-0  w-[300px] rounded-[7px] border-my-gray border-[1px] border-opacity-40 bg-red-400'>
      <div className='grid py-2 mt-5 mx-2 grid-cols-3 grid-rows-3 gap-[1px] justify-items-center items-center bg-white w-[250px] h-[230px]'>
        {testArr.map((x, i) =>
          <Icon
            key={i}
            dragElement={x.id}
            imgSrc={x.src}
          />
        )}
      </div>
      <div className=' w-full'>
        <div ref={dropTarget} id="drag-target"
          className={` top-[80px] h-[120px] w-[250px] bg-blue-900 m-auto`}>
        </div>
        <button onClick={() => { cleanDrop() }} disabled={!inTarget} className='block bg-yellow-600 px-5 py-3 m-auto '>Clear</button>
      </div>
    </div>

  )
}

export default SkillsGrid