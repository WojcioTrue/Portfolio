import React from 'react'

type SlideType = {
    text: string,
    x: number
}

const Slide = ({text, x} : SlideType) => {
  return (
    <div className='absolute bg-blue-500 h-[100%] w-[100%]'
    style={{
        transform: `translateX(${x}px)`
    }}>{text}</div>
  )
}

export default Slide