'use client'
import React, { useContext } from 'react'

import Icon from './Icon'
import { TechStackContext } from '../techStackContext/TechStackContext'

export type IconArrType = {
  id: string
  top: number
  left: number
  text: string
  src: string
}

export const Arr: IconArrType[] = [
  {
    id: 'drag-element-1',
    top: 50,
    left: 50,
    text: 'x',
    src: `/images/ts.png`
  },
  {
    id: 'drag-element-2',
    top: 100,
    left: 50,
    text: 'y',
    src: `/images/ts.png`
  },
]

const SkillsGrid = () => {
  const { constraintDrag, isTestArr, isClean, isTarget } = useContext(TechStackContext)
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
      {testArr.map((x) => <Icon
        key={x.id}
        dragElement={x.id}
        top={x.top}
        left={x.left}
        text={x.text}
        imgSrc={x.src}
      />)}
      <div id="drag-target"
        className={`absolute right-[10px] top-[75px] h-[100px] w-[100px] bg-slate-500`}>
      </div>
      <button onClick={() => { cleanDrop() }} disabled={!inTarget} className='absolute top-[200px] right-[20px] bg-yellow-600 px-5 py-3'>Clear</button>
    </div>

  )
}

export default SkillsGrid