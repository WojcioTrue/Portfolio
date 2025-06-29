import React, { useEffect } from 'react'

type SlideType = {
    text: string,
    x: number,
    index: number,
    opacity: number
}

const Slide = ({text, x, opacity} : SlideType) => {

  return (
    <div className='absolute bg-blue-500 h-[100%] w-[100%]'
    style={{
        transform: `translateX(${x}px) translateY(${x/20}px)`,
        opacity: opacity
    }}>{text}</div>
  )
}

export default Slide