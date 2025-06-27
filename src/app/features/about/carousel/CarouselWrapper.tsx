import React from 'react'
import CarouselDisplaySlide from './CarouselDisplaySlide'

const CarouselWrapper = () => {
  return (
    <div className='flex flex-row justify-center bg-green-600 w-[100%] max-w-[1200px] overflow-hidden h-[100px] '>
      <CarouselDisplaySlide/>
    </div>
  )
}

export default CarouselWrapper