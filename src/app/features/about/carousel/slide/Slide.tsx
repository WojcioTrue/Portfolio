import React from 'react'

type SlideType = {
  text: string,
  x: number,
  gap: number,
  index: number,
  opacity: number,
  active: boolean
}

const Slide = ({ text, x, gap, opacity, index, active }: SlideType) => {

  return (
    <div className='h-[100%] w-[100%] absolute'>
      <div className='bg-yellow-500 m-[10px] w-[90%] h-[90%]'
        style={{
          transform: `translateX(${x}px) translateY(${15}px)`,
          opacity: opacity
        }}>{text} {`${active}`}
      </div>
    </div>

  )
}

export default Slide