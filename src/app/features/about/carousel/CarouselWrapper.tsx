import React from 'react'
import CarouselDisplaySlide from './CarouselDisplaySlide'

const CarouselWrapper = () => {
  return (
    <div className='flex flex-row justify-center bg-green-600 w-[100%] max-w-[1200px] overflow-hidden '>
      <CarouselDisplaySlide/>
      <div className='bg-white h-[50px] w-[50px] absolute left-0'>Left</div>
      <div className='bg-white h-[50px] w-[50px] absolute right-0'>right</div>
    </div>
  )
}

export default CarouselWrapper