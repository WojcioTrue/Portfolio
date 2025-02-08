'use client'
import React, { useRef, useState } from 'react'
import detectElementOverflow from 'detect-element-overflow'
import Icon from './Icon'

const SkillsGrid = () => {
  const constraintDrag = useRef<HTMLDivElement>(null)
  const [isIn, setIsIn] = useState(false)

  const testArr = [
    {
      id: 'drag-element-1',
      top: 50,
      left: 50,
      active: false,
      marker: 'X',
      dropped: false
    },
    {
      id: 'drag-element-2',
      top: 100,
      left: 50,
      active: false,
      marker: 'Y',
      dropped: false
    },
  ]

  const cleanDrop = () => {
    setIsIn(false)
  }

  const detectEnter = (el: string) => {
    const overflow = 10;
    const parent = document.getElementById('drag-component')
    const element = document.getElementById(el)!
    const target = document.getElementById('drag-target')!
    const collisions = detectElementOverflow(element, target);
    (!(collisions.overflowRight >= overflow) &&
      !(collisions.overflowLeft >= overflow) &&
      !(collisions.overflowTop >= overflow) &&
      !(collisions.overflowBottom >= overflow)
    ) ?
      setIsIn(true) :
      setIsIn(false)
  }

  return (
    <div id="drag-component" ref={constraintDrag} className='relative m-0 h-[300px] w-[300px] bg-red-500'>
      {testArr.map((x) => <Icon 
        key={x.id} constraintDrag={constraintDrag}
        dragElement={x.id}
        detectEnter={detectEnter}
        isIn={isIn}
        top={x.top}
        left={x.left}
        marker={x.marker}
        dropped={x.dropped}
        /> )}
      <p>{isIn.toString()}</p>
      <div id="drag-target"
        className={`absolute right-[10px] top-[75px] h-[100px] w-[100px] ${isIn ? 'bg-slate-600' : 'bg-blue-900'}`}>
      </div>
      <button onClick={() => cleanDrop()} disabled={!isIn} className='absolute top-[200px] right-[20px] bg-yellow-600 px-5 py-3'>Clean</button>
    </div>

  )
}

export default SkillsGrid