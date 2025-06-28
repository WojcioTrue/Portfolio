import React from 'react'
import Slide from './slide/Slide'

const CarouselSlideDisplay = () => {
  return (
    <div className='bg-red-700 w-[200px] h-[200px] relative'>
      <Slide/>
      <Slide/>
    </div>
  )
}

export default CarouselSlideDisplay