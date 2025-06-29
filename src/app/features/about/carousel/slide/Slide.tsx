import React from 'react'

type SlideType = {
  text: string,
  x: number,
  index: number,
  opacity: number,
  active: boolean
}

const Slide = ({ text, x, opacity, index, active }: SlideType) => {

  return (
    <div className='absolute h-[100%] w-[100%]'>
      <div className='bg-yellow-500 m-[10px] w-[90%] h-[90%]'
        style={{
          transform: `translateX(${x}px) translateY(${x / 20}px)`,
          opacity: opacity
        }}>{text} {`${active}`}
      </div>
    </div>

  )
}

export default Slide