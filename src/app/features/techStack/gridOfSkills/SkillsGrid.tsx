'use client'
import React, { useContext, useState } from 'react'
import detectElementOverflow from 'detect-element-overflow'
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
  const { constraintDrag, isTestArr, isClean, isTarget, isOverTarget } = useContext(TechStackContext)
  const constDrag = constraintDrag
  const { testArr, setTestArr } = isTestArr
  const { clean, setClean } = isClean
  const { inTarget, setInTarget } = isTarget
  const { overTarget, setOverTarget } = isOverTarget

  const cleanDrop = () => {
    setInTarget({ boolean: false, id: '' })
    setClean(true)
  }

  const droppedInField = (id: string) => {
    setInTarget({ boolean: true, id })
    setOverTarget({ boolean: false, id: '' })
  }

  const detectEnter = (el: string) => {
    const overflow = 10;
    const element = document.getElementById(el)!
    const target = document.getElementById('drag-target')!
    const collisions = detectElementOverflow(element, target);
    (!(collisions.overflowRight >= overflow) &&
      !(collisions.overflowLeft >= overflow) &&
      !(collisions.overflowTop >= overflow) &&
      !(collisions.overflowBottom >= overflow)
    ) ?
      setOverTarget({ boolean: true, id: el }) :
      setOverTarget({ boolean: false, id: '' })
  }

  return (
    <div id="drag-component" ref={constDrag} className='relative m-0 h-[300px] w-[300px] bg-red-500'>
      {testArr.map((x) => <Icon
        key={x.id}
        constraintDrag={constDrag}
        dragElement={x.id}
        detectEnter={detectEnter}
        overTarget={overTarget}
        top={x.top}
        left={x.left}
        inTarget={inTarget}
        droppedInField={droppedInField}
        arr={testArr}
        cleanTarget={{ boolean: clean, set: setClean }}
        text={x.text}
        imgSrc={x.src}
      />)}
      <div id="drag-target"
        className={`absolute right-[10px] top-[75px] h-[100px] w-[100px] 
        ${overTarget.boolean ? 'bg-green-300' : 'bg-slate-50'}
        ${inTarget.boolean ? 'bg-green-600' : 'bg-slate-50'} `}>
      </div>
      <button onClick={() => { cleanDrop() }} disabled={!inTarget} className='absolute top-[200px] right-[20px] bg-yellow-600 px-5 py-3'>Clear</button>
    </div>

  )
}

export default SkillsGrid