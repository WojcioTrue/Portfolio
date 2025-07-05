import React from 'react'

export type SlideType = {
  text: string,
  x: number,
  gap: number,
  index: number,
  active: boolean
}

const Slide = ({ text, x, gap, index, active }: SlideType) => {

  const countOpacity = (arg: number) => {
    console.log('triggered')
    if(0 > arg){
      return 0
    }
    return 1 - index * 0.3
  }

  return (
    <div className='h-[100%] w-[100%] absolute flex items-center justify-center'>
      <div className='bg-yellow-500 w-[100%] h-[100%]'
        style={{
          transform: `translateX(${x + (gap * index)}px)`,
          opacity: countOpacity(index)
        }}>{text} {`${active}`}
      </div>
    </div>

  )
}

export default Slide