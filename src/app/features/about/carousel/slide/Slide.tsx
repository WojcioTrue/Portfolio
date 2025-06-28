import React from 'react'

type SlideType = {
    text: string
}

const Slide = ({text} : SlideType) => {
  return (
    <div className='absolute bg-blue-500 h-[100%] w-[100%]'>{text}</div>
  )
}

export default Slide