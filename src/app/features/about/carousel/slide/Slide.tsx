import React from 'react'

export type SlideType = {
  text: string,
  x: number,
  gap: number,
  index: number,
  opacity: number,
  active: boolean
}

const Slide = ({ text, x, gap, opacity, index, active }: SlideType) => {

  return (
    <div className='h-[100%] w-[100%] absolute flex items-center justify-center'>
      <div className='bg-yellow-500 w-[100%] h-[100%]'
        style={{
          transform: `translateX(${x + (gap * index)}px)`,
          opacity: opacity
        }}>{text} {`${active}`}
      </div>
    </div>

  )
}

export default Slide