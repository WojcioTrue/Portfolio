'use client'
import React, { useEffect, useRef, useState } from 'react'
import detectElementOverflow from 'detect-element-overflow'
import Icon from './Icon'

const Arr = [
  {
    id: 'drag-element-1',
    top: 50,
    left: 50,
    marker: 'X',
    dropped: false
  },
  {
    id: 'drag-element-2',
    top: 100,
    left: 50,
    marker: 'Y',
    dropped: false
  },
]

const SkillsGrid = () => {
  const constraintDrag = useRef<HTMLDivElement>(null)
  const [isIn, setIsIn] = useState({boolean: false, id: ''})
  const [testArr, setTestArr] = useState(Arr)

  const cleanDrop = () => {
    setIsIn({boolean: false, id: ''});
    const resetArr = testArr.map((x) => {return {...x, dropped : false}})
    setTestArr(resetArr)
  }
  
  const droppedInField = (id : string) => {
    setTestArr(testArr.map((x) => x.id === id ? {...x, dropped : true} : x))
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
      setIsIn({boolean: true, id: el}) :
      setIsIn({boolean: false, id: ''})
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
        droppedInField={droppedInField}
        /> )}
      <p>{isIn.boolean.toString()}</p>
      <div id="drag-target"
        className={`absolute right-[10px] top-[75px] h-[100px] w-[100px] ${isIn.boolean ? 'bg-slate-600' : 'bg-blue-900'}`}>
      </div>
      <button onClick={() => cleanDrop()} disabled={!isIn} className='absolute top-[200px] right-[20px] bg-yellow-600 px-5 py-3'>Clean</button>
    </div>

  )
}

export default SkillsGrid